import React from 'react'
import ReactDOM from 'react-dom/client'
import { ListCards, NavBar } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <ListCards />
  </React.StrictMode>
)
