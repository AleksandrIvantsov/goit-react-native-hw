import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchContacts.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //   })
    //   .addCase(fetchContacts.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //     toast.error(`Something went wrong. Error message: ${state.error}`);
    //   })
    //   .addCase(addContact.pending, (state) => {
    //     state.isAdding = true;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isAdding = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //     toast.success("Contact successfully added!");
    //   })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.isAdding = false;
    //     state.error = action.payload;
    //     toast.error(`Something went wrong. Error message: ${state.error}`);
    //   })
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
