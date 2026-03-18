import { Routes, Route } from 'react-router-dom'
import {Homepage} from './pages/homepage'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'

import './App.css'

function App() {
  return (
  <Routes>
    <Route path='/' element= {<Homepage/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
    <Route path='/Orders' element={<Orders/>} />
    <Route path='/Tracking' element={<Tracking/>} />
  </Routes>
  )
}

export default App
