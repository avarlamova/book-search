import { useDispatch, useSelector } from "react-redux";
import { setSelectedBook } from "../../store/generalSlice";
import { RootState } from "../../store/store";
import { IBook } from "../../types/types";
import ModalWrapper from "../UI/ModalWrapper/BookModal";
import coverImg from "../../components/BookSnippet/cover.jpeg";

export const BookModal = () => {
  const dispatch = useDispatch();

  const selectedBook: IBook = useSelector(
    (state: RootState) => state.general.selectedBook
  );
  const cover_src = selectedBook.cover_i
    ? `https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-M.jpg`
    : coverImg;
  const authors = selectedBook?.author_name?.join(", ");
  const publishers = selectedBook?.publisher?.[0];
  const isbn = selectedBook?.isbn?.[0];

  const toggleBookModal = () => {
    dispatch(setSelectedBook({}));
  };
  return (
    <ModalWrapper toggleModal={toggleBookModal}>
      <div>
        <img alt="book cover" src={cover_src} />
        {selectedBook.title && (
          <p>
            <strong>Title: </strong>
            {selectedBook.title}
          </p>
        )}
        {selectedBook.author_name && (
          <p>
            <strong>Author: </strong> {authors}
          </p>
        )}
        {selectedBook.first_publish_year && (
          <p>
            <strong>Published:</strong> {selectedBook.first_publish_year}
          </p>
        )}
        {selectedBook.publisher && (
          <p>
            <strong>Publisher:</strong> {publishers}
          </p>
        )}
        {selectedBook.isbn && (
          <p>
            <strong>ISBN:</strong> {isbn}
          </p>
        )}
      </div>
    </ModalWrapper>
  );
};
