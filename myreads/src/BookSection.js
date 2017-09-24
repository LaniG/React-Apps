import React, { Component } from 'react'
import BookInfo from './BookInfo'
import PropTypes from 'prop-types'

class BookSection extends Component{
  render(){
    const { title, books} = this.props

    console.log(title);
    console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        { books.map( book =>
          <li key={book.id}>
            <BookInfo
              id={book.id}
              title={book.title}
              author={book.author}
              image={book.image}
              shelf={book.shelf}
            /* onShelfChanged={ e => onShelfChanged(book.id, book.shelf, e.target.value) }*/ />
          </li>
          )}
        </ol>
      </div>
    </div>
  )}
}

BookSection.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
//  onShelfChanged: PropTypes.func
}

export default BookSection
