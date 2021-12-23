import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Page from './components/page'
import Register from './components/register'
import Login from './components/Login'
import Nav from './components/nav'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'

class App extends React.Component{
    render()
    {
      return(
          <Router>
          <Nav />
          <Routes>
          <Route exact path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
           
          </Routes>
                 
       </Router>
        
      )
    }
}

ReactDOM.render(
      <App />,
      document.getElementById('app')
)
