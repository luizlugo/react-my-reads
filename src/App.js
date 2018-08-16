import React from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';
import * as BooksAPI from './BooksAPI';
import SearchContainer from './containers/SearchContainer';
import BooksListContainer from './containers/BooksListContainer';
class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((_books) => {
      this.setState((_currState) => ({
        books: _books
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={({history}) => 
          <SearchContainer 
            books={this.state.books} 
            backToIndex={()=> {
              this.getBooks();
              history.push('/');
            }} 
          />
        } />
        <Route exact path="/" render={() => 
          <BooksListContainer 
            books={this.state.books}
            getBooks={this.getBooks}
          />
        } />
      </div>
    )
  }
}

export default BooksApp
