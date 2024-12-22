"use client";
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  token: null,
  user: null,
  isError: false,
  error: null,
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isError = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isError = true;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

// Export actions
export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
