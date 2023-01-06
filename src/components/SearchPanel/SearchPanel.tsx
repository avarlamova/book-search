import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import styles from "./SearchPanel.module.scss";
import { ReactComponent as SearchIcon } from "./search.svg";
import { setSearchResults, setLoading } from "../../store/booksSlice";
import { useDispatch } from "react-redux";
import { useGetSearchResultsQuery } from "../../store/bookApi";
import { useDebouncedFetching } from "../hooks/useDebouncedFetching";

const SearchPanel = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedFetching(query);
  const { isFetching, isError, data } = useGetSearchResultsQuery(
    debouncedQuery,
    {
      refetchOnReconnect: true,
    }
  );

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setSearchResults(data));
    } else {
      dispatch(setSearchResults([]));
    }
    //eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    dispatch(setLoading(isFetching));
    //eslint-disable-next-line
  }, [isFetching]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement; //https://bobbyhadz.com/blog/typescript-property-value-not-exist-type-eventtarget
    setQuery(target.value);
  };

  return (
    <>
      {/* TODO submit form */}
      <form className={styles.formWrapper}>
        <input
          className={styles.searchBar}
          onChange={handleChange} // instead of onchange handler
          placeholder={"enter book name"}
        />
        <button className={styles.searchIcon} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default SearchPanel;
