import React,{useState} from 'react'
import Firstcomponent from './Components/firstComponent';
import SecondComponent from './Components/SecondComponent';


const UseStateComponent = () => {

    const[showResult,setShowResult]=useState(false);


  return (
    <div>
        <h1>useState Practice</h1>
        {showResult ? <Firstcomponent/> : <SecondComponent/>}
    </div>

  )
}

export default UseStateComponent