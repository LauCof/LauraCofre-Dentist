import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h1>Página no encontrada...</h1>}/>
      </Routes>
    </>
  )
}

export default App
