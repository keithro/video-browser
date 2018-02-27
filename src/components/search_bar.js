import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} 
        />
      </div>
    )
  }

  onInputChange(term) {
    // Set state
    this.setState({term});
    // Call our function passed down as prop
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
