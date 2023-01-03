import React from "react";
import { useForm } from "react-hook-form";
import styles from "./SearchPanel.module.css";
import { ReactComponent as SearchIcon } from "./search.svg";

type InputType = {
  query: string;
};

const SearchPanel = () => {
  const { register, handleSubmit, setValue } = useForm<InputType>();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement; //https://bobbyhadz.com/blog/typescript-property-value-not-exist-type-eventtarget
    //   Спустя секунду после ввода последнего символа текста в поисковую строку автоматически должен начаться поиск книг. Если в течении секунды пользователь вводит что-то дополнительно, таймер должен сбрасываться.

    setValue("query", target.value);
    setTimeout(
      handleSubmit((e) => console.log(e)),
      1000
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          className={styles.searchBar}
          {
            ...(register("query"), { onChange: handleChange }) // instead of onchange handler
          }
          placeholder={"enter book name"}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default SearchPanel;
