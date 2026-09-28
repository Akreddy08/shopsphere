import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/productApi";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
export default function Category(){
 const {categoryName}=useParams(); const fetcher=useCallback(getProducts,[]); const {data,loading}=useFetch(fetcher);
 const products=data.filter(p=>p.category.toLowerCase()===categoryName.toLowerCase());
 return <section className="section"><div className="section-heading"><div><span className="eyebrow">CATEGORY</span><h2>{categoryName.replaceAll("%20"," ")}</h2></div></div>{loading?<Loader/>:<div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>}</section>
}