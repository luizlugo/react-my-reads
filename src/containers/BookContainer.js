import React from 'react';
import Book from '../presentation/Book';
import PropTypes from 'prop-types';

export default class BookContainer extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string).isRequired,
        shelf: PropTypes.string,
        onShelfChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.onShelfChange = this.onShelfChange.bind(this);
    }

    onShelfChange = _newShelf => {
        console.log('_newShelf', _newShelf);
    }

    render() {
        return 
        <Book 
            title={this.props.title}
            subtitle={this.props.subtitle}
            authors={this.props.authors}
            shelf={this.props.shelf}
            onShelfChange={this.onShelfChange}
        />
    }
};