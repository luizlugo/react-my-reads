import React from 'react';
import Search from '../presentation/Search';
import * as BooksApi from '../BooksAPI';

export default class SearchContainer extends React.Component {
    state = {
        query: '',
        books: []
    };

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onShelfChanged = this.onShelfChanged.bind(this);
        this.backToIndex = this.backToIndex.bind(this);
        this.parseBooksShelf = this.parseBooksShelf.bind(this);
    }

    parseBooksShelf = (_books) => {
        return _books.map((_book) => {
            const bookShelf = this.props.books.find((__book) => _book.id === __book.id);
            _book.shelf = bookShelf ? bookShelf.shelf : "none";
            console.log(_book);
            return _book;
        });
    }

    searchForBooks = () => {
        BooksApi.search(this.state.query).then((_results) => {
            if (!_results || _results.error) {
                this.setState({
                    books: []
                });
            } else {
                this.setState({
                    books: this.parseBooksShelf(_results)
                });
            }
        });
    };

    onInputChange = (_event) => {
        const query = _event.target.value;
        this.setState({
            query: query
        }, this.searchForBooks);
    };

    onShelfChanged = (_data) => {
        BooksApi.update(_data.book, _data.shelf);
    };

    backToIndex = () => {
        this.props.backToIndex();
    };

    render() {
        return <Search 
            onInputChange={this.onInputChange}
            query={this.state.query}
            books={this.state.books}
            onShelfChanged={this.onShelfChanged}
            backToIndex={this.backToIndex}
        />;
    }
}