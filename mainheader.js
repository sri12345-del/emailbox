import { Button, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./mainheader.module.css";
import { useHistory } from "react-router-dom";

const Mainheader = () => {
  const history = useHistory();
  const changehandler = () => {
    localStorage.removeItem("email");
    history.replace("/auth");
  };
  return (
    <div>
      <header className={classes.header}>
        <h2>Email box</h2>
        <ul>
          <li>
            <NavLink to="/auth">auth</NavLink>
          </li>
          <li>
            <NavLink to="/home">home</NavLink>
          </li>
          <li>
            <Button onClick={changehandler}>Logout</Button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Mainheader;
