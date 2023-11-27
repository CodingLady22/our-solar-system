import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/home/Main'
import Earth2 from './Earth2';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/earth/3' element={<Earth2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
