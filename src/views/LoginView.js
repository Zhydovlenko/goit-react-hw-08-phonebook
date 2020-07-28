import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

import styles from './Views.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2 className={styles.title}>Log in</h2>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>

          <label className={styles.formLabel}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>

          <button className={styles.btn} type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
