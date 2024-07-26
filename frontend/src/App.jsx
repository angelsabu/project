import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome To Movie</h1>
      <Navbar/>
      <Add/>
      <View/>
      

      </>
  )
}

      
export default App