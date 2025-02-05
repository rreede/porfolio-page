import { useState } from "react";
import { Link } from "react-router";
import productList from "./productsList";

export default function Main() {
    const [index, setIndex] = useState(0);
    const visibleProducts = 3; // Number of products to show at once
    const totalProducts = productList.length;

    const nextSlide = () => {
        if (index < totalProducts - visibleProducts) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className="wrapper relative px-4 max-w-4xl mx-auto">
            {/* Product Container */}
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${(index * 100) / visibleProducts}%)`, width: `${(totalProducts / visibleProducts) * 100}%` }}
                >
                    {productList.map((product) => (
                        <div key={product.id} className="w-1/3 px-2 text-center bg-white shadow-lg rounded-lg p-4">
                            <img className="w-full object-cover rounded-md" src={`/${product.img[0]}`} alt={product.name} />
                            <div className="product-info mt-5">
                                <strong className="block text-lg">{product.name}</strong>
                                <span className="text-gray-700">{product.price} $</span>
                                <Link to={`product/${product.id}`}>
                                    <button className="bg-blue-500 rounded-md mt-3 px-6 py-3 text-white w-full">
                                        See more
                                    </button>
                                </Link>
                                <button 
                                    className="mt-3 bg-amber-200 px-6 py-3 rounded-md w-full"
                                    onClick={() => alert(`${product.id}`)}
                                >
                                    Add to favorites
                                </button>
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
    );
}
