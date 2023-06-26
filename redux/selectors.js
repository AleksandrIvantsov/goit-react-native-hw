export const getUserInfo = (state) => state.auth.user;

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getIsRefreshing = (state) => state.auth.isRefreshing;

export const getAuthError = (state) => state.auth.error;

export const getPosts = (state) => state.posts.items;

export const getIsloading = (state) => state.posts.isloading;
