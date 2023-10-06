import "./style.css";
import Box from "../../atoms/Box";
import { BsExclamationCircle } from "react-icons/bs";

type ErrorProps = {
  message?: string;
};

const EmptyState = ({ message = "No Records" }: ErrorProps) => {
  return (
    <Box
      className="empty-state"
      padding="large"
      gap="small"
      alignItems="center"
      justifyContent="center"
    >
      <BsExclamationCircle />
      {message}
    </Box>
  );
};

export default EmptyState;
