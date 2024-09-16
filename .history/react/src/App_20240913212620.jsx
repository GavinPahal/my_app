import { useState } from 'react'
import './App.css'
import Image from 'next/image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Image
                src="/assets/ap_dhillon.jpg"
                alt="Menu"
                width={40}
                height={40}
                className={style.menu}
            />
      </div>
      
      <details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
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
