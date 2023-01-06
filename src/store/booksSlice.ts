import { IBook } from "./../types/types";
// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.
import { createSlice } from "@reduxjs/toolkit";
interface BooksState {
  query: string;
  searchResults: IBook[];
  selectedBook: any;
  isLoading: boolean;
}

const initialState: BooksState = {
  query: "",
  searchResults: [],
  selectedBook: {},
  isLoading: false,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = [...action.payload];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchResults, setLoading } = booksSlice.actions;

export default booksSlice.reducer;
