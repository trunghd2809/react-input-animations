import React from 'react'

import { ReactInputAnimations } from 'react-input-animations'
import 'react-input-animations/dist/index.css'

const App = () => {
  return (
    <>
      <ReactInputAnimations label='Name' type='text' onChange={(value) => console.log(value)} />
      <ReactInputAnimations label='Email' type='email' />
      <ReactInputAnimations label='Password' type='password' />
    </>
  )
}

export default App
