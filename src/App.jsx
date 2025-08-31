import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/project'

const App = () => {
  return (
    <div className='text-white'>

     
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Project />} />
      </Routes >
    </div>
  )
}

export default App