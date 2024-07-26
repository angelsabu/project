import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {

  //let appName="StudApp";
  const [appName,setAppName]=useState('MovieApp');

  return (
    <>
     <h1>Welcome to {appName} project</h1>
     <br/>
    <Navbar/>
   <Routes>
    <Route path='/' element={<View/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
   </Routes>
    </>
  )
}

export default App