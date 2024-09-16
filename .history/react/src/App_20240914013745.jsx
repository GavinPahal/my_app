import { useState } from 'react'
import ap from '/Untitled-34.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={ap} className="image" alt="Vite logo" width={400} height={450}/>
      </div>
      <div class="accordion">
    <div class="accordion-item">
      <label class="accordion-header" for="accordion-1">Section 1</label>
      <input type="checkbox" id="accordion-1">
      <div class="accordion-content">
        <p>This is the content for section 1. You can add any HTML elements here.</p>
      </div>
    </div>
    
    <div class="accordion-item">
      <label class="accordion-header" for="accordion-2">Section 2</label>
      <input type="checkbox" id="accordion-2">
      <div class="accordion-content">
        <p>This is the content for section 2. You can add any HTML elements here.</p>
      </div>
    </div>
    
    <div class="accordion-item">
      <label class="accordion-header" for="accordion-3">Section 3</label>
      <input type="checkbox" id="accordion-3"></input>
      <div class="accordion-content">
        <p>This is the content for section 3. You can add any HTML elements here.</p>
      </div>
    </div>
  </div>
  
    </>
  )
}

export default App
