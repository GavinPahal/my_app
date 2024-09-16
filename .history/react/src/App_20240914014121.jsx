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
    <div class="accordion-item-header">
      What is Web Development?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
      What is HTML?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        HTML, aka HyperText Markup Language, is the dominant markup language for creating websites and anything that can be viewed in a web browser.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
      What are some basic technical skills of a Front-End developer?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        <ul style="padding-left: 1rem;">
          <li>HTML, CSS, JavaScript</li>
          <li>Frameworks (CSS and JavaScript frameworks)</li>
          <li>Responsive Design</li>
          <li>Version Control/Git</li>
          <li>Testing/Debugging</li>
          <li>Browser Developer Tools</li>
          <li>Web Performance</li>
          <li>SEO (Search Engine Optimization)</li>
          <li>CSS Preprocessing</li> 
          <li>Command Line</li>
          <li>CMS (Content Management System)</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
      What is HTTP?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        HTTP, aka HyperText Transfer Protocol, is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
      What is CORS?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.
      </div>
    </div>
  </div>
</div>
    </>
  )
}
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});
export default App
