import Header from "./Header";
import productList from "./productsList";
import { Link } from "react-router";

export default function Favorites() {

    // Function to remove product from favorites
    const removeFromFavorites = (id: number) => {
        // Retrieve stored favorite product IDs from localStorage
        const storedFavorites: number[] = JSON.parse(localStorage.getItem("favorite-products") || "[]");

        // Filter out the product with the given ID
        const updatedFavorites = storedFavorites.filter(productId => productId !== id);

        // Update localStorage with the new list of favorite products
        localStorage.setItem("favorite-products", JSON.stringify(updatedFavorites));

        // Force the component to re-render by setting state (this could be done using useState)
        window.location.reload(); // Simple way to reload and show updated favorites
    };

    // Retrieve stored favorite product IDs from localStorage
    const storedFavorites: number[] = JSON.parse(localStorage.getItem("favorite-products") || "[]");

    // Filter productList to include only products that exist in storedFavorites
    const filteredProductList = productList.filter(product => storedFavorites.includes(product.id));

    return (
        <>
            <Header />

            <div className="wrapper flex flex-wrap">
                <h2 className='mb-3 text-2xl w-full'>Favorite Products</h2>

                <div className="favoritesContainer flex flex-wrap gap-6">
                {filteredProductList.length > 0 ? (
                    filteredProductList.map((product) => (
                        <div key={product.id} className="product-container flex text-center gap-3">
                            <img src={product.img} alt={product.name} width="100" className='product-img' />

                            <div className="product-info flex flex-col justify-center gap-0.2">
                                <h3>{product.name}</h3>
                                
                            </div>
                            <div className="button flex justify-center items-center flex-wrap gap-3">
                              
                                <Link to={`/product/${product.id}`}><button className='bg-green-500 rounded-md py-3 px-6 text-white'>See more!</button></Link>
                                <button className='bg-red-500 rounded-md text-white px-3 h-10' onClick={() => removeFromFavorites(product.id)}>Remove from Favorites</button>
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
