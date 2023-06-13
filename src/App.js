

import Header from './Component/Home/Header';
import NavBar from './Component/Home/NavBar';
import './App.css'
import Footer from './Component/Footer';
import React,{useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About';
import Movies from './Component/Movies/Movies';
import { ContextAPI } from './Store/ContextAPI';



function App() {
 const ctx=useContext(ContextAPI);
 
  return (
    <div className="App">


      <NavBar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/movies' element={! ctx.isloading && <Movies /> || ctx.isloading && <p>...Loading</p>}/> */}
        <Route path='/movies' element={ctx.isloading ? <p>...Loading</p> : <Movies />} />

       
      </Routes>
      
      
      <Footer/>
     
    </div>
  );
}

export default App;
