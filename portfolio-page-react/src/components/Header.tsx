import { Link } from "react-router"

export default function Header() {
    return(
        <>
<header>
    <div className="wrapper">

        <div className="container">
        <h1 className='text-3xl mr-9'>Phone webshop</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Back to portfolio</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                    <li><Link to='/checkout-1'>Shopping Cart</Link></li>
                </ul>
            </nav>
            </div>
    </div>
</header>
        </>
    )
}