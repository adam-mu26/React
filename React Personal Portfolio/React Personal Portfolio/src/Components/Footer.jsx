import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
        <section className='icons'>
            <img src='/imgs/img7.png' className='img7' ></img>
            <span className='address-info'>Awerno23@gmail.com</span>
            <img src='/imgs/img8.png' className='img8'></img>
            <span className='address-info'>+972 564 873 90</span>
            <img src='/imgs/img9.png' className='img9'></img>
            <a href='https://maps.app.goo.gl/KyCQuvaYPuzh9jqb6' className='address-info'>jerusalem</a>
            <div className='copyright'>
<img src='/imgs/copyRight.png' className='copy'></img>
<p>AWERNO</p>
    </div>    
        </section>

{/* <div className='copyright'>
<img src='/imgs/copyRight.png' className='copy'></img>
<p>AWERNO</p>
    </div>      */}

      
    </footer>
  )
}
