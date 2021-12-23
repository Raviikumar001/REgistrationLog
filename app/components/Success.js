import React from "react";

import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class Sucess extends React.Component{

    render()
    {
        return(
            <React.Fragment>
            <h2> You have Been Success fully Logged in.</h2>
            <li > 
            <Link to='/'>Login Page</Link>
            </li>
            </React.Fragment>
        )
    }
}