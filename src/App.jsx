import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<h1>Página no encontrada...</h1>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
