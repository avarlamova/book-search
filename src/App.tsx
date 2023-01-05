import "./App.css";
import BookList from "./components/BookList/BookList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App = () => {
  const isLoading = useSelector((state: RootState) => state.books.isLoading);
  return (
    <div className="App">
      {isLoading && "loading..."}
      <SearchPanel />
      <BookList />
    </div>
  );
};

export default App;
