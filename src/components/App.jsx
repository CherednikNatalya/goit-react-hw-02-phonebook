import { Component } from 'react';

import {Form} from './Form/Form'
import {User} from './User/User'

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleDelete = id => {
this.setState(prevState =>{
  const newUserList =prevState.user.filter(user =>user.id !==id)
  return {user: newUserList}
})
  }

  render () {
    
      return (
    <>
    <Form/>
    <User users={this.state}
    onDelete = {this.handleDelete}/>
</>
// {/* <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div> */}


  );
  }
};




