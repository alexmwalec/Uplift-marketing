import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import Services from './pages/Services'


function App() { 
  return (
   <Router>
    <div className='App'>
      <Header>
        <main className='min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </main>
      </Header>
    </div>
   </Router>
     
  )
}

export default App
