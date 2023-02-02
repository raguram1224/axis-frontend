import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
const EmptyNavBar = () => {
  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"} className={classes.logo}>
                Axis Saral
              </Link>

            </li>
            <li>
            <Link to={"/employee-login"} className={classes.login}>Log In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default EmptyNavBar;
