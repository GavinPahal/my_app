import { useState } from 'react'
import ap from '/Untitled-34.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={ap} className="logo" alt="Vite logo" width={100} height={100}/>
      </div>
      
    </>
  )
}

export default App
