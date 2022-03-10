import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import Typist from 'react-typist';
class Home extends Component {
    
    
    render() { 
        return (
            <>
            <div className='style1'>
                <div className='new-line'>
                <Typist cursor={{hideWhenDone: true , hideWhenDoneDelay:10}}>
                <div className='style2'><center>WELCOME TO</center></div>
                <center>RISK PREDICTOR</center>
                </Typist>
                </div> 
            
            </div>
            
            </>
        );
    }
}
 
export default Home;