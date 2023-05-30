import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './secure/public/Login'
import Register from './secure/public/Register'
import RedirectToDashboard from './secure/RedirectToDashboard'
import Dashboard from './secure/dashboard/Dashboard'
import Purchases from './secure/purchase/Purchases'
import PurchaseCreate from './secure/purchase/PurchaseCreate'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} Component={RedirectToDashboard} />
          <Route path={'/login'} Component={Login} />
          <Route path={'/register'} Component={Register} />
          <Route path={'/dashboard'} Component={Dashboard} />
          <Route path={'/purchases'} Component={Purchases} />
          <Route path={'/purchases/create'} Component={PurchaseCreate} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
