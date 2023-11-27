import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { auth } from './firebase'
import { BrowserRouter as Router, 
  Routes,
  Route
  } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Consulta from './pages/Consulta'
import Devolucion from './pages/Devolucion'
import Prestamo from './pages/Prestamo'
import Busqueda from './pages/Busqueda'

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false)
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        console.log(user)
        if(user){
          setFirebaseUser(user)
        }else{
          setFirebaseUser(null)
        }
    }) 

    
  },[])

  return firebaseUser!==false ? (
    <Router>
      <div className='container'>
      <Navbar firebaseUser ={firebaseUser}/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='consulta' element={<Consulta/>}/>
        <Route path='busqueda' element={<Busqueda/>}/>
        <Route path='prestamo' element={<Prestamo/>}/>
        <Route path='devolucion' element={<Devolucion/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
      </div>
    </Router>
  ):
  (<p>Loading...</p>)
}

export default App
