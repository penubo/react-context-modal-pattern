import { Dialog } from '@material-ui/core';
import React, { useState } from 'react';

function CustomPage() {
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

export default CustomPage;
