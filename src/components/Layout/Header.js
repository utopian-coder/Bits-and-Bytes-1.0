import classes from "./Header.module.css";
import Logo from "../../assets/logo.png";
import Button from "../UI/Button";
import { useContext } from "react";
import ModalStateContext from "../../store/modal-state-context";

const Header = (props) => {
  const modalStateCtx = useContext(ModalStateContext);
  return (
    <header className={classes.header}>
      <img src={Logo} alt='Brand-Logo' />
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
      <Button description='Log In' onClick={modalStateCtx.onToggleModalState} />
    </header>
  );
};

export default Header;
