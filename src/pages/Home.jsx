import { Link } from "react-router-dom";
import { useCallback } from "react";
import { getProducts } from "../services/productApi";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Home(){
 const fetcher=useCallback(getProducts,[]);
 const {data,loading}=useFetch(fetcher);
 return <div>
  <section className="hero">
   <div><span className="eyebrow">NEW COLLECTION 2026</span><h1>Find what<br/><em>fits your life.</em></h1><p>Discover curated products for your everyday world — from tech essentials to timeless style.</p><Link className="primary-btn" to="/products">Shop collection →</Link></div>
   <div className="hero-art"><div className="floating-card">✨ Curated picks<br/><b>Just for you</b></div><div className="hero-circle">SHOP<br/><strong>SMART</strong></div></div>
  </section>
  <section className="section"><div className="section-heading"><div><span className="eyebrow">BROWSE</span><h2>Shop by category</h2></div><Link to="/products">View all →</Link></div>
   <div className="category-grid">
    <Link to="/products/category/electronics" className="category-card cat-tech"><span>⌁</span><b>Electronics</b><small>Tech for your day</small></Link>
    <Link to="/products/category/men's clothing" className="category-card cat-style"><span>◈</span><b>Fashion</b><small>Made to move</small></Link>
    <Link to="/products/category/jewelery" className="category-card cat-jewel"><span>✦</span><b>Jewellery</b><small>Details that shine</small></Link>
    <Link to="/products/category/women's clothing" className="category-card cat-life"><span>◌</span><b>Lifestyle</b><small>Everyday essentials</small></Link>
   </div>
  </section>
  <section className="section"><div className="section-heading"><div><span className="eyebrow">TRENDING NOW</span><h2>Customer favourites</h2></div><Link to="/products">See all →</Link></div>
   {loading?<Loader/>:<div className="product-grid">{data.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div>}
  </section>
  <section className="feature-strip"><div><b>Free shipping</b><span>On orders over $50</span></div><div><b>Secure payment</b><span>100% protected checkout</span></div><div><b>Easy returns</b><span>30-day return policy</span></div><div><b>Support</b><span>Here when you need us</span></div></section>
 </div>
}