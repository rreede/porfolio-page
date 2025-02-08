import Header from "./Header";
// Define CartItem type
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
}

// Safely parse cart from localStorage
const getCartFromStorage = (): CartItem[] => {
    try {
        return JSON.parse(localStorage.getItem("shopping-cart") || "[]") as CartItem[];
    } catch {
        return [];
    }
};

export default function CheckoutView4() {
    const cart: CartItem[] = getCartFromStorage();

    return (
        <>
            <Header />
            <div className="wrapper flex-col">
                <h1 className="text-xl font-bold">Order Summary</h1>

                {cart.map((item) => (
                    <div key={item.id} className="order-summary-container">
                        <div className="order-summary-item">
                            <img 
                                src={`/${item.img}`} 
                                alt={item.name} 
                                className="order-summary-img" 
                            />
                            <div className="order-summary-info">
                                <h2 className="text-xl">{item.name}</h2>
                                <p className="font-bold">{item.price} $</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
