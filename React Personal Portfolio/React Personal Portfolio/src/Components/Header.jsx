import React from "react";
import "./Header.css"

export default 


function Header({setNavSelected}) {
  return (


<header className="header">
  <nav>
    <ul className="nav">
        <img className="logo" src="/imgs/logo.png"></img>
        <li onClick={() => {setNavSelected("Header")}}>Home</li>
        <li onClick={() => {setNavSelected("About")}}>About</li>
        <li><a href="">Contact Us</a></li>
    </ul>
  </nav>
   <div className="h_line"></div>

   <div className="img-container">
   <img src="/imgs/img1.png" className="img1"></img>
   <img src="/imgs/img3.png" className="img3"></img>
   <img src="/imgs/img4.png" className="img4"></img>
   <img src="/imgs/img6.png" className="img6"></img>
   <img src="/imgs/img5.png" className="img5"></img>
   </div>




   



  </header>

  )
  

}
