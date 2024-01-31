import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="admins" element={<Admin/>}/>
      <Route path="users" element={<User/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
