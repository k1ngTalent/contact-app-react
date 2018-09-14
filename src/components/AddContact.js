import React, { Component } from 'react';
import ContactForm from './ContactForm';
class AddContact extends Component {
    state = {
        isOpen: false
    };

    toggleForm = () => {
        this.setState({ isOpen: true })
    }
    handleSubmit = (fields) => {
        this.props.onFormSubmit(fields)
        this.setState({
            isOpen: false
        })
    }
    handleCancel=()=>{
        this.setState({
            isOpen:false
        })
    }
    render() {
        return (
            this.state.isOpen ? <ContactForm onFormSubmit={this.handleSubmit}
             onFormCancel={this.handleCancel}/> : <button onClick={this.toggleForm}>+</button>
        )
    }
}
export default AddContact;