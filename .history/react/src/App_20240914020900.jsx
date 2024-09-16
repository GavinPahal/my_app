import { useState } from 'react'
import ap from '/Untitled-34.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='album'>
<img src={ap} alt="Vite logo" width={400} height={450}/>
    <div className='album'> 
      <details name="reqs">
  <summary>Two Hearts Never Break The Same</summary>
  <ol>
    <li>All Night(Live)</li>
    <li> hills</li>
  </ol>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <ol>
    <li>All Night</li>
    <li> hills</li>
  </ol>
</details>
</div>
</div>
    </>
  )
}

export default App
