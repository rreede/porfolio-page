import { useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import productList from "./productsList"; // Make sure productList is correctly imported

export interface Product {
    id: number;
    name: string;
    price: number;
    img: string[];  // Assuming it's an array
    description: string;
}

interface CartItem {
    id: number;
    quantity: number;
}

const getCartFromStorage = (): CartItem[] => {
    try {
        return JSON.parse(localStorage.getItem("shopping-cart") || "[]") as CartItem[];
    } catch {
        return [];
    }
};

const getFavoritesFromStorage = (): number[] => {
    try {
        return JSON.parse(localStorage.getItem("favorite-products") || "[]") as number[];
    } catch {
        return [];
    }
};

export default function ProductView() {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);
    
    if (isNaN(productId)) return <div>Invalid product ID!</div>;

    const product = productList.find((p) => p.id === productId);
    if (!product) return <div>Product not found!</div>;

    const [cart, setCart] = useState<CartItem[]>(getCartFromStorage());
    const currentItem = cart.find((item) => item.id === productId);
    const [quantity, setQuantity] = useState<number>(currentItem ? currentItem.quantity : 1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, parseInt(event.target.value) || 1); 
        setQuantity(value);
    };

    const addToFavorites = () => {
        const favorites = getFavoritesFromStorage();
        if (!favorites.includes(productId)) {
            localStorage.setItem("favorite-products", JSON.stringify([...favorites, productId]));
        }
        alert(`Added ${product.name} to favorites!`);
    };

    const addToCart = () => {
        setCart((prevCart) => {
            let updatedCart = [...prevCart];
            const existingItem = updatedCart.find((item) => item.id === productId);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                updatedCart.push({ id: productId, quantity });
            }

            localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
            return updatedCart;
        });

        alert(`Added ${quantity} of ${product.name} to shopping cart!`);
    };

    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="product-details">
                    <div className="product-view-top-container flex justify-between gap-6">
                        <img src={`/${product.img}`} alt={product.name} className="product-view-img mb-6" />
                        <div className="product-info flex flex-col justify-between gap-2">
                            <h1 className="text-2xl mb-6">{product.name}</h1>
                            <p>{product.description}</p>
                            <p className="font-bold text-xl">{product.price} $</p>
                        </div>
                    </div>

                    {/* Quantity Input */}
                    <div className="flex items-center gap-3 mt-3">
                        <label className="font-bold">Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="w-16 border p-2 text-center rounded-md border-gray-300"
                        />
                    </div>

                    <div className="button-container flex gap-3 mt-3 justify-between">
                        <button className="bg-green-500 rounded-md px-6 py-3 text-white" onClick={addToCart}>
                            Add to Shopping Cart
                        </button>
                        <button className="bg-blue-500 rounded-md px-6 py-3 text-white" onClick={addToFavorites}>
                            Add to Favorites
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
