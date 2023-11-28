import React from 'react'
import { useState } from 'react'
import './Box.css';


function Box() {
    const [isBoxVisible, seltsBoxVisible] = useState(true)
    const BoxVisibility = () => {
        seltsBoxVisible(!isBoxVisible)
    }
    return (
        <>
        {isBoxVisible && < div className='Box'></div>}
        <button onClick={BoxVisibility}>Show/Hide</button>
        </>
    )
}

export default Box
