import { Component } from 'react';

import './App.scss';

import ContactForm from './components/ContactForm/';
import Filter from './components/Filter';
import ContactList from './components/ContactList/';

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (contacts) {
  //     this.setState({ contacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContactHandler = (newContact) => {
  //   if (this.state.contacts.find((contact) => contact.name === newContact.name)) {
  //     alert(`${newContact.name} is already in contacts.`);
  //     return;
  //   }

  //   newContact.id = uuidv4();
  //   this.setState({ contacts: [...this.state.contacts, newContact] });
  // };

  // filterHandler = (event) => {
  //   this.setState({
  //     filter: event.target.value,
  //   });
  // };

  // deleteHandler = (id) => () => {
  //   this.setState({ contacts: this.state.contacts.filter((contact) => contact.id !== id) });
  // };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
