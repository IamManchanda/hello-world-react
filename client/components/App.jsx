import React from 'react';

const user = {
  firstName: 'Harry',
  lastName: 'Manchanda'
};

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello, {formatName(user)}! </h1>
      </div>
    );
  }
}

export default App;
