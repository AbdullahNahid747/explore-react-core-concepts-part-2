import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick (){
    alert('Button clicked!')
  }

  const handleClick1 = () => {
    alert('button 2 clicked')
  } 

  const addToFive = (num) =>{
    alert(num + 5);
  }


  return (
    <>
      <h3>React Core Concepts 2 </h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>


      <Counter></Counter>



      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick1}>Click1</button>

      <button onClick={() => {alert('third click')}}>Click2</button>

      <button onClick={() => addToFive(5)}>Four</button>
    </>
  )
}

export default App
