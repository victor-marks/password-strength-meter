import React, { Component } from 'react';
import './PasswordStrengthMeter.css';
import zxcvbn from 'zxcvbn';

class PasswordStrengthMeter extends Component {
  createPasswordLabel(result) {
    if (result.score === 0) {
      return 'Weak';
    }
    if (result.score === 1) {
      return 'Weak';
    }
    if (result.score === 2) {
      return 'Fair';
    }
    if (result.score === 3) {
      return 'Good';
    }
    if (result.score === 4) {
      return 'Strong';
    }
  }

  render() {
    const { password } = this.props;
    // const testedResult = zxcvbn(password);
    const testedResult = zxcvbn(password, [
      'LeBron',
      'Jordan',
      'Klay',
      'eivkdlkwoid'
    ]); // words that are off limits
    return (
      <div className="PasswordStrengthMeter">
        <progress
          className={`PasswordStrengthMeterProgress strength-${this.createPasswordLabel(
            testedResult
          )}`}
          value={testedResult.score}
          max="4"
        />
        <br />
        <label className="PasswordStrengthMeterLabel">
          {password && (
            <>
              <strong>Password strength:</strong>{' '}
              {this.createPasswordLabel(testedResult)}
            </>
          )}
        </label>
        <br />
        my password: {password}
      </div>
    );
  }
}

export default PasswordStrengthMeter;
