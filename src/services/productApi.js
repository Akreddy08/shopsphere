const API = "https://fakestoreapi.com/products";

export const demoProducts = [
  {id:101,title:"Nova Wireless Headphones",price:79.99,description:"Comfortable wireless headphones with immersive sound and all-day battery life.",category:"electronics",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",rating:{rate:4.6,count:128}},
  {id:102,title:"Urban Runner Sneakers",price:64.99,description:"Lightweight everyday sneakers designed for walking, travel and casual workouts.",category:"men's clothing",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",rating:{rate:4.7,count:214}},
  {id:103,title:"Classic Leather Backpack",price:89.00,description:"Minimal leather backpack with laptop compartment and premium hardware.",category:"women's clothing",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",rating:{rate:4.5,count:96}},
  {id:104,title:"Minimal Gold Bracelet",price:39.50,description:"Elegant everyday bracelet with a clean minimal finish.",category:"jewelery",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",rating:{rate:4.4,count:74}}
];

export async function getProducts() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("API unavailable");
    return await res.json();
  } catch {
    return demoProducts;
  }
}

export async function getProduct(id) {
  const products = await getProducts();
  return products.find(p => String(p.id) === String(id));
}