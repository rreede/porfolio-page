import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router"


export default function CheckoutView2() {
    return(
        <>
            <Header/>

            <div className="wrapper">
              <Link to='checkout-3'><button>To View 3</button></Link>
            </div>
          

            <Footer/>
        </>
    )
}