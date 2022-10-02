import HeaderLogInButton from "./HeaderLogInButton";
import classes from "./Header.module.css";
import Logo from "../../assets/logo.png";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={Logo} />
      <nav className={classes.navbar}>
        <ul>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Tools</a>
          </li>
        </ul>
      </nav>
      <HeaderLogInButton />
    </header>
  );
};

export default Header;
