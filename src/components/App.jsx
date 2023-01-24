import { Component } from 'react';
import { nanoid } from 'nanoid'

import {Form} from './Form/Form'
import {ContactsList} from './User/ContactsList'
import {FilterByName} from './FilterByName/FilterByName'

export class App extends Component {
 
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  isContactInState = ({ name, number }) =>
  !!this.state.contacts.filter(({ name: prevName, number: prevNumber }) => {
    return prevName === name && prevNumber === number;
  }).length;

handleSubmitForm = ({ name, number }) => {
  if (this.isContactInState({ name, number })) {
    alert('Contact is in phonebook');
    return;
  }

  this.setState(({ contacts: prevContacts }) => ({
    contacts: [...prevContacts, { id: nanoid(), name, number }],
  }));
};

handleFilterChange = evt => {
  this.setState({ filter: evt.currentTarget.value });
};

filterNormalize = filter => filter.toLowerCase();

contactListToDisplay = (contacts, filter) =>
  contacts.filter(({ name }) => name.toLowerCase().includes(filter));

handleDeleteContact = id => {
  this.setState(({ contacts: prevContacts }) => ({
    contacts: prevContacts.filter(({ id: contactId }) => contactId !== id),
  }));
};

  render () {

    const { contacts, filter } = this.state;
const normalizedFilter = this.filterNormalize(filter);
const contactsToDisplay = this.contactListToDisplay(
  contacts,
  normalizedFilter
);
    
      return (
    <>
    <Form 
    onSubmitForm={this.handleSubmitForm}/>

    <ContactsList contactList={contactsToDisplay}
            onDelete={this.handleDeleteContact}/>

    {/* <FilterByName/> */}
</>
// {/* <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div> */}


  );
  };
};



