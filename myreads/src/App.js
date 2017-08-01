import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
          //  books={this.state.books}
          />)}/>

          <Route exact path='/search' render={() => (
            <BookSearch
          //    books={this.state.books}
          />)}/>


      </div>
    )
  }
}

export default BooksApp
