import { Dialog } from '@material-ui/core';
import React, { createContext, useContext, useState } from 'react';

// @ts-ignore
const HelloModalContext = createContext();

// @ts-ignore
const HelloModalProvider = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div>hello world</div>
      </Dialog>
      <HelloModalContext.Provider value={setOpen}>
        {children}
      </HelloModalContext.Provider>
    </>
  );
};

const useHelloModal = () => {
  const setOpen = useContext(HelloModalContext);
  if (setOpen === undefined) {
    throw new Error('useHelloModal must be used in HelloModalProvider');
  }
  const openHelloModal = () => {
    // @ts-ignore
    setOpen(true);
  };
  return openHelloModal;
};

export default HelloModalProvider;
export { useHelloModal };
