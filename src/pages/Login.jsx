import React from 'react'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=React.useState('')
    const [pass,setPass]=React.useState('')
    const [error,setError]=React.useState(null)
    const [modoRegistro,setModoRegistro]=React.useState(true)
    const navigate=useNavigate()

    const guardarDatos=(e)=>{
        e.preventDefault()
        if(!email.trim()) return setError("ingrese su Email")
        if(!pass.trim()) return setError("ingrese su Contraseña")
        if(pass.length < 6) setError("La Contraseña debe ser de minimo 6 caracteres")
        setError(null)
        if(modoRegistro){
            registrar()
        }else{
            Login()
        }
    }


    //Registrar
    const registrar=React.useCallback(async()=>{
        try {
            const res=await auth.createUserWithEmailAndPassword(email,pass)
            console.log(res.user)
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                id: res.user.uid
            })
            setEmail('')
            setPass('')
            setError('')
        } catch (error) {
            console.log(error)
            if(error.code==='auth/email-already-in-use')setError('Email ya registrado')
        }
    },[email,pass])



    //Login
    const Login=React.useCallback(async()=>{
        try {
            const res=await auth.signInWithEmailAndPassword(email,pass)
            console.log(res.user)
            //limpiar restados
            setEmail('')
            setPass('')
            setError(null)
            navigate('/admin')
        } catch (error) {
            console.log(error)
            if(error.code==='auth/internal-error')setError('Credenciales Incorrectas')
        }
    },[email,pass])






  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-12 col-md-6 xl-4'>
                <form onSubmit={guardarDatos}>
                    {
                        error && (<div className="alert alert-danger" role="alert">
                        {error}
                     </div>)
                    }
                    
                    <input type="email" 
                    className='form-control mb-3'
                    placeholder='Ingrese su email'
                    onChange={e=>setEmail(e.target.value)}
                     />
                    <input type="pass" 
                    className='form-control mb-3'
                    placeholder='Ingrese su contraseña'
                    onChange={e=>setPass(e.target.value)}
                    />

                    
                    <div className='d-grid gap-2'>
                        <button className='btn btn-dark'>
                            {modoRegistro ? 'Registrarse' : 'Acceder'}
                            </button>
                            <button className='btn btn-primary'
                            onClick={()=> setModoRegistro(!modoRegistro)}
                            type='button'
                            >
                            {modoRegistro ? 'Ya estas Registrado' : 'No tienes cuenta?'}
                            </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login



