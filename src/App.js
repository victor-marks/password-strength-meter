import React, { Component } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      password: ''
    };
  }

  render() {
    const { password } = this.state;
    return (
      <div className="App">
        <h2>
          I am a react password strength meter. Enter your password below.
        </h2>
        <div className="meter">
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <PasswordStrengthMeter password={password} />
        </div>
      </div>
    );
  }
}

export default App;
