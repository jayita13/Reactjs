import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  
        constructor(props) {
        super(props);  
        this.state={
            username:"",
            password:"",
            emailValid: false,         
            pswdValid: false, 
            submitDisabled: true         
        };

    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.pswdChangeHandler = this.pswdChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    }

    emailChangeHandler = (e) => {
    let emailValid = e.target.value ? true : false;        
    let submitValid = this.state.pswdValid && emailValid   
    this.setState({
      username: e.target.value,
      emailValid: emailValid, 
      submitDisabled: !submitValid
    })
  }

  pswdChangeHandler=(e) => {        
    let pswdValid = e.target.value ? true : false;        
    let submitValid = this.state.emailValid && pswdValid;   
    this.setState({
      password: e.target.value,
      pswdValid: pswdValid, 
      submitDisabled: !submitValid
    })
  }

    submitHandler = (evt) => {
        evt.preventDefault();
        if( this.state.username === this.state.password){
            alert("Username & password name cannot be same")       
        }
        else {            
            if(this.state.password.length === 0 ){
                alert("Please fill in your password")}          
            if(this.state.password.length < 8) {
                alert("password too short");}
            if(this.state.password.length > 14){
                alert("password too long")}
            // if(this.state.password.match())    
            
        else{             
                evt.target.submit();               
            }
        }  
    }

    render() {
      return (
                <div className="box">
                <h1>Login</h1>
                <form action="#" name="regform" submit onSubmit={this.submitHandler} >
                                  
                <label htmlFor="ename">Email:
                <input name= "useremail" onChange={this.emailChangeHandler} 
                value={this.state.username} id="ename" type="email" 
                pattern="\S+@\S+\.\S+" placeholder="enter your email id" required/>
                </label><br />

                <label htmlFor="pswd">Password:
                <input name= "password" onChange={this.pswdChangeHandler} 
                value={this.state.password} id="password" type="password" 
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})" 
                placeholder="enter your password" required/>
                </label><br />
            <Button variant="btn btn-success" disabled={this.state.submitDisabled} onClick={() => history.push('/Dashboard')}>Go to dashboard</Button>
          </form>
        </div>   
          
    );
  }
}
