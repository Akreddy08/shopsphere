import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";

export default function ProductCard({product}){
 const dispatch=useDispatch();
 const liked=useSelector(s=>s.wishlist.some(x=>x.id===product.id));
 return <article className="product-card">
   <button className={"heart "+(liked?"liked":"")} onClick={()=>dispatch(toggleWishlist(product))}>{liked?"♥":"♡"}</button>
   <Link to={`/products/${product.id}`}><div className="product-image"><img src={product.image} alt={product.title}/></div></Link>
   <div className="product-info">
    <span className="category-tag">{product.category}</span>
    <Link className="product-title" to={`/products/${product.id}`}>{product.title}</Link>
    <div className="rating">★ {product.rating?.rate || 4.5} <span>({product.rating?.count || 50})</span></div>
    <div className="product-bottom"><strong>${Number(product.price).toFixed(2)}</strong><button className="add-btn" onClick={()=>dispatch(addToCart(product))}>Add</button></div>
   </div>
 </article>
}