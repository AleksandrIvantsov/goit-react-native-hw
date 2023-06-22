import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../config";

export const register = createAsyncThunk(
  "auth/register",
  async ({ userName, email, password }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = response.user;
      const update = { user, userName };

      const dispatch = thunkAPI.dispatch;
      dispatch(updateUserName(update));

      return response._tokenResponse;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      return response._tokenResponse;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserName = createAsyncThunk(
  "auth/updateUserName",
  async ({ user, userName }, thunkAPI) => {
    try {
      await updateProfile(user, userName);

      return userName.displayName;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);

    return;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
