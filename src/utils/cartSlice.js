// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Initialize items as an empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndex === -1) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementItemQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.card.info.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.card.info.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          (item) => item.card.info.id !== action.payload
        );
      }
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart.length = 0;
    },
  },
});

export const {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

// Selector to get total count of items in cart
export const selectCartCount = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
