import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("shopsphere_cart") || "[]");

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.find(x => x.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.push({...action.payload, quantity: 1});
      localStorage.setItem("shopsphere_cart", JSON.stringify(state));
    },
    increase(state, action) {
      const item = state.find(x => x.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("shopsphere_cart", JSON.stringify(state));
    },
    decrease(state, action) {
      const item = state.find(x => x.id === action.payload);
      if (item) item.quantity -= 1;
      const next = state.filter(x => x.quantity > 0);
      state.splice(0, state.length, ...next);
      localStorage.setItem("shopsphere_cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const next = state.filter(x => x.id !== action.payload);
      state.splice(0, state.length, ...next);
      localStorage.setItem("shopsphere_cart", JSON.stringify(state));
    },
    clearCart(state) {
      state.splice(0, state.length);
      localStorage.setItem("shopsphere_cart", "[]");
    }
  }
});
export const {addToCart,increase,decrease,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;