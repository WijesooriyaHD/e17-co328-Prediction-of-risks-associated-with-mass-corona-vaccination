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

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }`

const Doc3 = styled.div`
position: absolute;
top: 20%;
left: 5%;
width: 20vw;
animation: ${float} 2s ease infinite;
img{
    width:auto;
    height: auto;
}
`

class Contact extends Component {
    render() { 
        return (
            <>
            <div className='button3'>
                <Link to="/home"><button type="button" className="btn-d"> Home
                </button></Link>
            </div>
            
            
                      
            
<div className="include">
                    <form className="Form">

                      <div className="row g-3">
                      <label className="form-labelM">Contact Us</label>

                        <table>
                            
                            <tr className='form-label1'>
                                <td>
                                   PERSON
                                </td>
                                <td>PHONE</td>
                                <td>E-MAIL</td>
                                <td>LINKED IN</td>
                            </tr>
                            <br></br>
                            
                            <tr className='form-label'>
                                <td><br></br><img src={hasara} width='140cm'></img></td>
                                <td>+94773498567</td>
                                <td>hasarae17407@gmail.com</td>
                                <td><a href="https://www.linkedin.com/in/hasara-wijesooriya-129880218"><img src={In} width='35cm'></img></a></td>
                            </tr>
                            <tr className='form-label'>
                                
                                <td><br></br><img src={sashini} width='140cm'></img></td>
                                <td>+94711234567</td>
                                <td>sashinie17356@gmail.com</td>
                                <td><a href="https://www.linkedin.com/in/shashini-upekha-46209a219/"><img src={In} width='35cm'></img></a></td>
                            </tr>
                            
                            <tr className='form-label'>
                                
                                <td><img src={madush} width='140cm'></img></td>
                                <td>+94775523577</td>
                                <td>madushchandrasenac98@gmail.com</td>
                                <td><a href="https://www.linkedin.com/in/madush-dilshan-4a37b2218"><img src={In} width='35cm'></img></a></td>
                            </tr>
                            
                        </table>
                          
                      </div>
                      <br></br>
                    </form>
                    </div>
        </>
        );
    }
}
 
export default Contact;