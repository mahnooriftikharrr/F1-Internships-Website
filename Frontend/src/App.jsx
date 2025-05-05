import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/download.jpeg'
import './App.css'
import Home from './pages/home';
import './pages/home.css';

function App() {
  const [count, setCount] = useState(0)

  const NotFound = () => {
    return (
      
      <div className='b'>
        
        <h1>404</h1>
        <p>Page not found</p>
        
      </div>
    )
  }

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
