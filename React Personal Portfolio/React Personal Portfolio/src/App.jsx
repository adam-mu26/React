import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'

function App() {

const [navSelect, setNavSelected] = useState("Header")

  return (
  <>
  <Header setNavSelected={setNavSelected}/>
 {navSelect == "Header" &&     <Hero/>
 }
 {navSelect == "About" &&  <About/>}
    <Footer/>
  </>
   
  )
}

export default App
