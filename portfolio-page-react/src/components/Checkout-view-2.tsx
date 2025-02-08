import Header from "./Header"
import { Link } from "react-router"


export default function CheckoutView2() {
    return(
        <>
            <Header/>

            <div className="wrapper flex flex-col">

            <div className="delivery-method-selector flex flex-col">
            <h1 className='font-bold text-xl mb-6'>Pick a delivery method.</h1>

            <div className="courier-container flex gap-3">
                <input type="radio" name="delivery-method" id="" />
                <label htmlFor="">Courier</label>
            </div>
            <div className="parcel-machine-container mb-6 flex gap-3">
                <input type="radio" name="delivery-method" id="" />
                <label htmlFor="">Parcel Machine</label>
            </div>
            </div>
            <div className="buttons flex justify-between gap-6">
              <Link to='/project/checkout-1'><button className='bg-yellow-500 rounded-md py-3 px-6 text-white'>Back to Shopping Cart</button></Link>
              <Link to='/project/checkout-3'><button className='bg-green-500 rounded-md py-3 px-6 text-white'>Choose Payment method</button></Link>
              </div>
            </div>
          

        </>
    )
}