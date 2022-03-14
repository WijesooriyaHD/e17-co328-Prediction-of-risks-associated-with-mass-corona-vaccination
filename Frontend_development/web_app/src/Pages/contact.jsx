import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './contact.css'
import {userSchema} from '../Validations/formValidation'
import * as yup from "yup";

import styled, { keyframes, ThemeProvider } from 'styled-components'
import doc3 from '../Assets/doc16.webp'

import address from '../Assets/address.jpg'
import Phone from '../Assets/phone.jpg'
import email from '../Assets/email.jpg'
import In from '../Assets/IN.jpg'
import madush from '../Assets/Madush.jpg'
import hasara from '../Assets/Hasara.jpg'
import sashini from '../Assets/shashini.jpg'
import axios from 'axios';

class Contact extends Component {
    render() { 
        return (
            <>
            <head>
                <title>Our Team section design </title>
                <link href="contact.css" rel="stylesheet"></link>
                <link rel="stylesheet" href ="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
                <link rel = "stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <body>
            
            <div className='button3'>
                    <Link to="/home"><button type="button" className="btn-d"> Home
                    </button></Link>
            </div>

            <div className="include">
                <section class="team">
		            <div class="container">
			            <h1 className='clr'>CONTACT OUR TEAM</h1><br></br>
			            <div class="row">
                        <div class="col-md-4 profile text-center">
					        <div class="img-box">
					        <img src={madush} class="img-responsive" width='278cm'></img>
                                <ul>
                                    <a href="e17040@eng.pdn.ac.lk"><li><i class="fa fa-envelope"></i></li></a>
                                    <a href="https://github.com/madUSH1198"><li><i class="fa fa-github"></i></li></a>
                                    <a href="https://www.linkedin.com/in/madush-dilshan-4a37b2218"><li><i class="fa fa-linkedin"></i></li></a>
						        </ul>
					        </div>
                        <h2>Madush dilshan</h2>
                        <h3>E/17/040</h3>
				    <h3>Department of Computer Engineering</h3>
                    <h3>University of Peradeniya</h3>

			    </div>

                <div class="col-md-4 profile text-center">
					        <div class="img-box">
					        <img src={hasara} class="img-responsive" width='278cm'></img>
                                <ul>
                                    <a href="e17407@eng.pdn.ac.lk"><li><i class="fa fa-envelope"></i></li></a>
                                    <a href="https://github.com/WijesooriyaHD"><li><i class="fa fa-github"></i></li></a>
                                    <a href="https://www.linkedin.com/in/hasara-wijesooriya-129880218"><li><i class="fa fa-linkedin"></i></li></a>
						        </ul>
					        </div>
                        <h2>Hasara Wijesooriya</h2>
                        <h3>E/17/407</h3>
				    <h3>Department of Computer Engineering</h3>
                    <h3>University of Peradeniya</h3>
			    </div>

                <div class="col-md-4 profile text-center">
					        <div class="img-box">
					        <img src={sashini} class="img-responsive" width='279cm'></img>
                                <ul>
                                    <a href="e17356@eng.pdn.ac.lk"><li><i class="fa fa-envelope"></i></li></a>
                                    <a href="https://github.com/ShashiniUpekha/"><li><i class="fa fa-github"></i></li></a>
                                    <a href="https://www.linkedin.com/in/shashini-upekha-46209a219/"><li><i class="fa fa-linkedin"></i></li></a>
						        </ul>
					        </div>
                            <h2>Shashini Upekha</h2>
                            <h3>E/17/356</h3>
				    <h3>Department of Computer Engineering</h3>
                    <h3>University of Peradeniya</h3>
			    </div>

                </div>
		</div>
	</section>
            </div>
            </body>
            </>
        );
    }
}
 
export default Contact;