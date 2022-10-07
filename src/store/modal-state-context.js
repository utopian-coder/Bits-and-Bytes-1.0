import React, { useState } from "react";

const ModalStateContext = React.createContext({
  isLogInOrSignUpModalOpen: false,
  onToggleModalState: () => {},
});

export const ModalStateContextProvider = (props) => {
  const [isLogInOrSignUpModalOpen, setIsLogInOrSignUpModalOpen] =
    useState(false);
  const toggleModalHandler = () => {
    setIsLogInOrSignUpModalOpen((prevSate) => !prevSate);
  };
  return (
    <ModalStateContext.Provider
      value={{
        isLogInOrSignUpModalOpen: isLogInOrSignUpModalOpen,
        onToggleModalState: toggleModalHandler,
      }}
    >
      {props.children}
    </ModalStateContext.Provider>
  );
};

export default ModalStateContext;
