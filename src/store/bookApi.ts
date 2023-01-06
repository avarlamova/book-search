import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse, IBook } from "../types/types";
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/dev/docs/api/search",
  }),
  endpoints: (builder) => ({
    getSearchResults: builder.query<IBook[], string>({
      // 1st argument - response, 2nd - payload
      query: (book: string) => ({
        url: "http://openlibrary.org/search.json", // ?q=book
        params: { q: book },
      }),
      transformResponse: (response: ServerResponse) => response.docs, //transform search results to another format
    }),
  }),
});

export const { useGetSearchResultsQuery } = bookApi; // хук генерируется автоматически в зависимости от того, что указано в эндпоинтах
