import { useState } from 'react'
import ap from '/Untitled-34.jpg'
import './App.css'

function App() {
  return (
    <>
    <h1 className='heading'>My Tunes</h1>
    <div className="container">
      <img src={ap} alt="AP Dhillion" width={400} height={400}/>
      <div className="album">
      <h2>AP Dhilion Albums</h2>
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
            <li>315(feat. Shinda Kahlon & Jazzy B)</li>
            <li>Old Money</li>
            <li>Losing Myself(feat. Gunna)</li>
            <li>Distance</li>
            <li>After Midnight</li>
            <li>Bora Bora(feat. Ayra Starr)</li>
            <li>Sweet Flower(feat. Syra)</li>
            <li>To Be Contuined...-Bonus Track</li>
          </ol>
        </details>
      </div>
    </div>
    </>
  )
}

export default App
