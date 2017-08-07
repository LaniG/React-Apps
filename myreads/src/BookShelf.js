import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BookShelf extends Component{
  render(){
    const { shelfBooks, bookToUpdate } = this.props

let reading = shelfBooks.filter((book) => book.shelf === "currentlyReading")
let toRead = shelfBooks.filter((book) => book.shelf === "wantToRead")
let haveRead = shelfBooks.filter((book) => book.shelf === "read")

    return(

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {reading.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top" title={book.subtitle}>
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                      <select id={book.id} defaultValue={book.shelf} onChange={(event) => bookToUpdate(book, event.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="read">Read</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="none">None</option>
                      </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors.join()}</div>
                    </div>
                    </li>
                  ))} {/**end of the function to display all the books currently Reading*/}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {toRead.map((book) => (
                  <li key={book.id}>
                  <div className="book">
                  <div className="book-top" title={book.subtitle}>
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                  <div className="book-shelf-changer">
                    <select id={book.id} defaultValue={book.shelf} onChange={(event) => bookToUpdate(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="none">None</option>
                    </select>
                  </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join()}</div>
                  </div>
                  </li>
                ))} {/**end of the function to display all the books to Read*/}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {haveRead.map((book) => (
                  <li key={book.id}>
                  <div className="book">
                  <div className="book-top" title={book.subtitle}>
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                  <div className="book-shelf-changer">
                    <select id={book.id} defaultValue={book.shelf} onChange={(event) => bookToUpdate(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="none">None</option>
                    </select>
                  </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join()}</div>
                  </div>
                  </li>
                ))} {/**end of the function to display all the books that have been Read*/}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>

    )
  }
}

export default BookShelf
