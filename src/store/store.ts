import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./bookApi";
import booksSlice from "./booksSlice";
import generalSlice from "./generalSlice";

const rootReducer = combineReducers({
  books: booksSlice,
  general: generalSlice,
  [bookApi.reducerPath]: bookApi.reducer, //https://stackoverflow.com/questions/74190721/how-to-configure-store-with-different-api-slice-reducers-with-different-base-url
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware), //https://redux-toolkit.js.org/rtk-query/overview
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
