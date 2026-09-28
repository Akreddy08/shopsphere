import { Link } from "react-router-dom";
export default function Footer(){
 return <footer className="footer">
  <div><div className="brand footer-brand"><span>●</span> ShopSphere</div><p>Smart shopping, simple living.</p></div>
  <div><h4>Explore</h4><Link to="/products">Products</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></div>
  <div><h4>Support</h4><p>Secure checkout</p><p>Fast delivery</p><p>24/7 assistance</p></div>
  <div><h4>© 2026 ShopSphere</h4><p>Built with React for Task 15.</p></div>
 </footer>
}