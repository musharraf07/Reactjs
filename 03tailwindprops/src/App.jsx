import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    usernmae: "musharraf",
    age:21
  }

  let newArr =[1,2,3,4,5]

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">Tailwind test</h1>
      
   <Card username="macbook air m2" btnText="click me"/>
   <Card username= "Iphone 15"/>
    </>
  )
}

export default App
