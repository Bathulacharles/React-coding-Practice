import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'

function App() {  
  return (
    <div>
     <BrowserRouter>
     <>
     <Header/>
     <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/service' Component={Service}/>
        <Route exact path='/contact' Component={Contact}/>
      </Routes>
      </>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
