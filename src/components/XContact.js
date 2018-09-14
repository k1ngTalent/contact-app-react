import React,{Component} from 'react';
import ContactForm from './ContactForm';
import Contact from './Contact'
class XContact extends Component{
    state={
        editOpen:false
    };
    handleEdit=()=>{
        this.setState({
            editOpen:true
        })
    }
    handleCancel=()=>{
        this.setState({
            editOpen:false
        })
    }
    handleSubmit=(fields)=>{
     console.log(fields);
     this.props.onFormSubmit(fields);
     this.setState({
         editOpen:false
     })
    }
    // handleDelete=(id)=>{console.log(id)
    //     this.props.handleDelete(id)
    // }
    render(){
        if(this.state.editOpen){
            return( <ContactForm 
            id={this.props.id}
            fname={this.props.fname}
            lname={this.props.lname}
            pnumber={this.props.pnumber}
            email={this.props.email}
            onFormCancel={this.handleCancel}
            onFormSubmit={this.handleSubmit}
            />)
        
        }else{
           return (<Contact 
           id={this.props.id}
           fname={this.props.fname}
           lname={this.props.lname}
           pnumber={this.props.pnumber}
           email={this.props.email}
           onFormEdit={this.handleEdit}
           handleDelete={this.props.handleDelete}
           />)
        }   
}
}
export default XContact;