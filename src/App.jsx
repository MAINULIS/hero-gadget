import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />
     <div className='min-h-[calc(100vh-137px)]'>
     <Outlet />
     </div>
    <Footer />
    </>
  );
};

export default App;