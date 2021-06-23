import React, { useState } from "react";

export default function BookList({ titles, authors }) {
  return (
    <div>
      <div>Titles: {titles}</div>
      <div>Authors: {authors}</div>
    </div>
  );
}
