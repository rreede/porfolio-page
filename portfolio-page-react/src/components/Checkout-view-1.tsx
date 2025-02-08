import Header from "./Header";
import { Link } from "react-router";
import productList from "./productsList";

export default function CheckoutView1() {
    const cart = JSON.parse(localStorage.getItem("shopping-cart") || "[]");

    // Calculate the total price
    const totalPrice = cart.reduce((acc, item) => {
        const product = productList.find(product => product.id === item.id);
        if (product) {
            return acc + product.price * item.quantity;
        }
        return acc;
    }, 0);

    return (
        <>
            <Header />
            <div className="wrapper flex flex-col">
                <h1 className="text-2xl">Shopping cart</h1><br />

                <div className="shopping-cart-items">
                    {cart.map((item) => {
                        const product = productList.find(product => product.id === item.id);
                        if (!product) return null; // Return null if product is not found

                        return (
                            <div className="shopping-cart-item flex align-text-bottom gap-3" key={item.id}>
                                <img src={`/${product.img}`} alt={product.name} className="shopping-cart-img-checkout" />
                                <div className="shopping-cart-info">
                                    <h2 className="text-xl">{product.name}</h2>
                                    <p className="font-bold">{product.price} $</p>
                                    <p>Quantity: {item.quantity}</p> {/* Display the quantity */}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Display the total price */}
                <h2 className="text-xl font-bold mt-5 mb-5">Total Price: <br/>{totalPrice.toFixed(2)} $</h2>

                <Link to="/project/checkout-2">
                    <button className="bg-green-500 rounded-md py-3 px-6 text-white">To Delivery Methods</button>
                </Link>
            </div>

        </>
    );
}