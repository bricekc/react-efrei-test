import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('Vite')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("https://express-mongodb-k76a.onrender.com/api/books")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error))
    }, [])

    fetch("https://express-mongodb-k76a.onrender.com/api/books").then(res => {
        console.log(res.json())
    })
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1)

    return(
        <>
            <h1>Hello world {name}</h1>
            <p> Counter : {count}</p>
            <button onClick={() => setName("toto")}>Change name</button>
            <button onClick={() => setCount((count) => count + 1)}>increment count</button>
            <button onClick={() => setCount((count) => count - 1)}>decrement count</button>
            <ul>
                {books.map(book => {
                    return <li key={book.id}>{book.name}</li>
                })}
            </ul>
            <ul>
                {
                    numbers.map(number => {
                        if (number % 5 === 0) {
                            return <li key={number}>
                                {number}
                            </li>
                        }
                    })
                }
            </ul>
        </>
    )
}

export default App
