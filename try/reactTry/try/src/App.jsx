import { useState } from 'react'
import './App.css'
import Morning from './Components/Morning'
import Card from './Components/Card';

function App() {
function change(){
  console.log("HELLO");
}
  return (
    <>
<Morning name="Adam" age="26" change={change}/>


<Card/>


    </>
  )
}

export default App
