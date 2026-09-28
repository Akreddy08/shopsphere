import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("shopsphere_wishlist") || "[]");
const wishlistSlice = createSlice({
  name:"wishlist", initialState,
  reducers:{
    toggleWishlist(state, action){
      const i = state.findIndex(x => x.id === action.payload.id);
      if(i >= 0) state.splice(i,1); else state.push(action.payload);
      localStorage.setItem("shopsphere_wishlist", JSON.stringify(state));
    }
  }
});
export const {toggleWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;