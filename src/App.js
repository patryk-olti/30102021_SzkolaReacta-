import React, { useState } from 'react';

import './App.css';

import { BrowserRouter , Routes, Route } from 'react-router-dom';

import AbsoluteButton from './Components/utilis/AbsoluteButton';
import Menu from './Containers/Menu/Menu';
import Home from './Pages/Home';
import DialogPage from './Pages/DialogPage';
import SnackBarPage from './Pages/SnackBarPage';

const App = () => {

  const [ isActiveMenu, setIsActiveMenu ] = useState(false);
  const toggleIsActiveMenu = () => setIsActiveMenu( prev => !prev);

  return (
    <div className="App">
      <BrowserRouter>
        <AbsoluteButton text="menu" top="10" right="10" handleClick={toggleIsActiveMenu} />
        <Menu isActive={isActiveMenu} handleClick={toggleIsActiveMenu} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dialog' element={<DialogPage />} />
          <Route path='/snackbar' element={<SnackBarPage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
