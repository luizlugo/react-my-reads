import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const Search = props => (
    <div className="search-books">
        <div className="search-books-bar">
            <a className="close-search" onClick={props.backToIndex}>Close</a>
            <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={props.onInputChange} value={props.query} />
            </div>
        </div>
        <div className="search-books-results">
            <BooksGrid books={props.books} onShelfChanged={props.onShelfChanged} />
        </div>
    </div>
);
Search.propTypes = {
    query: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
    onShelfChanged: PropTypes.func.isRequired
};
export default Search;