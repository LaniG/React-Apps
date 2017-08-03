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

/**TODO: Implement a setState function to update the state with the onChange evtns from the BookShelf.

*/

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
