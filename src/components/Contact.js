import React, { Component } from 'react';
class Contact extends Component {
    state = {
        viewOpen: false
    }
    handleEdit = () => {
        this.props.onFormEdit();
    }
    handleView = () => {
        this.setState({
            viewOpen: !this.state.viewOpen
        })
    }
    handleDelete = ()=>{
        console.log(this.props.id);
        this.props.handleDelete(this.props.id)
    }
    render() {
        if (this.state.viewOpen) {
            return (
                <div>
                    <div onClick={this.handleView}>
                    <span>{this.props.fname} {this.props.lname}</span>
                    <span>{this.props.email}{this.props.pnumber}</span>
                    </div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            )
        } else {
            return (
                <div>
                    <span onClick={this.handleView}>{this.props.fname} {this.props.lname}</span>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            )
        }

    }
}
export default Contact;