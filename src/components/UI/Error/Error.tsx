import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

// error
// :
// "TypeError: Failed to fetch"
// status
// :
// "FETCH_ERROR"
const Error = () => {
  const errorData = useSelector((state: RootState) => state.general.errorData);
  console.log(errorData);
  return (
    <div>
      <p>Error {errorData?.error}</p>
    </div>
  );
};

export default Error;
