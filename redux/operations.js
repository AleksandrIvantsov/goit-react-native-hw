import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, db, storage } from "../config";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkAPI) => {
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", post.takenPhoto, true);
        xhr.send(null);
      });

      const imageRef = ref(storage, `${Date.now()}.jpg`);
      await uploadBytes(imageRef, blob);
      blob.close();

      const photoUrl = await getDownloadURL(imageRef);

      const postItem = {
        photoTitle: post.photoTitle,
        photoLocation: post.photoLocation,
        userLocation: post.userLocation,
        photoUrl,
        comments: [],
      };

      const {
        auth: {
          user: { uid },
        },
      } = thunkAPI.getState();

      const response = await addDoc(collection(db, `posts_${uid}`), postItem);

      return { ...postItem, id: response.id };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post, thunkAPI) => {
    const {
      auth: {
        user: { uid },
      },
    } = thunkAPI.getState();

    const commentId = Date.now();
    const createdAt = new Date().toLocaleString("uk-UA", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    try {
      await updateDoc(doc(db, `posts_${uid}`, post.id), {
        comments: arrayUnion({
          id: commentId,
          text: post.text,
          createdAt,
        }),
      });
      return {
        postId: post.id,
        comment: {
          id: commentId,
          text: post.text,
          createdAt,
        },
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const {
        auth: {
          user: { uid },
        },
      } = thunkAPI.getState();

      const response = await getDocs(collection(db, `posts_${uid}`));
      let posts = [];
      response.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });

      return posts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
