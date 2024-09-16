import { useState } from 'react'
import apdhiilion from '/public/ap_dhillon.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="apdhiilion.webp" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
     
    </>
  )
}

export default App
