// components/Keypad.js

import React from 'react';

class Keypad extends React.Component {
  handleChange = () => {
    console.log('Entering password...');
  };

  render() {
    return (
      <div>
        <label htmlFor="passwordInput">Enter Password: </label>
        <input
          type="password"
          id="passwordInput"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Keypad;
