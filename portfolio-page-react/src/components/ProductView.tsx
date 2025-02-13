import { useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import productList from "./productsList"; // Ensure productList is correctly imported

export interface Product {
    id: number;
    name: string;
    price: number;
    color: string[];
    img: string[];
    description: string;
}

interface CartItem {
    id: number;
    quantity: number;
    color: string;
}

// Retrieve cart from localStorage
const getCartFromStorage = (): CartItem[] => {
    try {
        return JSON.parse(localStorage.getItem("shopping-cart") || "[]") as CartItem[];
    } catch {
        return [];
    }
};

// Retrieve favorite products from localStorage
const getFavoritesFromStorage = (): number[] => {
    try {
        return JSON.parse(localStorage.getItem("favorite-products") || "[]") as number[];
    } catch {
        return [];
    }
};

// Retrieve selected color from localStorage
const getSelectedColorFromStorage = (productId: number): string | null => {
    try {
        const storedColors = JSON.parse(localStorage.getItem("selected-colors") || "{}");
        return storedColors[productId] || null;
    } catch {
        return null;
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
    const [selectedColor, setSelectedColor] = useState<string | null>(
        getSelectedColorFromStorage(productId) || (product.color.length > 0 ? product.color[0] : null)
    );

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, parseInt(event.target.value) || 1);
        setQuantity(value);
    };

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);

        // Store selected color in localStorage
        const storedColors = JSON.parse(localStorage.getItem("selected-colors") || "{}");
        storedColors[productId] = color;
        localStorage.setItem("selected-colors", JSON.stringify(storedColors));
    };

    const addToFavorites = () => {
        const favorites = getFavoritesFromStorage();
        if (!favorites.includes(productId)) {
            localStorage.setItem("favorite-products", JSON.stringify([...favorites, productId]));
            alert(`Added ${product.name} to favorites!`);
        } else {
            alert(`${product.name} is already in favorites!`);
        }
    };

    const addToCart = () => {
        if (!selectedColor) {
            alert("Please select a color before adding to the cart!");
            return;
        }

        const updatedCart = [...cart];
        const existingItem = updatedCart.find((item) => item.id === productId && item.color === selectedColor);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            updatedCart.push({ id: productId, quantity, color: selectedColor });
        }

        localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        alert(`Added ${quantity} of ${product.name} (${selectedColor}) to shopping cart!`);
    };

    return (
        <>
            <Header />
            <div className="wrapper px-3">
                <div className="product-details">
                    <div className="product-view-top-container flex justify-between gap-6">
                        {/* Display first product image */}
                        <img src={`/${product.img[0]}`} alt={product.name} className="product-view-img mb-6" />

                        <div className="product-info flex flex-col justify-between gap-2">
                            <h1 className="text-2xl mb-6">{product.name}</h1>
                            <p>{product.description}</p>

                            {/* Color Selection */}
                            <p className="font-bold">Available colors:</p>
                            <div className="flex gap-2">
                                {product.color.map((col) => (
                                    <span
                                        key={col}
                                        className={`w-8 h-8 rounded-full border cursor-pointer ${
                                            selectedColor === col ? "border-4 border-black" : "border-gray-300"
                                        }`}
                                        style={{ backgroundColor: col }}
                                        onClick={() => handleColorSelect(col)}
                                    ></span>
                                ))}
                            </div>

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

                    {/* Buttons */}
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
