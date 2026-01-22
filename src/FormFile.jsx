import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const FormFile = () => {

    const [userName, setUserName] = useState("")
    const [newUser,setNewUser]=useState("")
    const notify = () => toast("Wow so easy!");

    const getUserName=(event)=>{
        setUserName(event.target.value)
    }

    const userDetails=(e)=>{
        e.preventDefault();
        setNewUser(userName)
        notify();
    }

  return (
    <div className='form-section'>
        <form onSubmit={userDetails}>
            <ToastContainer />
        <h2>Welcome {newUser}</h2>
        <input type="text" placeholder=' enter your name' onChange={getUserName}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormFile