import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
