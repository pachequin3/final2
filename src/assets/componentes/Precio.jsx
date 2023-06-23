import React from 'react'
import "./Precio.css"
const Precio = () => {
  return (
    <div className='texto'>
        <div className='cactusP'>
            <span>Standard Cactus</span>
            <span>$20.0</span>
        </div>
        <p>Succulent</p>
        <img src="src/assets/images/Star.png" alt="" />
        <button className='hola'>
            <div>+</div>
            1
            <div>-</div>
        </button>
    </div>
  )
}

export default Precio