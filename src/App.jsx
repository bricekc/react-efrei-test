import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [name, setName] = useState('Vite')
    const [count, setCount] = useState(0)

    return(
        <>
            <h1>Hello world {name}</h1>
            <p> Counter : {count}</p>
            <button onClick={() => setName("toto")}>Change name</button>
            <button onClick={() => setCount((count) => count + 1)}>Change count </button>
        </>
    )
}

export default App
