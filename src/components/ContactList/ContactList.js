import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

import ContactListItem from '../ContactListItem/ContactListItem';

import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <ContactListItem
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  onDeleteContact: contactsOperations.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
