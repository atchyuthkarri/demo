import React from 'react'
import { useState } from 'react'

const Firstcomponent = (props) => {

    const {name,profession,age,isSuperstar}=props.mahesh
    
    return (
    <div><h1>{name}</h1>
    <p>{profession}</p>
    <p>{age}</p>
    <p>{isSuperstar}</p>
    </div>
  )
}

export default Firstcomponent
 