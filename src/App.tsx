import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dialog, Modal } from '@material-ui/core';

interface AppProps {}

function App({}: AppProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleClick}>open modal</button>
      <Dialog open={open} onClose={handleClose}>
        <div>'hello world'</div>
      </Dialog>
    </div>
  );
}

export default App;
