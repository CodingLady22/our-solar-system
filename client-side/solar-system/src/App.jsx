import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/home/Main'
import PlanetDetails from './components/PlanetDetails';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/planet/:planetId' element={<PlanetDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
