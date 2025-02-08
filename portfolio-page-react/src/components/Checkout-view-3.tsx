import Header from "./Header"
import { Link } from "react-router"
import { useState } from "react"

export default function CheckoutView3() {
    const [paymentOption, setPaymentOption] = useState('');

    return (
        <>
            <Header />
            <div className="wrapper flex-col">
                <h1 className="text-xl font-bold">Choose Payment Option</h1>

                <form className="flex flex-col">
                    <div className="bank-link-container">
                        <input 
                            type="radio" 
                            id="bankLink" 
                            name="payment" 
                            value="bankLink"
                            checked={paymentOption === "bankLink"}
                            onChange={() => setPaymentOption("bankLink")}
                        />
                        <label htmlFor="bankLink">Bank link</label>
                    </div>

                    <div className="bank-transfer-container">
                        <input 
                            type="radio" 
                            id="bankTransfer" 
                            name="payment" 
                            value="bankTransfer"
                            checked={paymentOption === "bankTransfer"}
                            onChange={() => setPaymentOption("bankTransfer")}
                        />
                        <label htmlFor="bankTransfer">Bank transfer</label>
                    </div>

                    <div className="cod-payment-container">
                        <input 
                            type="radio" 
                            id="cod" 
                            name="payment" 
                            value="cod"
                            checked={paymentOption === "cod"}
                            onChange={() => setPaymentOption("cod")}
                        />
                        <label htmlFor="cod">COD</label>
                    </div>
                </form>

                <Link to="/project/checkout-4">
                    <button 
                        className={`rounded-md py-3 px-6 text-white ${paymentOption ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"}`}
                        disabled={!paymentOption}
                    >
                        To View 4
                    </button>
                </Link>
            </div>
        </>
    );
}
