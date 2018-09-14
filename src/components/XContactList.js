import React, { Component } from 'react';
import XContact from './XContact';
class XContactList extends Component {
    render() {
        const contactList = this.props.contacts.map((contact, index) => (
            <XContact key={index}
                id={contact.id}
                fname={contact.fname}
                lname={contact.lname}
                pnumber={contact.pnumber}
                email={contact.email} 
                onFormSubmit={this.props.onFormSubmit}
                handleDelete={this.props.handleDelete}/>
        ));

        return (
            <div>
                {contactList}
            </div>
        )
    }
}
export default XContactList;