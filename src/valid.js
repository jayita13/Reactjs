import {Component} from 'react';
import './mystyle.css';

class ValidComponent extends Component{
    constructor(props) {
        super(props);  
        this.hobbies = [
            {id:1, value:'Reading'},
            {id:2, value:'Developing'},
            {id:3, value:'Designing'}
        ]      
        this.state={
                fname:"",
                lname:"",
                useremail:"",
                dob:"",
                city:"Bangalore",
                gender:"",
                phone:"",
                address:"",
                hobby: new Map()
        };

        this.ChangeHandler = this.ChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    ChangeHandler = (evt) => {
        const value = evt.target.type === 'checkbox' ? [evt.target.value] : evt.target.value;
        this.setState({
            [evt.target.name] : value
        })
    }
    
    hobbyChangeHandler = (evt) => {
        let isChecked =  evt.target.checked;
        let item = evt.target.value;
        this.setState(
            prevState => ({hobby : prevState.hobby.set(item,isChecked)}) 
        );
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        if( this.state.fname===this.state.lname){
            alert("First & Last name cannot be same")       
        }
        else {            
            if(this.state.hobby.size === 0){
                alert("Please fill in your hobbies")                
            }
        else{             
                console.log(this.state);                             
                // evt.target.submit();  
            }
        }
    }
        
    render(){
        
        return <div>         
        <div className="box"><br/>
        <h1>Registration form</h1>
        <form submit action="#" name="regform" onSubmit={this.submitHandler}>
        
        <div className="name">
        <label htmlFor="uname">First Name:
        <input name= "fname" onChange={this.ChangeHandler} 
        value={this.state.fname} id="uname" type="text" pattern="[A-Za-z]+" placeholder="enter your first name" required/>
        </label><br/>        
        <label htmlFor="ulname">Last Name:
        <input name= "lname" onChange={this.ChangeHandler} 
        value={this.state.lname} id="ulname" type="text" pattern="[A-Za-z]+" placeholder="enter your last name" required/>
        </label><br/>
        </div>

        <div className="email-city">
        <label htmlFor="ename">Email:
        <input name= "useremail" onChange={this.ChangeHandler} 
        value={this.state.email} id="ename" type="email" 
        pattern="\S+@\S+\.\S+" placeholder="enter your email id" required/>
        </label><br />
        
        <label htmlFor="ucity">City:
        <select name= "city" onChange={this.ChangeHandler} 
        value={this.state.city} id="ucity" required placeholder="Select City">
            <option value="bnglr">Bangalore</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
        </select>
        </label><br />
        </div>

        <div className="dob-phn">
        <label htmlFor="udob">DOB:
        <input name= "dob" onChange={this.ChangeHandler} 
        value={this.state.dob} id="udob" 
        pattern="\d{4}-\d{2}-\d{2}" type="date"
        required/></label><br />

        <label htmlFor="userphone">Phone:        
        <input placeholder="###-#######" onChange={this.ChangeHandler}
        id="userphone" pattern="\d{3}-\d{7}" name="phone" 
        value={this.state.phone}
        required type="tel"/></label><br/>
        </div>
        
        <div className="gen-hob">
        <div>
        <p>Gender:
            <input name= "gender" onChange={this.ChangeHandler} 
            value="Male" id="gender" type="radio"  
            required/>
            <label htmlFor="gender">Male</label>
            
            <input name= "gender" onChange={this.ChangeHandler} 
            value="Female" id="gender" type="radio" 
            required/>
            <label htmlFor="gender">Female</label>
            
            <input name= "gender" onChange={this.ChangeHandler} 
            value="Others" id="gender" type="radio" 
            required/>
            <label htmlFor="gender">Others</label>
        </p></div>
        
        <div>
        <p>Hobby:
            {
            this.hobbies.map(item=>(
            <label htmlFor="hobby">
            <input onChange={this.hobbyChangeHandler} 
            value={item.value}
            type="checkbox" />            
            {item.value}</label>
            ))
        }
        </p>
        </div>
        </div>
        
        <label htmlFor="uadd">Address:</label><br/>
        <textarea name= "address" onChange={this.ChangeHandler} 
        value={this.state.address} id="uadd" type="text" rows="4" cols="50"
        placeholder="enter your address" required></textarea>
        <br /><br/>
        
        <button>Register</button>
        </form>
      </div>
      
      </div>
    }
}

export default ValidComponent;