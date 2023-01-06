// import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IBook } from "../../types/types";
import BookSnippet from "../BookSnippet/BookSnippet";
import styles from "./BookList.module.scss";
import uniqid from "uniqid";

export const BookList = () => {
  const books: IBook[] = useSelector(
    (state: RootState) => state.books.searchResults
  );
  return (
    <div className={styles.cards}>
      {books.map((book: IBook) => (
        <BookSnippet
          key={uniqid()}
          title={book.title}
          author_name={book.author_name}
          cover_i={book.cover_i}
        />
      ))}
    </div>
  );
};
export default BookList;
