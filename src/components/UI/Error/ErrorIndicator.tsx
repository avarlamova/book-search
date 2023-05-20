import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const ErrorIndicator = () => {
  const errorData = useSelector((state: RootState) => state.general.errorData);
  return (
    <div>
      <p>Error {errorData?.error}</p>
    </div>
  );
};

export default ErrorIndicator;
