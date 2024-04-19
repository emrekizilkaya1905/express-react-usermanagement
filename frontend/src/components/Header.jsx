import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <Link to="/"> User Management System</Link>
      </div>
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/add"> Add New User</Link>
      </div>
    </>
  );
};

export default Header;
