import { useState } from "react";
import Header from "./Header";
import productList from "./productsList";
import { Link } from "react-router";
import { Product } from "./ProductView";  // Ensure this import matches


// Define types for product

// Retrieve stored favorite product IDs safely
const getFavoriteProducts = (): number[] => {
    try {
        return JSON.parse(localStorage.getItem("favorite-products") || "[]") as number[];
    } catch {
        return [];
    }
};

export default function Favorites() {
    const [favorites, setFavorites] = useState<number[]>(getFavoriteProducts());
    
    // Filter productList to include only favorite products
    const filteredProductList: Product[] = productList.filter(product => favorites.includes(product.id));

    // Function to remove a product from favorites
    const removeFromFavorites = (id: number) => {
        const updatedFavorites = favorites.filter(productId => productId !== id);
        localStorage.setItem("favorite-products", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites); // Update state instead of reloading page
    };

    return (
        <>
            <Header />
            <div className="wrapper flex flex-wrap">
                <h2 className="mb-3 text-2xl w-full">Favorite Products</h2>

                <div className="favoritesContainer flex flex-wrap gap-6">
                    {filteredProductList.length > 0 ? (
                        filteredProductList.map((product) => (
                            <div key={product.id} className="product-container flex text-center gap-3">
                                <img src={product.img[0]} alt={product.name} width="100" className="product-img" />

                                <div className="product-info flex flex-col justify-center gap-0.2">
                                    <h3>{product.name}</h3>
                                </div>
                                <div className="button flex justify-center items-center flex-wrap gap-3">
                                    <Link to={`/product/${product.id}`}>
                                        <button className="bg-green-500 rounded-md py-3 px-6 text-white">See more!</button>
                                    </Link>
                                    <button 
                                        className="bg-red-500 rounded-md text-white px-3 h-10" 
                                        onClick={() => removeFromFavorites(product.id)}
                                    >
                                        Remove from Favorites
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No favorite products yet.</p>
                    )}
                </div>
            </div>
        </>
    );
}
