import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Toggler from '../../navigation/Toggler/Toggler';

import styles from './Navigation.module.css';

const NavBar = ({ isAuthenticated }) => (
  <>
    <Toggler />
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  </>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
