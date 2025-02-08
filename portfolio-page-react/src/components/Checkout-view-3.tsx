import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router"

export default function CheckoutView3() {
    return(
        <>
            <Header/>
            <div className="wrapper">
                 <Link to='checkout-4'><button className='bg-green-500 rounded-md py-6 px-3'>To View 4</button></Link>
            </div>
            <Footer/>
        </>
    )
}