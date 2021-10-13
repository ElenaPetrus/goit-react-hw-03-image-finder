import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.props.onSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.props.handleChange}
            className="SearchForm-input"
            type="text"
            name="query"
            value={this.props.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
