import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsItem from './components/ContactsItem/ContactsItem';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from 'react-loader-spinner';
import { contactsSelectors, contactsOperations } from './redux/phonebook';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoadingContacts, isContactIncludes, error } = this.props;
    return (
      <div className="container">
        <h2>Phonebook</h2>
        <ContactForm />
        {error && <p className="error-message">{error}</p>}
        {isLoadingContacts && (
          <Loader type="ThreeDots" color="grey" height={100} width={100} />
        )}
        {isContactIncludes && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ul className="contacts">
              <ContactsItem filtered={this.props.contacts} />
            </ul>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
  isContactIncludes: state.contacts.items.length > 0,
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
