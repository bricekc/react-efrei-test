import {useEffect, useState} from 'react';

function ListBook() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("https://express-mongodb-k76a.onrender.com/api/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <ul>
            {books?.map(book => {
                return <li key={book._id}>{book.name}</li>
            })}
        </ul>
    );
}

export default ListBook;