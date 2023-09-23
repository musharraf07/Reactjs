import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let  [counter, setCounter] = useState(15)

//  let counter = 15;

 const addvalue = () =>{
  if(counter == 20){
    alert("You cannot go over 20");
  }
  else{
    setCounter(counter + 1);
  }
  
 }

 
 const removevalue = () =>{
  if(counter <= 0){
    alert("You cannot go below 0");
  }
  else{
    setCounter(counter -1);
  }
  
  
  
 }

  return (
    <>
      <h1> Chai aur react</h1>
      <h2> Counter Value: {counter}</h2>

      <button onClick={addvalue}>Add Value</button><br></br>
      
      <button onClick={removevalue}>Decrease Value</button>
      
    </>
  )
}

export default App
