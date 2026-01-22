import React, { useState,useEffect } from 'react'


const userDetails="https://jsonplaceholder.typicode.com/posts"

console.log(`i am linking posts ${userDetails}`)

const UserPage = () => {

        const [User,setUser]=useState([])

        const userHandler= async ()=>{

            const respones= await fetch(userDetails);
            const data=await respones.json();
            setUser(data);
        }

        useEffect(()=>{
            console.log(userHandler())
        },[])

        console.log(User)

  return (
    <div>UserPage
        <div>
            {User.map((item)=>{
                return(
                <div style={{border:"2px solid #bbbbbb"}}>
                    <h2 style={{color:"blue"}}>{item.title}</h2>
                    <h3>{item.body}</h3>
                </div>
            )})}
        </div>
    </div>
  )
}

export default UserPage