import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const count = useSelector(s => s.cart.reduce((n,p)=>n+p.quantity,0));
  const wishlist = useSelector(s => s.wishlist.length);
  const {user, logout} = useAuth();
  const {dark,toggleTheme} = useTheme();
  return <header className="navbar">
    <Link className="brand" to="/"><span>●</span> ShopSphere</Link>
    <nav className="nav-links">
      {["/","/products","/about","/contact"].map((p,i)=><NavLink key={p} to={p}>{["Home","Products","About","Contact"][i]}</NavLink>)}
    </nav>
    <div className="nav-actions">
      <button className="icon-btn" onClick={toggleTheme}>{dark?"☀️":"🌙"}</button>
      <Link className="nav-pill" to="/wishlist">♡ {wishlist}</Link>
      <Link className="nav-pill" to="/cart">🛒 {count}</Link>
      {user ? <button className="login-btn" onClick={logout}>Logout</button> : <Link className="login-btn" to="/login">Login</Link>}
    </div>
  </header>
}