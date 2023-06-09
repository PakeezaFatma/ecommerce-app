

import Header from './Component/Home/Header';
import NavBar from './Component/Home/NavBar';
import './App.css'
import Footer from './Component/Footer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About';


function App() {
  return (
    <div className="App">


      <NavBar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      
      
      <Footer/>
     
    </div>
  );
}

export default App;
