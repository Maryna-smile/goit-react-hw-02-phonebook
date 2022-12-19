// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  OnDataChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  makeNewUser = () => {
    const newUser = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
  };

  deleteUser = (contactId) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
}));
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          OnDataChange={this.OnDataChange}
          makeNewUser={this.makeNewUser}
        />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} onDeleteUser={this.deleteUser} />
      </div>
    );
  }
}
