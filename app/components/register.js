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
            this.state = { email:'',name:'', password:'',mobile:'', message:''}
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
          }
          
          handleSubmit(event){
            const { email, name, password,mobile, message } = this.state
            const user={
                email:email,
                password:password,
                name:name,
                mobile:mobile
            }
        
            event.preventDefault();

            let msg= ""
            
            
            axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister', user)
            .then(response=>{
              const status = response.status;
              console.log(status)
              msg="Registration is Successful."
              //redirect logic
              
              this.setState({ message: msg})
              if (status === 200) {
                
                
               

              console.log(status)
              
              // this.setState( { message: msg})
              
          
              }
            }) .catch((error) => {
              //err.response.status
              console.log(error.response.status)
                if(error.response.status === 400)
                { 
                   msg = "Some of the fields are missing or incorrect."
                  this.setState( { message: msg})
                  
                }
                if(error.response.status === 402)
                {
                   msg = "User Already Exists with the given Email id."
                  this.setState( { message: msg})
                }
              
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
       const {  message } = this.state
    
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

                 <p> {message}</p>
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
