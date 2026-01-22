import React from 'react'
import  {userData} from "./data/data.js"

const SampleArray = () => {
  return (
    <div>
        {userData.map((user)=>{
            return(
                <div>
                    <div>{user.username}</div>
                    <div>{user.address.street}</div>
                </div>
            )
        })}
    </div>
  )
}

export default SampleArray