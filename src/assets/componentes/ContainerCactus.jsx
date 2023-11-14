import React from 'react'
import Cactus from './Cactus'
import "./ContainerCactus.css"

const ContainerCactus = () => {
  return (
    <div className='contenedor'>
  <div className='fotoHombre'>
    <img src="src/assets/images/hombre.jpg" alt="" />
    
  </div>
  
  <div className='titulo1'>
    <h1>FIGHT <br></br>
   
      LIKE<br></br>
      
      A<br></br>
      
      CHAM <br></br>
      PION</h1>
  </div>
  <div className='titulo2'>
    <h1>READY FOR YOUR <br></br>
     NEXT LESSON?</h1>
  </div>
  
  <Cactus/>
</div>

  )
}

export default ContainerCactus