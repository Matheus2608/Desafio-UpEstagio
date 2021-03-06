import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { AiFillCheckCircle } from "react-icons/ai"



export function Register({state}) {
    const {registerState, bookState} = state
    const {registerPage, setRegisterPage} = registerState
    const {dataBook, setDataBook} = bookState
 
    const API_URL = 'http://localhost:5000/api/books/'

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
        e.preventDefault()

        // register
        const book = {
          name: e.target.name.value,
          author: e.target.author.value,
          date: e.target.date.value
        }

        console.log(book)

        axios.post(API_URL, book)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        //update

        // axios.get(API_URL)
        // .then(res => {
        //   const books = res.data;
        //   console.log(books)
        //   setDataBook(books);
        // })
        setRegisterPage(false)
    }

    return (
        <>
          <section className='heading'>
            <h1>
              <AiFillCheckCircle /> Registro
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
                  placeholder='Insira a data de publica????o do livro'
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