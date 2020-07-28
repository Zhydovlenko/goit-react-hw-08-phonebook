import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.css';

const UserMenu = ({ email, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}> {email}</span>
    <button className={styles.btn} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
