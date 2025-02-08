import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";
import productList from "./productsList";

export default function CheckoutView1() {

    const cart = JSON.parse(localStorage.getItem("shopping-cart") || "[]");

    return (
        <>
            <Header />
            <div className="wrapper">
                <h1 className="text-2xl">Shopping cart</h1><br />

                <div className="shopping-cart-items">
                    {cart.map((item) => {
                        const product = productList.find(product => product.id === item.id);
                        if (!product) return null; // Return null if product is not found

                        return (
                            <div className="shopping-cart-item" key={item.id}>
                                <img src={`/${product.img}`} alt={product.name} className="shopping-cart-img" />
                                <div className="shopping-cart-info">
                                    <h2 className="text-xl">{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p className="font-bold">{product.price} $</p>
                                    <p>Quantity: {item.quantity}</p> {/* Display the quantity */}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Link to="checkout-2">
                    <button className="bg-green-500 rounded-md py-3 px-6 text-white">To Delivery Methods</button>
                </Link>
            </div>

            <Footer />
        </>
    );
}
