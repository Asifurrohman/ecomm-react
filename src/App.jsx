
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/auth' element={<Auth></Auth>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  )
}

export default App
