import { IBook } from "./../types/types";
import { createSlice } from "@reduxjs/toolkit";
interface GeneralState {
  selectedBook: any;
  isLoading: boolean;
  isError: boolean;
  errorData: ErrorData | {};
}

type ErrorData = {
  error: string;
  status: string;
};

const initialState: GeneralState = {
  selectedBook: {},
  isLoading: false,
  isError: false,
  errorData: {},
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setErrorData: (state, action) => {
      console.log(action.payload);
      state.errorData = action.payload;
    },
  },
});

export const { setError, setLoading, setErrorData } = generalSlice.actions;

export default generalSlice.reducer;
