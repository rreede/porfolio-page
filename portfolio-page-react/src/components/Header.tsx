import { Link } from "react-router";

export default function Header() {

    return (
        <>
            <header className='mb-6 mt-6'>
                <div className="wrapper">
                    <div className="container">
                        <h1 className='text-3xl mr-9'>Phone.io</h1>
                        <nav>
                            <ul className='nav-links'>
                              <li><Link to='/'>Back to portfolio</Link></li>
                                <li><Link to='/project'>Home</Link></li>
                                <li><Link to='/favorites'>Favorites</Link></li>
                                <li><Link to='/project/checkout-1'>Shopping Cart</Link></li>
                            </ul>
                            <div className="menu-burger">
                                <div className="burger-bar"></div>
                                <div className="burger-bar"></div>
                                <div className="burger-bar"></div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
