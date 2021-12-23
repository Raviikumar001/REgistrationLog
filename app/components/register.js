import React from 'react'
import axios from 'axios'
import "babel-polyfill";


function HeaderComponent() {
    return (
      <div className='header'>
      <button className='btn-head btn-dark'>Register</button>
        
        
      </div>
    )
  }


   
    class  LoginForm extends React.Component {
        constructor(props){
            super(props)
            this.state = { email:'',name:'', password:'',mobile:''}
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
          }
          
          handleSubmit(event){
            const { email, name, password,mobile } = this.state
            const user={
                email:email,
                password:password,
                name:name,
                mobile:mobile
            }
        
            event.preventDefault();
            
            axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister', user)
            .then(response=>{
                console.log(response);
                console.log(response.data);
                 //This line of code will redirect you once the submission is succeed
                 if (response.status === 200) {
                  //    window.location = "./components/Login.js"
  
                  
                  // this.props.history.push('/')
                  alert('Your account is created');
                  
              
                  }
            }) .catch(error => {
              alert('Please enter a unique Email\nPlease Fill all the data fields\nMake Sure the phone number is 10Digits.')
            }) 
          }
  
          handleChange(event)
          {
              this.setState(
                  {
                    [event.target.name]: event.target.value
                  }
              )
          }
 render()
 {
    
        return (
        <div className='formbg'>

        <form className='column player' onSubmit={this.handleSubmit}>
           
        <span className="padding-bottom--15">Register for your account</span>   
        
             <div className="field padding-bottom--24">
                  <label  className='label-m'  htmlFor="email">Email</label>
                  <input  type = "text" name="email"  value={this.state.email} onChange={this.handleChange}
                  />
                </div>

                <div className="field padding-bottom--24  grid--50-50">
                  <label className='label-m' htmlFor="password">Password</label>
                  <input type = "text"  name="password"   value={this.state.password} onChange={this.handleChange}
                 /> 
                </div>
                <div className="field padding-bottom--24">
                  <label className='label-m' htmlFor="name">Name</label>
                  <input type = "text"  name="name"  value={this.state.name}  onChange={this.handleChange}
                 />
                </div>
                <div className="field padding-bottom--24">
                  <label className='label-m' htmlFor="mobile">Phone</label>
                  <input type = "text"  name="mobile"   value={this.state.mobile} onChange={this.handleChange}
                 />
                </div>
                <button 
                className='btn btn-dark'
                type='submit'
                >
                    Submit
                </button>
                

       

        </form>
        </div>
           
        )
        }

     }




export default class Register extends React.Component{
    

     
    render()
    {
        return(
            <React.Fragment>
             <HeaderComponent />
            <LoginForm />
            </React.Fragment>
        )
    }
}
