import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'githubapi1',
        html_url: 'htmlurl1',
      },
      {
        id: '2',
        login: 'Mike',
        avatar_url: 'githubapi2',
        html_url: 'htmlurl2',
      },
      {
        id: '3',
        login: 'Lynn',
        avatar_url: 'githubapi3',
        html_url: 'htmlurl3',
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
