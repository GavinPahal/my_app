import { useState } from 'react'
import ap from '/Untitled-34.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
    <div className='image'>
    <img src={ap} alt="Vite logo"width={200} height={200}/>
    </div>
   <div className='album'>
      <details name="reqs"> 
  <summary>Two Hearts Never Break The Same</summary>
  <ol>
    <li>All Night(Live)</li>
    <li>Hills</li>
    <li>SummerHigh</li>
    <li>Wo Noor</li>
    <li>Dil Nu</li>
  </ol>
</details>
<details name="reqs">
  <summary>Brownprint</summary>
  <ol>
    <li>Brownprint</li>
    <li>315</li>
    <li>Old Money</li>
    <li>Losing Myself</li>
    <li>Distance</li>
    <li>After Midnight</li>
    <li>Bora Bora</li>
    <li>Sweet Flower</li>
    <li>To Be Contuined</li>
  </ol>
</details>
</div>
    </>
  )
}

export default App
