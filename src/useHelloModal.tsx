import { Dialog } from '@material-ui/core';
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type Action = SetStateAction<boolean>;

type ContextAction = Dispatch<Action>;

const HelloModalContext = createContext<ContextAction | null>(null);

const HelloModalProvider = ({ children }: { children: React.ReactNode }) => {
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
  if (setOpen === null) {
    throw new Error('useHelloModal must be used in HelloModalProvider');
  }
  const openHelloModal = () => {
    setOpen(true);
  };
  return openHelloModal;
};

export default HelloModalProvider;
export { useHelloModal };
