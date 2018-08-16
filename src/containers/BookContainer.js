import React from 'react';
import Book from '../presentation/Book';
import PropTypes from 'prop-types';

export default class BookContainer extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChanged: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.onShelfChanged = this.onShelfChanged.bind(this);
    }

    onShelfChanged = (_evt) => {
        this.props.onShelfChanged({
            shelf: _evt.target.value,
            book: this.props.book
        });
    };

    render() {
        return <Book onShelfChanged={this.onShelfChanged} book={this.props.book} />;
    }
}