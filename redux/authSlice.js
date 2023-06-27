import { createSlice } from "@reduxjs/toolkit";
import { logIn, logout, register, updateUserName } from "./operations";

const initialState = {
  user: { uid: null, name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  registerError: null,
  logInError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
        state.registerError = null;
        state.logInError = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.uid = action.payload.localId;
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.registerError = null;
        state.logInError = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.registerError = action.payload;
        state.logInError = null;
        state.isRefreshing = false;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.user.name = action.payload;
        state.registerError = null;
        state.logInError = null;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.registerError = action.payload;
        state.logInError = null;
      })
      .addCase(logIn.pending, (state) => {
        state.isRefreshing = true;
        state.logInError = null;
        state.registerError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.uid = action.payload.localId;
        state.user.name = action.payload.displayName;
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.logInError = null;
        state.registerError = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.logInError = action.payload;
        state.isRefreshing = false;
        state.registerError = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user.uid = null;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.logInError = null;
        state.registerError = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logInError = action.payload;
        state.registerError = null;
      });
  },
});

export const authReducer = authSlice.reducer;
