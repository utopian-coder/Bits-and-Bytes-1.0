import React from "react";
import Logo from "../../assets/logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header id='header' className={classes.header__container}>
      <img src={Logo} alt='brand-logo' />
      <nav>
        <ul className={classes.navbar}>
          <li>
            <a href='#features'>Why Us?</a>
          </li>
          <li>
            <a href='#products'>Products</a>
          </li>
          <li>
            <a href='#'>Tools</a>
          </li>
          <li>
            <a href='#footer'>About Us</a>
          </li>
        </ul>
      </nav>
      <button href='#' className='btn btn__transparent'>
        Log In
      </button>
    </header>
  );
};

export default Header;
