import React, { useState } from "react";

export default function SearchPanel() {
  const [query, setQuery] = useState("");
  let url = "http://openlibrary.org/search.json?q=";

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function searchBook(e) {
    e.preventDefault();
    let arr;
    fetch(`${url}${query}`)
      .then((res) => res.json())
      .then((data) => (arr = data.docs.map((a) => a.title)))
      .then(() => console.log(arr));
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
    </div>
  );
}

//API to search books https://openlibrary.org/dev/docs/api/search
