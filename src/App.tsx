import "./App.css";
import BookList from "./components/BookList/BookList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Spinner from "./components/UI/LoadingSpinner/Spinner";

const App = () => {
  const isLoading = useSelector((state: RootState) => state.general.isLoading);
  const isError = useSelector((state: RootState) => state.general.isError);
  return (
    <div className="App">
      <SearchPanel />
      {isLoading && <Spinner />}
      {!isError && "error"}
      <BookList />
    </div>
  );
};

export default App;
