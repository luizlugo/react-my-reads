import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../presentation/BooksList';
import * as BooksApi from '../BooksAPI';

export default class BooksListContainer extends React.Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
        getBooks: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.onShelfChanged = this.onShelfChanged.bind(this);
    }

    onShelfChanged = (_data) => {
        BooksApi.update(_data.book, _data.shelf).then(() => {
            this.props.getBooks();
        });
    };

    render() {
        return <BooksList 
            books={this.props.books} 
            onShelfChanged={this.onShelfChanged}
        />
    }
}