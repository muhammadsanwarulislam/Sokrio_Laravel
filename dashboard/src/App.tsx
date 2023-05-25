import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './secure/public/Login'
import Register from './secure/public/Register'
import RedirectToDashboard from './secure/RedirectToDashboard'
import Dashboard from './secure/dashboard/Dashboard'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} Component={RedirectToDashboard} />
          <Route path={'/login'} Component={Login} />
          <Route path={'/register'} Component={Register} />
          <Route path={'/dashboard'} Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
