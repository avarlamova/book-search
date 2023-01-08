import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import styles from "./SearchPanel.module.scss";
import { ReactComponent as SearchIcon } from "./search.svg";
import { setSearchResults } from "../../store/booksSlice";
import { setLoading, setError, setErrorData } from "../../store/generalSlice";
import { useDispatch } from "react-redux";
import { useGetSearchResultsQuery } from "../../store/bookApi";
import { useDebouncedFetching } from "../../hooks/useDebouncedFetching";

const SearchPanel = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedFetching(query);
  const { isFetching, isError, error, data } = useGetSearchResultsQuery(
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

  useEffect(() => {
    dispatch(setError(isFetching));
    if (error) {
      dispatch(setErrorData(error));
    }
    //eslint-disable-next-line
  }, [isError]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement; //https://bobbyhadz.com/blog/typescript-property-value-not-exist-type-eventtarget
    setQuery(target.value);
  };

  function handleKeyDown(keyEvent: any) {
    if (keyEvent.keyCode === 13) {
      keyEvent.preventDefault();
    }
  }

  return (
    <>
      <form className={styles.formWrapper} onKeyDown={handleKeyDown}>
        <input
          spellCheck="false"
          className={styles.searchBar}
          onChange={handleChange} // instead of onchange handler
          placeholder={"enter book name"}
        />
        <button className={styles.submitBtn} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default SearchPanel;
