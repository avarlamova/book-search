import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './SearchPanel.module.css'
import {ReactComponent as SearchIcon} from './search.svg'

type InputType = {
    query: string,
};

const SearchPanel = () => {
    const { register, handleSubmit } = useForm<InputType>();
    const onSubmit: SubmitHandler<InputType> = (formInput) =>
    {
        console.log(formInput);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.searchBar} {...register("query")} placeholder={"enter book name"} />
            <input type="submit" />
        </form>
    //     TODO replace button with image
    );
};

export default SearchPanel;
