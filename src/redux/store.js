"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";

// Set up the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add authReducer to the store
  },
});

export default store;
