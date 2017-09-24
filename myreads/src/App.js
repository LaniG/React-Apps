import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })

    })
  }

  /*TODO: fix the currently Reading selection now working*/

bookUpdate = (book, shelf) => {
  console.log(book.shelf)
  console.log(shelf)
  book.shelf = shelf
  console.log(book.shelf)
  this.setState({books: this.state.books.filter((b) => b.id !== book.id).concat([book]) })
  BooksAPI.update(book,shelf)

}

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            shelfBooks={this.state.books}
            bookToUpdate={this.bookUpdate}
          />)}/>

          <Route exact path='/search' render={() => (
            <BookSearch
              searchBooks={this.state.books}
          />)}/>


      </div>
    )
  }
}

export default BooksApp
