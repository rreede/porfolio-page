import Header from "./Header";
import { Link } from "react-router";
import productList from "./productsList";

// Define types for cart items and products
interface Product {
    id: number;
    name: string;
    price: number;
    img: string[];
}

interface CartItem {
    id: number;
    quantity: number;
}

// Safely parse cart from localStorage
const getCartFromStorage = (): CartItem[] => {
    try {
        return JSON.parse(localStorage.getItem("shopping-cart") || "[]") as CartItem[];
    } catch {
        return [];
    }
};

export default function CheckoutView1() {
    const cart: CartItem[] = getCartFromStorage();

    // Calculate the total price
    const totalPrice: number = cart.reduce((acc, item) => {
        const product = productList.find((product: Product) => product.id === item.id);
        return product ? acc + (product.price * item.quantity) : acc;
    }, 0);

    return (
        <>
            <Header />
            <div className="wrapper flex flex-col">
                <h1 className="text-2xl">Shopping cart</h1><br />

                <div className="shopping-cart-items flex gap-6">
                    {cart.map((item) => {
                        const product = productList.find((product: Product) => product.id === item.id);
                        if (!product) return null;

                        return (
                            <div className="shopping-cart-item flex align-text-bottom gap-3" key={item.id}>
                                <img src={`/${product.img}`} alt={product.name} className="shopping-cart-img-checkout" />
                                <div className="shopping-cart-info">
                                    <h2 className="text-xl">{product.name}</h2>
                                    <p className="font-bold">{product.price} $</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <h2 className="text-xl font-bold mt-5 mb-5">Total Price: <br />{totalPrice.toFixed(2)} $</h2>

                <Link to="/project/checkout-2">
                    <button className="bg-green-500 rounded-md py-3 px-6 text-white">To Delivery Methods</button>
                </Link>
            </div>
        </>
    );
}
