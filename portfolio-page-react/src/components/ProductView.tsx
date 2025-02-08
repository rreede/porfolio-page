import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import productList from "./productsList";

export default function ProductView() {
    const id = Number(useParams().id);
    if (isNaN(id)) return <div>Invalid product ID!</div>;

    const product = productList.find((product) => product.id === id);
    if (!product) return <div>Product not found!</div>;

    // Retrieve cart from localStorage or initialize an empty array
    const [cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("shopping-cart") || "[]");
        return savedCart;
    });

    // Find current product quantity in the cart, default to 1 if not found
    const currentItem = cart.find((item) => item.id === id);
    const [quantity, setQuantity] = useState(currentItem ? currentItem.quantity : 1);

    // Handle quantity change in the input field
    const handleQuantityChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value)); // Ensuring minimum of 1
        setQuantity(value);
    };

    const addToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favorite-products") || "[]");
        if (!favorites.includes(id)) {
            localStorage.setItem("favorite-products", JSON.stringify([...favorites, id]));
        }
        alert(`Added ${product.name} to favorites!`);
    };

    const addToCart = () => {
        // Add the selected product to the cart with the specified quantity
        setCart((prevCart) => {
            let updatedCart = [...prevCart];
            const existingItem = updatedCart.find((item) => item.id === id);

            if (existingItem) {
                // If product exists, update the quantity
                existingItem.quantity += quantity;
            } else {
                // If product doesn't exist, add a new entry
                updatedCart.push({ id, quantity });
            }

            // Save updated cart to localStorage
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
                            value={quantity}  // Controlled input based on state
                            onChange={handleQuantityChange} // Update state when the input changes
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
