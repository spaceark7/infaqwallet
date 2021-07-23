import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import Dashboard from './pages/Dashboard'
import AddIncome from './pages/AddIncome'
import AddOutcome from './pages/AddOutcome'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <Router>
      <div className='App relative w-full  '>
        <NavBar />
        <main style={{}} className='bg-gray-200 h-full'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/addIncome' component={AddIncome} />
          <Route path='/addOutcome' component={AddOutcome} />
          <Route path='/rincian/:tanggal' component={DetailPage} />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
