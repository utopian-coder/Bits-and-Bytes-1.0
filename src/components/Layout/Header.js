import HeaderLogInButton from "./HeaderLogInButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>bits &amp; bytes </h1>
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
        </ul>
      </nav>
      <HeaderLogInButton />
    </header>
  );
};

export default Header;
