import { useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { getProduct } from "../services/productApi";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
export default function ProductDetails(){
 const {id}=useParams(); const dispatch=useDispatch(); const fetcher=useCallback(()=>getProduct(id),[id]); const {data:p,loading}=useFetch(fetcher);
 if(loading)return <Loader/>; if(!p)return <div className="empty-state"><h2>Product not found</h2><Link to="/products">Back to shop</Link></div>;
 return <section className="detail-page"><div className="detail-image"><img src={p.image} alt={p.title}/></div><div className="detail-copy"><span className="category-tag">{p.category}</span><h1>{p.title}</h1><div className="rating">★ {p.rating?.rate} <span>({p.rating?.count} reviews)</span></div><p>{p.description}</p><strong className="detail-price">${Number(p.price).toFixed(2)}</strong><div className="detail-actions"><button className="primary-btn" onClick={()=>dispatch(addToCart(p))}>Add to cart</button><Link className="secondary-btn" to="/cart">View cart</Link></div><div className="detail-meta"><span>✓ In stock</span><span>✓ Free delivery</span><span>✓ 30-day returns</span></div></div></section>
}