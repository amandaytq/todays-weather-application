import "./style.css";
import Box from "../../atoms/Box";
import { BsExclamationCircle } from "react-icons/bs";

type ErrorProps = {
  message: string;
};

const Error = ({ message }: ErrorProps) => {
  return (
    <Box
      padding="medium"
      gap="small"
      alignItems="center"
      className="error-alert"
    >
      <BsExclamationCircle color="#e51313" /> {message}
    </Box>
  );
};

export default Error;
