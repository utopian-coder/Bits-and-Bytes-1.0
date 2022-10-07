import { useContext, useState } from "react";
import { Fragment } from "react";
import Feature from "./components/Features/Feature";
import Header from "./components/Layout/Header";
import Pricing from "./components/Pricing/Pricing";
import Modal from "./components/UI/Modal";
import Welcome from "./components/Welcome/Welcome";
import ModalStateContext from "./store/modal-state-context";

function App() {
  const modalStateCtx = useContext(ModalStateContext);
  return (
    <Fragment>
      {modalStateCtx.isLogInOrSignUpModalOpen && <Modal />}
      <Header />
      <Welcome />
      <Feature />
      <Pricing />
    </Fragment>
  );
}

export default App;
