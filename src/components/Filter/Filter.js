import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.container}>
    <p className={styles.searchTitle}>Find contacts by name</p>
    <input
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
      className={styles.formInput}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
