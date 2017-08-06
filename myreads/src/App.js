import React, { Component } from 'react';
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

  /*TODO: I cannot get this function to properly update my state. I need to re-visit how to get an update to the state form the components*/

bookUpdate = (book, newShelf) => {  this.setState(book.shelf: newShelf)}

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            shelfBooks={this.state.books}
            bookToUpdate={this.bookUpdate} /**TODO: why is this not updating the state?*/
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
