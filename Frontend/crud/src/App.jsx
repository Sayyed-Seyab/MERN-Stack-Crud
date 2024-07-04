import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usertable from './Usertable'
import { Box } from '@mui/material'
import Adduser from './Adduser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='red'>
   
    
     <Box>
    <Usertable/>
     </Box>
     </div>
    </>
  )
}

export default App
