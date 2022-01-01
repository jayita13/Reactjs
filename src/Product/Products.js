import React, { Component } from 'react';
import axios from 'axios';
import './dash.css';

class Products extends Component {
    state ={
        users: []
      }
     
    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>{
        this.setState({
          users:res.data
        });
      });
    }
      render(){
        return <div style={{backgroundColor:"white"}}>
                <h1 style={{textAlign:"center"}}>Dashboard</h1>
                <div className="dash" >
                      {this.state.users.map(val => <div className="dash-span" key={ val.id }>                         
                          <h3 style={{fontWeight:"bold"}}>  Name : {val.name}</h3>
                          <h4> User Name : {val.username}</h4>
                          eMail : <a href={val.email}>{val.email} </a>
                          <h5> City : {val.address.city} </h5>
                          Phone : {val.phone} <br/>
                          Website : <a href={val.website}>{val.website}</a> <br/>
                          Company Name: {val.company.name}                           
                      </div>)}  
                  </div>
                  </div>   
                     
     }
}

export default Products;