import React from 'react'
import "./App.css"
import Firstcomponent from './Props/1stcomponent';
import Twocomponent from './Props/2component';
import Threecomponent from './Props/3rdcomponent';
import StateManagement from './State/StateManagement';
import ClickEvent from './ClickEvent';
import FormFile from './FormFile';
import UseStateComponent from './useStatePractice';
import ControlledComponents from "./FormHandling/ControlledComponents"
import SampleArray from './SampleArray';
import UserPage from './UserPage';
import Employee from './Employee';


export const App = () => {

  const User={
    name:"shiva",
    city:"Hyderabad",
    village:"ameerpet"
  }
  const exampleProps = {
    name: "Mahesh Babu",
    profession: "Actor",
    age: 50,
    isSuperstar: true,
    onClick: () => {
      console.log("Jai Babu 🔥");
    },
  };

  let A= "BoB"
  let B="Lucky"
  let C="Atchyu"

  return (
    <div>
    {/* <h1>I like {A} ,{B} ,{C}</h1> */}
    {/* // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiN4q5JTHE8pd8yEMYsn3RmgzgQSsq7Sns9XHozGYLsDRHOevSrdoTFGhDbWIE03qkniAGK4hbG_e0MX_K95pq0Eb6ZnqoWxfRp4eEmw&s=10" alt="" /> */}

      {/* <Firstcomponent mahesh={exampleProps}/>
      <Twocomponent mahesh={exampleProps}/> */}
      {/* <Threecomponent mahesh={exampleProps} cinema={C}/> */}
      {/* <StateManagement/> */}
      {/* <ClickEvent/>
      <FormFile/> */}
      {/* <UseStateComponent/> */}
      {/* <ControlledComponents/>
      <SampleArray/>
      <UserPage/> */}

      <Employee/>
    </div>

  )
}

export default App