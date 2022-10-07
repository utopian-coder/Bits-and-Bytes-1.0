import React from "react";
import classes from "./Modal.module.css";
import Card from "./Card";
import { Fragment, useContext } from "react";
import { ImCross } from "react-icons/im";
import ModalStateContext from "../../store/modal-state-context";

const Backdrop = () => {
  const modalStateCtx = useContext(ModalStateContext);
  return (
    <div
      className={classes.backdrop}
      onClick={modalStateCtx.onToggleModalState}
    ></div>
  );
};

const ModalOverlay = () => {
  const modalStateCtx = useContext(ModalStateContext);
  return (
    <Card className={classes.modal}>
      <div>
        <ImCross onClick={modalStateCtx.onToggleModalState} />
      </div>
    </Card>
  );
};

const Modal = () => {
  return (
    <Fragment>
      <ModalOverlay />
      <Backdrop />
    </Fragment>
  );
};

export default Modal;
