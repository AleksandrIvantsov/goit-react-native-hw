import { createSlice } from "@reduxjs/toolkit";
import { addPost, fetchPosts, updatePost } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);
        console.log("action.payload", action.payload);
        console.log("state", state);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((post) => {
          if (post.id === action.payload.postId) {
            post.comments.unshift(action.payload.comment);
          }
          return post;
        });

        console.log("action.payload", action.payload);
        console.log("state", state);
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //   .addCase(deleteContact.pending, (state) => {
    //     state.isDeleting = true;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isDeleting = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       (contact) => contact.id === action.payload.id
    //     );
    //     state.items.splice(index, 1);
    //     toast.success("Contact successfully deleted!");
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.isDeleting = false;
    //     state.error = action.payload;
    //     toast.error(`Something went wrong. Error message: ${state.error}`);
    //   });
  },
});

export const postsReducer = postsSlice.reducer;
