import { useDispatch } from "react-redux";
import { setSelectedBook } from "../../store/generalSlice";
import { IBook } from "../../types/types";
import styles from "./Book.module.scss";
import coverImg from "./cover.jpeg";

type BookType = {
  book: IBook;
};

const BookSnippet = ({ book }: BookType) => {
  const dispatch = useDispatch();

  const cover_src = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : coverImg;

  const authors = book?.author_name?.join(", ");

  const handleClick = () => {
    dispatch(setSelectedBook(book));
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <p className={styles.title}>{book.title}</p>
      <p className={styles.author}>{authors}</p>
      <img className={styles.cover} src={cover_src} alt="cover img" />
    </div>
  );
};
export default BookSnippet;
