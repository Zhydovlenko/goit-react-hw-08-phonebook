import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../redux/contacts';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/common/Loader/Loader';

import styles from './Views.module.css';
import 'react-toastify/dist/ReactToastify.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts, isLoadingContacts } = this.props;

    return (
      <>
        {isLoadingContacts && <Loader />}
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm />
        {contacts.length > 0 && <h3 className={styles.title}>Contacts</h3>}
        {contacts.length > 2 && <Filter />}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
