import { useState, useEffect } from 'react'
import axios from 'axios';
export function Books({state}) {

    const {dataBook, setDataBook} = state
    console.log(dataBook)

    return (
        <div>
            <h1>Livros cadastrados</h1>
        </div>
    )
}
