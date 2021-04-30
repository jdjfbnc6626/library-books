import { useState } from "react"


const BookList = ({ bookid, title, author, isbn, checkedout, userid}) => {
    const [bookValues, setBookValues] = useState({
        "bookid": bookid,
        "title": title,
        "author": author,
        "isbn": isbn,
        "checkedout": checkedout,
        'userid': userid
    })


    function isCheckedOut (status) {
        if (status === false) {
            return "Book is Available"
        } else {
            return "Book is Not Available"
        }
    }

    function handleCheckout () {
        bookValues.checkedout = true;
            console.log('clicked checkout', bookValues)

        return fetch(`http://localhost:3001/api/books/${bookValues.bookid}`, {
            method: 'PATCH',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookValues)
        })

    }

    return (
    <li key={bookid}>Book Title: {title}, Author: {author}, ISBN: {isbn}, Book Available: {isCheckedOut(checkedout)}<button onClick={()=>{handleCheckout()}}>Check Me Out!</button> </li>
    )
}

export default BookList;