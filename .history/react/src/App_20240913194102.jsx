import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="accordion">
        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Accordion?</span>
                <i class="fa-solid fa-plus"></i>
            </header>
            <p class="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
            </p>
        </div>
        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Accordion?</span>
                <i class="fa-solid fa-plus"></i>
            </header>
            <p class="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
            </p>
        </div>
        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Accordion?</span>
                <i class="fa-solid fa-plus"></i>
            </header>
            <p class="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto neque, sed inventore illum ut quis ducimus deleniti temporibus maiores? At nisi sed pariatur cupiditate quidem quod adipisci aut, eos quis minima voluptates non veniam ipsam quasi architecto ducimus error eum id ab, suscipit doloribus, ut accusantium consequuntur voluptate! Unde, hic sed rerum officia totam id libero officiis nihil rem sequi porro labore praesentium repudiandae a blanditiis molestias nisi beatae natus! Ea, ut voluptates, natus harum nesciunt odio hic eveniet reprehenderit veritatis, possimus tempora magni soluta eaque quidem neque maxime nostrum sapiente commodi? Earum ex cumque cupiditate dicta, tempora temporibus quaerat.
            </p>
        </div>
        <div class="accordion-content">
            <header>
                <span class="title">What do you mean by Accordion?</span>
                <i class="fa-solid fa-plus"></i>
            </header>
            <p class="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nobis ut perspiciatis minima quidem nisi, obcaecati, delectus consequatur fuga nostrum iusto ipsam ducimus quibusdam possimus. Maiores non enim numquam voluptatem?
            </p>
        </div>
    </div>
    
    <script src="script.js"></script>
    </>
  )
}

export default App
