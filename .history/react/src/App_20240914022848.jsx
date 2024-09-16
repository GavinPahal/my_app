import { useState } from 'react'
import ap from '/Untitled-34.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='card'>
    <img src={ap} alt="Vite logo" className="image" width={400} height={450}/>
      <details name="reqs">
  <summary>Two</summary>
  <ol>
    <li>All Night(Live)</li>
    <li>Hills</li>
    <li>SummerHigh</li>
    <li>Wo Noor</li>
    <li>Dil Nu</li>
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

    </>
  )
}

export default App
