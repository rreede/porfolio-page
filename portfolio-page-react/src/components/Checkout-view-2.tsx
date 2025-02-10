import Header from "./Header"
import { Link } from "react-router"
import { useState } from "react";



function Courier() {
    return(
        <div>
            <h1 className='text-2xl'>Courier</h1>

            <form action="flex flex-row">

                <div className="courier-select-container">
                    <input type="radio" name="courier-type" id="" />
                    <label htmlFor="" className='ml-3'>DPD (2.49 EUR)</label>
                </div>
                <div className="courier-select-container">
                    <input type="radio" name="courier-type" id="" />
                    <label htmlFor="" className='ml-3'>Venipak (2.99 EUR)</label>
                </div>
                


                </form>
        </div>
    )
}

function ParcelMachine() {
    return(
        <div>
            <h1 className='text-2xl'>ParcelMachine</h1>

            <form action="">

            <div className="courier-select-container">
                    <input type="radio" name="parcel-machine-type" id="" />
                    <label htmlFor="" className='ml-3'>Omniva (5.49 EUR)</label>
                </div>
                <div className="courier-select-container">
                    <input type="radio" name="parcel-machine-type" id="" />
                    <label htmlFor="" className='ml-3'>Venipak (3.99 EUR)</label>
                </div>

            </form>
        </div>
    )
}

export default function CheckoutView2() {

        const [deliveryMethod, setDeliveryMethod] = useState('');


    return(
        <>
            <Header/>

            <div className="wrapper flex flex-col">

            <div className="delivery-method-selector flex flex-col">
            <h1 className='font-bold text-xl mb-6'>Pick a delivery method.</h1>

            <div className="courier-container flex gap-3" onClick={()=> setDeliveryMethod('courier')}>
                <input type="radio" name="delivery-method" id="" />
                <label htmlFor="">Courier</label>
            </div>
            <div className="parcel-machine-container mb-6 flex gap-3" onClick={()=> setDeliveryMethod('parcel-machine')}>
                <input type="radio" name="delivery-method" id="" />
                <label htmlFor="">Parcel Machine</label>

               

            </div>
            <div className="pickedDelivery mb-6">
                {deliveryMethod === 'courier' && (<Courier/>)}
                {deliveryMethod === 'parcel-machine' && (<ParcelMachine/>)}
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