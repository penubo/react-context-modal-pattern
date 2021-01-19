import React from 'react';
import './App.css';
import CustomPage from './CustomPage';
import HelloModalProvider from './useHelloModal';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <HelloModalProvider>
        <CustomPage />
      </HelloModalProvider>
    </div>
  );
}

export default App;
