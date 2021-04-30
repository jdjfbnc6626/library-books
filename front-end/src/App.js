import './App.css';
import { useEffect, useState } from 'react';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({
    userid: 1,
    lastname: '',
    firstname: ''
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/books')
      .then((res) => res.json())
      .then((res) => setBooks(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>SDI Library</h1>
      <ol>
        {books.map(book => <BookList bookid={book.bookid} title={book.title} author={book.author} isbn={book.isbn} checkedout={book.checkedout} userid={user.userid} key={`BookList #${book.bookid}`}/>)}
      </ol>
    </div>
  );
}

export default App;
