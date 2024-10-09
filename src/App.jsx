import {useState} from 'react'
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Counter from "./pages/Counter.jsx";
import MultipleList from "./pages/MultipleList.jsx";
import BookPage from "./pages/BookPage.jsx";

function App() {
    const [name, setName] = useState('Vite')



    return(
        <>
            <div className="header">
                <Link to={"/welcome"} >welcome</Link>
                <Link to={"/counter"} >counter</Link>
                <Link to={"/listMultiple"} >list multiple 5</Link>
                <Link to={"/listBook"} >list book</Link>
            </div>
            <Routes>
                <Route path="/welcome" element={<Welcome name={name}/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/listMultiple" element={<MultipleList/>}/>
                <Route path="/listBook" element={<BookPage/>}/>
            </Routes>
        </>
    )
}

export default App
