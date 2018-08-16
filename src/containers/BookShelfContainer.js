import React from 'react';
import BookShelf from '../presentation/BookShelf';
import PropTypes from 'prop-types';

export default class BookShelfContainer extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        books: PropTypes.arrayOf(PropTypes.object),
        shelf: PropTypes.string,
        onShelfChanged: PropTypes.func
    };

    render() {
        const { books, title} = this.props;
        const listBooks = books.filter((_book) => _book.shelf === this.props.shelf);
        return <BookShelf books={listBooks} title={title} onShelfChanged={this.props.onShelfChanged} />
    };
}