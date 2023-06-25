export const getUserInfo = (state) => state.auth.user;

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getState = (state) => state.posts.items[0].comments;

export const getPosts = (state) => state.posts.items;

export const getIsloading = (state) => state.posts.isloading;
