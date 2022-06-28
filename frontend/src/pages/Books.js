import { AiFillBook } from "react-icons/ai"
import axios from 'axios';

const BookRow = ({object, key}) => (
    <>
    <tr>
    <th scope="row">{key}</th>
    <td>{object.name}</td>
    <td>{object.author}</td>
    <td>{object.date}</td>
    </tr>
    </>
  )
  
export function Books({state}) {

    const {dataBook, setDataBook} = state
    const API_URL = 'http://localhost:5000/api/books/'

    axios.get(API_URL)
        .then(res => {
          const books = res.data;
          console.log(books)
          setDataBook(books)
        })
    
    return (
        <div>
            <h1>
            <AiFillBook />Livros cadastrados<AiFillBook />
            </h1>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Nome do Livro</th>
                    <th scope="col">Autor do Livro</th>
                    <th scope="col">Data de publicação</th>
                    </tr>
                </thead>
                 <tbody>
                    {dataBook.map((book, i) => (
                        <BookRow object={book} key={i}/>
                    ))}
                </tbody> 
            </table>
        </div>
    )
}

