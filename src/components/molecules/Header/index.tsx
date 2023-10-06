import "./style.css";
import Typography from "../../atoms/Typography";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Typography variant="h2">Today's Weather</Typography>
      </div>
    </header>
  );
};

export default Header;
