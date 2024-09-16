import { useState } from 'react'
import ap from '/Untitled-34.jpg'
import './App.css'

function App() {
  return (
    <div className="container">
      <h2></h2>
      <img src={ap} alt="Vite logo" width={400} height={400}/>
      <div className="album">
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
    </div>
  )
}

export default App
