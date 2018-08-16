import React from 'react';
import { Link } from 'react-router-dom';
import BookShelfContainer from '../containers/BookShelfContainer';
import PropTypes from 'prop-types';

const BooksList = props => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <BookShelfContainer books={props.books} title="Currently Reading" shelf="currentlyReading" onShelfChanged={props.onShelfChanged} />
            <BookShelfContainer books={props.books} title="Want to Read" shelf="wantToRead" onShelfChanged={props.onShelfChanged} />
            <BookShelfContainer books={props.books} title="Read" shelf="read" onShelfChanged={props.onShelfChanged} />
        </div>
        <div className="open-search">
            <Link to="/search">Add a Book</Link>
        </div>
    </div>
);
BooksList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onShelfChanged: PropTypes.func
};
export default BooksList;