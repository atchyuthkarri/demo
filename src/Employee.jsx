import React from 'react'
import {useState,useEffect} from 'react'

const Employee = () => {

    const[name,setName]=useState("")
    const[role,setRole]=useState("")
    const[mail,setMail]=useState("")
    const[dept,setDept]=useState("")

    const empDetails={name,role,mail,dept}

    const emplHandleSubmit=(e)=>{
        e.preventDefault();

        console.log(empDetails)

    }


  return (
    <div>Employee
        <div>
            <form onSubmit={emplHandleSubmit}>
                <label>Name</label>
                <input type="text" name='name' onChange={(event)=>setName(event.target.value)}/><br />

                <label>Role</label>
                <input type="text" name='role' onChange={(event)=>setRole(event.target.value)}/><br />

                <label>email</label>
                <input type="email" name='mail' onChange={(event)=>setMail(event.target.value)}/><br/>

                <label>Dept</label>
                <input type="text" name='dept' onChange={(event)=>setDept(event.target.value)}/><br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Employee