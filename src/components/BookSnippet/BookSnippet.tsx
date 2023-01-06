import { IBook } from "../../types/types";
import styles from "./Book.module.scss";
import coverImg from "./cover.jpeg";

const BookSnippet: React.FC<IBook> = (book: IBook) => {
  const cover_src = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : coverImg;

  const authors = book?.author_name?.join(", ");
  return (
    <div className={styles.card}>
      <p className={styles.title}>{book.title}</p>
      <p className={styles.author}>{authors}</p>
      <img className={styles.cover} src={cover_src} alt="cover img" />
    </div>
  );
};
export default BookSnippet;
