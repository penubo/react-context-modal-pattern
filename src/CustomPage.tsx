import React from 'react';
import { useHelloModal } from './useHelloModal';

function CustomPage() {
  const openHelloModal = useHelloModal();

  return (
    <div>
      <button onClick={openHelloModal}>open modal</button>
    </div>
  );
}

export default CustomPage;
