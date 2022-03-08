import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './home.css'

class Home extends Component {
    
    
    render() { 
        return (
            <><div>
                <h1>welcome page</h1>
            </div>
            <div>
            <Link to="/form"><button>click here
            </button></Link>
            </div>
            </>
        );
    }
}
 
export default Home;