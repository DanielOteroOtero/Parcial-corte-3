import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Admin = () => {
    const [user,setUser]=React.useState(null)
    const navigate=useNavigate()
    React.useEffect(()=>{
        if(auth.currentUser){
            console.log("Existe un usuario: "+auth.currentUser);
            setUser(auth.currentUser)
        }else{
            console.log("No existe un usuario")
            navigate('/login')
        }
    },[navigate])








  return (
    <div className='row justify-content-center mt-5'>
    {
        user &&(<h2>{user.email} esta en linea</h2>)
    }
    </div>
    
  )
}

export default Admin


