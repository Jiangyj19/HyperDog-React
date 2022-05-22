import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css';
import 'wow.js/css/libs/animate.css'
import Home from './pages/Home/Home'

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App;
