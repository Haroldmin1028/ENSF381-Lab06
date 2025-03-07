import './App.css'
import './Contact.js'
import Contact from './Contact.js'
import './Home.js'
import Home from './Home.js'
import './About.js'
import About from './About.js'

function App() {
  const homeMessage = "Home Page"
  const contactMessage = "Contact Us"
  const aboutMessage = "About Us"

  const homeDescription = "Welcome to our website."
  const aboutDescription = "We are passionate about delivering quality experiences."
  const contactDescription = "Feel free to reach out to us via email or phone."
  return (
    <div>
      <Home message = {homeMessage} description = {homeDescription}/>
      <About message = {aboutMessage} description = {aboutDescription}/>
      <Contact message = {contactMessage} description = {contactDescription}/>
    </div>
  );
}

export default App;
