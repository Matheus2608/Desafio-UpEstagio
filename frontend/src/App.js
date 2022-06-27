import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

import {Register} from './pages/Register'
import {Books} from './pages/Books'

function App() {

  const [registerPage, setRegisterPage] = useState(true)

  const registerState = {registerPage, setRegisterPage}
  
  return (
    <div className='container'>
      <h1  style={{ marginBottom: 30, }}>Biblioteca Nacional de Brasília</h1>
      {registerPage ? <Register state={registerState}/> : <Books state={registerState}/>}
    </div>
    )
  
  
}

export default App
