import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.text);

    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.setState({ text: '' });
    }
  };

  onChange = (e) => {
    this.props.searchUsers(this.state.text);
  };

  render() {
    // add current seaching key word
    const { keyword, clearUsers, showClear } = this.props;

    return (
      <div>
        <input
          type='text'
          name='text'
          placeholder='Search Users'
          value={keyword}
          onChange={this.onChange}
        />
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
