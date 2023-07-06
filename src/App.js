

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
import ContactUs from './Component/Home/ContactUs';
import Single from './Component/Home/Single';
import Login from './Component/Signup/Login';



function App() {
 const ctx=useContext(ContextAPI);
 console.log(ctx.isLoading)
  return (
    <div className="App">


      <NavBar/>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path='/movies' element={! ctx.isLoading && <Movies /> || ctx.isLoading && <p>...Loading</p>}/>
        <Route path='/singleproduct/:id' element={<Single/>}/>
        {/* <Route path='/movies' element={ctx.isLoading ? <p>Loading........</p> : <Movies />} /> */}
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      
      <Footer/>
     
    </div>
  );
}

export default App;
