import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  onSubmit= e => {
    
    e.preventDefault();
    
    this.props.searchSongs(this.state.text);

    this.setState({text: ''})

  }

  onChange = (e) => {

    this.setState({[e.target.name]: e.target.value});

  };

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form" >
          <input
            type='text'
            name='text'
            placeholder='Search Songs...'
            value={this.state.text}
            onChange={this.onChange}
            />
            <input type="submit" 
              className="btn btn-block btn-danger" 
              value="Search a song" />
          </form>
      </div>
    );
  }
}

export default Search;
