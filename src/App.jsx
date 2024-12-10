import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-3xl font-bold underline'>
        Hello World
      </p>
      <Navbar />
    </>
  ) 
}

export default App
