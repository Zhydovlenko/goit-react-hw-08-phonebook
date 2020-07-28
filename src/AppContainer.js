import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';

import { authOperations } from './redux/auth';
import { contactsOperations, contactsSelectors } from './redux/contacts';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <App {...this.props} {...this.state}>
          {this.props.children}
        </App>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  visibleContacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
