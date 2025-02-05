import Header from "./Header";
import Footer from "./Footer";
import productList from "./productsList";
import { useParams } from "react-router"; // Correct import for useParams

export default function ProductView() {
    const { id } = useParams(); // Get the id from the URL

    // Filter the product list to get the product with the matching id
    const product = productList.find(product => product.id === parseInt(id)); // Ensure comparison is done correctly

    if (!product) {
        return <div>Product not found!</div>; // Handle case if product isn't found
    }

    return (
        <>
            <Header />

            <div className="wrapper">
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <img src={`/${product.img[0]}`} alt={product.name} />
                    <span>{product.price} $</span><br />
                    <button onClick={() => alert(`Added ${product.name} to favorites!`)}>Add to Favorites</button>
                    <button onClick={()=> alert(`test`)}>Add to shopping cart</button>
                </div>
            </div>

            <Footer />
        </>
    );
}
