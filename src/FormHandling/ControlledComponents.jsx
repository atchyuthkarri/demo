import React, { useState } from 'react'

const ControlledComponents = () => {

    const [username,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [contact,setContact]=useState("")

    const userDetailsHandler=(event)=>{
        event.preventDefault();
        console.log({username,email,password,contact});

    }


  return (
    <div>
        <div>ControlledComponents</div>
        <form onSubmit={userDetailsHandler}>
            <div>UserName</div>
            <input type="text" value={username} onChange={(change)=>setUserName(change.target.value)}/>

            <div>email</div>
            <input type="email" value={email} onChange={(change)=>setEmail(change.target.value)}/>

            <div>Password</div>
            <input type="password" value={password} onChange={(change)=>setPassword(change.target.value)}/>

            <div>Contact</div>
            <input type="number" value={contact} onChange={(change)=>setContact(change.target.value)}/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledComponents