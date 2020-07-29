import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { contactsSelectors } from './redux/contacts';

import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

import routes from './routes';
import PrivateRoute from './navigation/Routes/PrivateRoute';
import PublicRoute from './navigation/Routes/PublicRoute';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

export default connect(mapStateToProps)(App);
