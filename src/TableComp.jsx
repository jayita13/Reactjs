import React, { Component } from 'react';
import BootStrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory from 'react-bootstrap-table2-filter';

class TableComp extends Component{
  state={
    users:[],
    columns:[
      {
      dataField:'userId',
      text:'User ID',
      headerStyle:(colum,colIndex)=>{
        return {width:'10%',textAlign:'center'};
      }
      },
     {
      dataField:'id',
      text:'ID',
      headerStyle:(colum,colIndex)=>{
        return {width:'10%',textAlign:'center'};
      }
      },
     {
      dataField:'title',
      text:'Title',
      headerStyle:(colum,colIndex)=>{
        return {width:'20%',textAlign:'center'};
      }
      },
     {
      dataField:'body',
      text:'Body',
      headerStyle:(colum,colIndex)=>{
        return {width:'60%',textAlign:'center'};
      }
     }
     ]
    
  }
  
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
      this.setState({
        users:res.data
      });
    });
    
  }
 
  render(){
    return (
      <div className="App" style={{backgroundColor:"white"}}>
        <h1 className="Table-header">User's Data</h1>
        <BootStrapTable striped hover keyField='id' data={this.state.users} 
        columns={this.state.columns} filter={filterFactory()}/>
      </div>
    );
  }
}
export default TableComp;