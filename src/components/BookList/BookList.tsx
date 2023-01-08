// import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IBook } from "../../types/types";
import BookSnippet from "../BookSnippet/BookSnippet";
import styles from "./BookList.module.scss";

export const BookList = () => {
  const books: IBook[] = useSelector(
    (state: RootState) => state.books.searchResults
  );
  return (
    <div className={styles.cards}>
      {books.map((book: IBook) => (
        <BookSnippet key={book.key} book={book} />
      ))}
    </div>
  );
};
export default BookList;
