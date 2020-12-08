import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import classes from "./App.module.css"
import { CSSTransition } from "react-transition-group";

const contactList = [];
export default class App extends Component {
  state = {
    contacts: [...contactList],
    filter: '',
  };
  componentDidMount() {
    const persistedTask = localStorage.getItem("contacts");
    if (persistedTask) {
      this.setState({
        contacts: JSON.parse(persistedTask),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  toAddContact = el => {
    const truly = this.state.contacts.find(contact => contact.name === el.name);
    if (truly) {
      alert(`Імя ${el.name} вже є в списку`, null, 2);
    } else if(el.name.length>=1){
      this.setState(prev => {
        const updateState = [...prev.contacts, el];
        return { contacts: updateState };
      });
    }
  };
  filterRender = filter => {
    this.setState({ filter });
  };
  filtresTask() {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }
  toDeleteContact = id => {
    const { contacts } = this.state;
    const obj = contacts.find(el => el.id === id);
    const index = contacts.indexOf(obj);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts.slice(0, index),
        ...prevState.contacts.slice(index + 1),
      ],
    }));

  };
  render() {
    const { contacts, filter } = this.state;
    const filterText = this.filtresTask();

    return (
      <div className={classes.container}>
         <CSSTransition in={true} classNames="logo"timeout={1000} appear={true} unmountOnExit>
          <h1 >Phonebook</h1>
        </CSSTransition>
        <ContactForm addContact={this.toAddContact} />
        <h2 >Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} filterRender={this.filterRender} />
        )}
        <ContactList list={filterText} Delete={this.toDeleteContact} />
      </div>
    );
  }
}
