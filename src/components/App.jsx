import { Component } from 'react';
import { nanoid } from 'nanoid'

import {Form} from './Form/Form'
import {ContactsList} from './User/ContactsList'
// import {FilterByName} from './FilterByName/FilterByName'

export class App extends Component {
 
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };


  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
  
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };


addContact = contacts => {
  const contact ={
    id : nanoid(),
    name: '',
    number: ''
  }

  this.setState (({contacts}) =>({
    contacts: [contact, ...contacts],
  }))
}
  
  handleSubmitForm = data => {
    console.log(data);
  }


  handleChange = event=>{
    const { name, value } = event.target;
    this.setState ({[name]: value})
}


filterNormalize = filter => filter.toLowerCase();

  contactListToDisplay = (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  handleDelete = id => {
this.setState(({contacts}) =>{
  const newUserList =contacts.filter(contact =>contact.id !==id)
  return {contact: newUserList}
})
  }


  // handleSubmitForm = ({ name, number }) => {
  //   if (this.isContactInState({ name, number })) {
  //     alert('Contact is in phonebook');
  //     return;
  //   }

  //   this.setState(({ contacts: prevContacts }) => ({
  //     contacts: [...prevContacts, { id: nanoid(), name, number }],
  //   }));
  // };

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



