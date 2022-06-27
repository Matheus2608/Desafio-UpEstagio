import { useState, useEffect } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiFillBook } from "react-icons/ai"


export function Register({state}) {

    const {registerPage, setRegisterPage} = state

    const [formData, setFormData] = useState({
        name: '',
        author: '',
        date: '',
    })

    

    const { name, author, date } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        setRegisterPage(false)
        e.preventDefault()
    }


    return (
        <>
          <section className='heading'>
            <h1>
              <AiFillBook /> Registro
            </h1>
            <p>Registre um livro preenchendo o campo abaixo</p>
          </section>
    
          <section className='form'>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={name}
                  placeholder='Insira o nome do livro'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='author'
                  name='author'
                  value={author}
                  placeholder='Insira o nome do autor do livro'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='date'
                  className='form-control'
                  id='date'
                  name='date'
                  value={date}
                  placeholder='Insira a data de publicação do livro'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                  Submit
                </button>
              </div>
            </form>
          </section>
        </>
    )
}