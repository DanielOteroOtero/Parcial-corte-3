import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Navbar = (props) => {

    const navigate=useNavigate()
    const cerrarSesion=()=>{
        auth.signOut()
        .then(()=>{
            navigate('/login')
        })
    }





  return (
    <div className='navbar navbar-dark bg-dark'>
        <Link className='navbar-brand' to="/">Universidad de la costa</Link> 
        <div className='d-flex'>
            <Link className='btn btn-dark' to="/">Inicio</Link>
            <Link className='btn btn-dark' to="/login">Login</Link>
            {
                props.firebaseUser!==null ?(
                    <Link className='btn btn-dark' to="/consulta">Consulta</Link>
                ): null
            }
            {
                props.firebaseUser!==null ?(
                    <Link className='btn btn-dark' to="/busqueda">Busqueda</Link>
                ): null
            }
            {
                props.firebaseUser!==null ?(
                    <Link className='btn btn-dark' to="/prestamo">Prestamo</Link>
                ): null
            }
            {
                props.firebaseUser!==null ?(
                    <Link className='btn btn-dark' to="/devolucion">Devolucion</Link>
                ): null
            }
            {
                props.firebaseUser!==null ?(
                    <Link className='btn btn-dark' to="/admin">Admin</Link>
                ): null
            }
            {
                props.firebaseUser!==null ?(
                    <button className='btn btn-dark' onClick={()=>cerrarSesion()}>Cerrar Sesion</button>
                ): null
            }

            
            
            
        </div>
    </div>
  )
}

export default Navbar
