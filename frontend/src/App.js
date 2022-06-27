import './App.css';
import { useState, useEffect } from 'react'
import {Register} from './pages/Register'
import {Books} from './pages/Books'

function App() {

  const [registerPage, setRegisterPage] = useState(true)
  const registerState = {registerPage, setRegisterPage}

  const [dataBook, setDataBook] = useState('')
  const bookState = {dataBook, setDataBook}

  const state = {registerState, bookState}
  
  return (
    <div className='container'>
      <h1  style={{ marginBottom: 30, }}>Biblioteca Nacional de Brasília</h1>
      {registerPage ? <Register state={state}/> : <Books state={bookState}/>}
    </div>
    )
  
  
}

export default App
