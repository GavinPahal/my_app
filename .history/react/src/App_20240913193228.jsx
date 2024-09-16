import { useState } from 'react'
import apdhiilion from '/public/ap_dhillon.jpg '

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="/public/ap_dhillon.jpg " target="_blank">
          <img src={apdhiilion} className="logo" alt="Vite logo" />
        </a>
      </div>
     
    </>
  )
}

export default App
