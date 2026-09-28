import { Outlet, Link } from "react-router-dom";
export default function ProductsLayout(){
 return <><section className="page-banner"><span className="eyebrow">THE SHOP</span><h1>Explore products</h1><p>Find something useful, beautiful, or simply you.</p></section>
 <div className="shop-tabs"><Link to="/products">All</Link><Link to="/products/category/electronics">Electronics</Link><Link to="/products/category/men's clothing">Fashion</Link><Link to="/products/category/jewelery">Jewellery</Link><Link to="/products/category/women's clothing">Lifestyle</Link></div><Outlet/></>
}