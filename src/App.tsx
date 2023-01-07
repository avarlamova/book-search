import "./App.css";
import BookList from "./components/BookList/BookList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Spinner from "./components/UI/LoadingSpinner/Spinner";
import ErrorIndicator from "./components/UI/Error/ErrorIndicator";
import { BookModal } from "./components/BookModal/BookModal";

const App = () => {
  const isLoading = useSelector((state: RootState) => state.general.isLoading);
  const isError = useSelector((state: RootState) => state.general.isError);
  const selectedBook = useSelector(
    (state: RootState) => state.general.selectedBook
  );
  return (
    <div className="App">
      {Object.keys(selectedBook).length > 0 && <BookModal />}
      <SearchPanel />
      {isLoading && <Spinner />}
      {!isError && <ErrorIndicator />}
      <BookList />
    </div>
  );
};

export default App;
