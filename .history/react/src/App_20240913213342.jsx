import { useState } from 'react'
import ap from '/AP_Dhillon_CA.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={ap} className="logo" alt="Vite logo" />
      </div>
      
    </>
  )
}

export default App
