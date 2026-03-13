import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products"
import { useCart } from "../hooks/useCart"

export default function ProductDetails(){
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart, cartItems } = useCart()
    
    const product = getProductById(id)

    if(!product){
        navigate('/')
        return null
    }

    const productInCart = cartItems.find(item => item.id === product.id)
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : ''

    return <div className="page">
        <div className="container">
            <div className="product-detail">
                <div className="product-detail-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-detail-content">
                    <h1 className="product-detail-name">{product.name}</h1>
                    <p className="product-detail-price">${product.price.toFixed(2)}</p>
                    <p className="product-detail-description">{product.description}</p>
                    <button onClick={() => addToCart(product.id)} className="btn btn-primary">
                        Add to Cart {productQuantityLabel}
                    </button>
                </div>
            </div>
        </div>
    </div>
}