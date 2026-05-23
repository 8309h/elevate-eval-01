import { useContext, useState } from 'react'
import{Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Courses from './pages/Courses'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './component/Navbar'

function App() {
  const {theme} = useContext(ThemeContext)

  return (
  <div style={{
    backgroundColor : theme == "light" ? "white" : "black",
    color: theme == "light" ? "black" : "white",
    minHeight:"100vh"
  }}>
    <Navbar/>
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>

      
    </Routes>
  </div>
  )
}

export default App
