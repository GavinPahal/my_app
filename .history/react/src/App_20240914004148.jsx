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
   
      <details name="reqs">
  <summary >Graduation Requirements</summary>
  <p>
    1.woonoor
    2.hills
    3. dill nu
  </p>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="reqs">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>

    </>
  )
}

export default App
