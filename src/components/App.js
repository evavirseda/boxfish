import Header from './Header/Header'
import Hero from './Hero/Hero'
import { useState } from 'react'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'
import './App.css'


const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Header />
      <Hero />
      <button variant="link" onClick={() => setDarkMode(prevMode => !prevMode)} className="switch">
        <img src={darkMode ? sun : moon} alt="sun-moon icon"/>
      </button>
    </div>
  )
}
export default App
