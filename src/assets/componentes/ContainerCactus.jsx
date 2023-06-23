import React from 'react'
import Cactus from './Cactus'
import "./ContainerCactus.css"
import Precio from './Precio'
const ContainerCactus = () => {
  return (
    <div className='contenedor'> 
    <Cactus/>
    <Precio/>

    </div>
  )
}

export default ContainerCactus