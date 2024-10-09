import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [name, setName] = useState('Vite')
    const [count, setCount] = useState(0)
    const books = [
        {
            id:1,
            name: "livre1",
        },
        {
            id:2,
            name: "livre2",
        },
        {
            id:3,
            name: "livre3",
        },
    ]

    const numbers = Array.from({ length: 100 }, (_, i) => i + 1)

    return(
        <>
            <h1>Hello world {name}</h1>
            <p> Counter : {count}</p>
            <button onClick={() => setName("toto")}>Change name</button>
            <button onClick={() => setCount((count) => count + 1)}>augmente count</button>
            <button onClick={() => setCount((count) => count - 1)}>réduis count</button>
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
