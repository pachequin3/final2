import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContainerCactus from './assets/componentes/ContainerCactus'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <ContainerCactus/>
   </div>
  )
}

export default App
