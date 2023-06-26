import { createSlice } from "@reduxjs/toolkit";
import { logIn, logout, register, updateUserName } from "./operations";

const initialState = {
  user: { uid: null, name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.uid = action.payload.localId;
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.user.name = action.payload;
        state.error = null;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.uid = action.payload.localId;
        state.user.name = action.payload.displayName;
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user.uid = null;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
