import React from 'react'
import axios from 'axios'
import "babel-polyfill";


import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
function HeaderComponent() {
    return (
      <div className='header'>
      <button className='btn-head btn-dark'>Login</button>
        
        
      </div>
    )
  }



   
    class  LoginForm extends React.Component {
        constructor(props){
            super(props)
            this.state = { email:'',name:'', password:'',mobile:'', isSignedUp: false}
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
          }
          
          handleSubmit(event){
            const { email, password } = this.state
            const user={
                email:email,
                password:password
                
            }
            console.log(user.email)
            console.log(user.password)
            event.preventDefault();
            
            axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin', user)
            .then(function(response) {
                const status = response.status;
                //redirect logic
                if (response.status === 200) {
                //    window.location = "./components/Login.js"

                console.log(status)
                // this.props.history.push('/')
                alert('You are logged in');
                
            
                }

             })
            .catch(error => {
                alert('Email/Password is missing \nEmail/Password is wrong')
              });
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
    if (this.state.isSignedUp) {
        // redirect to home if signed up
        return <Redirect to = {{ pathname: "/" }} />;
      }
    
        return (
        <div className='formbg'>

        <form className='column player' onSubmit={this.handleSubmit}>
           
        <span className="padding-bottom--15">Login to your account</span>   
        
             <div className="field padding-bottom--24">
                  <label  className='label-m'  htmlFor="email">Email</label>
                  <input  type = "text" name="email"  value={this.state.email} onChange={this.handleChange}
                  />
                </div>

                <div className="field padding-bottom--24  grid--50-50">
                  <label className='label-m' htmlFor="password">Password</label>
                  <input type = "password"  name="password"   value={this.state.password} onChange={this.handleChange}
                 /> 
                </div>
               
                
                <button 
                className='btn btn-dark'
                type='submit'
                >
                    Login
                </button>
                

       

        </form>
        </div>
           
        )
        }

     }




export default class Login extends React.Component{
    

     
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
