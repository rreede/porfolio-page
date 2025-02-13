import { useState, useEffect } from "react";
import { Link } from "react-router";
import productList from "./productsList";

export default function Main() {
    const [index, setIndex] = useState(0);
    const [visibleProducts, setVisibleProducts] = useState(3);
    const totalProducts = productList.length;

    useEffect(() => {
        const updateVisibleProducts = () => {
            setVisibleProducts(window.innerWidth < 800 ? 1 : 3);
            setIndex(0); // Reset index when resizing to prevent unexpected skips
        };

        updateVisibleProducts(); // Initial check
        window.addEventListener("resize", updateVisibleProducts);
        return () => window.removeEventListener("resize", updateVisibleProducts);
    }, []);

    const nextSlide = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex > totalProducts - visibleProducts ? totalProducts - visibleProducts : newIndex;
        });
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
    };

    const addToFavorites = (id: number) => {
        const favorites = JSON.parse(localStorage.getItem("favorite-products") || "[]");
        if (!favorites.includes(id)) {
            favorites.push(id);
            localStorage.setItem("favorite-products", JSON.stringify(favorites));
        }
    };

    return (
        <div className="container px-4 max-w-4xl mx-auto flex-wrap">
            <h1 className="block mb-4 text-xl ml-7 font-bold">⭐ Popular products</h1>
            <div className="wrapper relative overflow-hidden">
                {/* Product Container */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-300"
                        style={{
                            transform: `translateX(-${(index * 100) / totalProducts}%)`,
                            width: `${(totalProducts / visibleProducts) * 100}%`,
                        }}
                    >
                        {productList.map((product) => (
                            <div 
                                key={product.id} 
                                className="px-2 text-center bg-white shadow-lg rounded-lg p-4"
                                style={{ width: `${100 / visibleProducts}%` }} 
                            >
                                <img className="w-full object-cover rounded-md product-img-carousel" src={`/${product.img[0]}`} alt={product.name} />
                                <div className="product-info mt-5">
                                    <strong className="block text-lg">{product.name}</strong>
                                    <span className="text-gray-700">{product.price} $</span>
                                    <Link to={`product/${product.id}`}>
                                        <button
                                            className="mt-3 bg-amber-200 px-6 py-3 rounded-md w-full"
                                            onClick={() => {
                                                addToFavorites(product.id);
                                                alert(`Product ${product.id} added to favorites`);
                                            }}
                                        >
                                            Add to favorites
                                        </button>
                                        <button className="bg-blue-500 rounded-md mt-3 px-6 py-3 text-white w-full">
                                            See more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left & Right Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    disabled={index === 0}
                >
                    ◀
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    disabled={index >= totalProducts - visibleProducts}
                >
                    ▶
                </button>
            </div>
        </div>
    );
}
