import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../containers/BookContainer';

const BooksGrid = (props) => (
    <ol className="books-grid">
        {props.books.map((_book) => (
            <BookContainer book={_book} key={_book.id} onShelfChanged={props.onShelfChanged} />
        ))}
    </ol>
);
BooksGrid.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    onShelfChanged: PropTypes.func.isRequired
};

export default BooksGrid;