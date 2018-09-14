import React, { Component } from 'react';
import XContactList from './components/XContactList';
import AddContact from './components/AddContact';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      {
        id: uuid.v4(),
        fname: "oluwatobi",
        lname: "ogundare",
        email: "tobi.ogundare@gmail.com",
        pnumber: "08131369861",
      },
      {
        id: uuid.v4(),
        fname: "gabriel",
        lname: "adeyemo",
        email: "adeyemo.gabriel@lmu.edu.ng",
        pnumber: "08069830183",
      }
    ]
  }
  handleSubmit = (fields) => {
    console.log(fields)
    const field = {
      ...fields,
      id: uuid.v4()
    }
    const contacts = [...this.state.contacts, field];
    console.log(contacts);
    this.setState({ contacts });
  }
  handleEdit = (fields) => {
    this.setState({
      contacts: this.state.contacts.map((contact) => {
        if (contact.id === fields.id) {
          return Object.assign({}, contact,
            fields
          );
        } else {
          return contact;
        }
      })
    })
  }
  handleDelete = (id)=>{
    console.log(id);
    this.setState({
      contacts:this.state.contacts.filter(c=>c.id!==id)
    })
    }

  
  render() {

    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact App</h1>
        </header>
        <div className="App-Body">
        <span className="content">
        <XContactList 
        contacts={this.state.contacts}
         onFormSubmit={this.handleEdit}
          handleDelete={this.handleDelete}/>
        <AddContact onFormSubmit={this.handleSubmit} />
        </span>
       </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
