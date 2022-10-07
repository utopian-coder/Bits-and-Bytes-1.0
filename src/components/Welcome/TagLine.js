import { useContext } from "react";
import ModalStateContext from "../../store/modal-state-context";
import Button from "../UI/Button";
import classes from "./TagLine.module.css";

const TagLine = (props) => {
  const modalStateCtx = useContext(ModalStateContext);
  return (
    <div className={classes.tag}>
      <h1>Learn to Code effectively.</h1>
      <div className={classes["attract-lines"]}>
        <p>Good resources build consistency.</p>
        <p>Give us a chance and fall in love with coding.</p>
      </div>
      <Button
        description='Sign Up'
        onClick={modalStateCtx.onToggleModalState}
      />
      <a href='#'>Get started </a>
    </div>
  );
};

export default TagLine;
