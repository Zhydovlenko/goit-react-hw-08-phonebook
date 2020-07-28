import React from 'react';
import phonebook from '../helpers/contact-book.png';

import styles from './Views.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to Phonebook!</h1>
    <img src={phonebook} alt="phonebook" width="200" />
  </div>
);

export default HomeView;
