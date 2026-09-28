import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/productApi";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Products(){
 const [params,setParams]=useSearchParams();
 const search=params.get("search")||"";
 const max=params.get("max")||"1000";
 const sort=params.get("sort")||"featured";
 const fetcher=useCallback(getProducts,[]);
 const {data,loading}=useFetch(fetcher);
 const filtered=useMemo(()=>{
  let x=data.filter(p=>p.title.toLowerCase().includes(search.toLowerCase())&&Number(p.price)<=Number(max));
  if(sort==="low") x.sort((a,b)=>a.price-b.price);
  if(sort==="high") x.sort((a,b)=>b.price-a.price);
  return x;
 },[data,search,max,sort]);
 return <section className="section shop-section">
  <div className="filter-bar"><input value={search} placeholder="Search products..." onChange={e=>{params.set("search",e.target.value);setParams(params)}}/><select value={sort} onChange={e=>{params.set("sort",e.target.value);setParams(params)}}><option value="featured">Featured</option><option value="low">Price: Low to high</option><option value="high">Price: High to low</option></select><input className="price-input" type="number" value={max} onChange={e=>{params.set("max",e.target.value);setParams(params)}} placeholder="Max $"/></div>
  {loading?<Loader/>:<>{filtered.length?<div className="product-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state"><h2>No products found</h2><p>Try another search or increase your price limit.</p></div>}</>}
 </section>
}