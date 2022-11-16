import React, { useState } from "react";
import BookList from "./book-list";
import Spinner from "./spinner";

export const  SearchPanel = ()  => {
  const url = "http://openlibrary.org/search.json?q=";

  const [query, setQuery] = useState("");
  const [titles, setTitles] = useState("");
  const [authors, setAuthors] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function searchBook(e) {
    setIsLoaded(false);
    e.preventDefault();
    let titlesArr;
    let authorsArr;
    fetch(`${url}${query}`)
      .then((res) => res.json())
      .then((data) => {
        titlesArr = data.docs.map((a) => a.title);
        authorsArr = data.docs.map((a) => a.author_name);
      })
      .then(() => {
        setTitles(titlesArr);
        setAuthors(authorsArr);
        setIsLoaded(true);
      });
    return titles;
  }

  return (
    <div>
      <form onSubmit={searchBook}>
        <input
          onChange={handleChange}
          value={query}
          type="text"
          placeholder="Search..."
        ></input>
        <button type="submit"> Search</button>
      </form>
      {isLoaded ? <BookList titles={titles} authors={authors} /> : <Spinner />}
    </div>
  );
}

//API to search books https://openlibrary.org/dev/docs/api/search
