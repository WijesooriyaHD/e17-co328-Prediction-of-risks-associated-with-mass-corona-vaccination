import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './form.css'
import {userSchema} from '../Validations/formValidation'
import * as yup from "yup";

import styled, { keyframes, ThemeProvider } from 'styled-components'
import doc3 from '../Assets/doc16.webp'

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

class Form extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            NIC:'',
            age : '',
            gender:'',
            height:'',
            weight: '',
            vaccine_type:'',
            blood_group:'',
            living_area: ''
        }
    }

    handleNIC = event =>{
      this.setState({
          NIC:event.target.value
      })

  }

    handleAge = event =>{
        this.setState({
            age:event.target.value
        })

    }

    handleGender= event =>{
        this.setState({
            gender:event.target.value
        })
    }

    handleHeight= event =>{
      this.setState({
          height:event.target.value
      })
    }

    handleWeight= event =>{
      this.setState({
          weight:event.target.value
      })
    }

    handlevaccine_type= event =>{
      this.setState({
          vaccine_type:event.target.value
      })
    }

    handleblood_group= event =>{
      this.setState({
          blood_group:event.target.value
      })
    }

    handleLivingArea= event =>{
      this.setState({
          living_area:event.target.value
      })
    }

    handleSubmit= async (event) =>{

        event.preventDefault()

        let formData={
          NIC:this.state.NIC,
          age:this.state.age,
          gender:this.state.gender,
          height:this.state.height,
          weight:this.state.weight,
          vaccine_type:this.state.vaccine_type,
          blood_group:this.state.blood_group,
          living_area:this.state.living_area

        };

        const isValid= await userSchema.isValid(formData)
        console.log(isValid)

        if(isValid===true){
          alert("Hello ! \n"+
          "This is what we received :\n"
          +"NIC = "+`${formData.NIC}`+"\n"
          +"Age = "+`${formData.age}`+"\n"
          +"Gender = "+`${formData.gender}` +"\n"
          +"Height =  "+`${formData.height}` +"\n"
          +"Weight =  "+`${formData.weight}`+"\n"
          +"Vaccine  Type  =  "+`${formData.vaccine_type}`+"\n"
          +"Blood Group  =  "+`${formData.blood_group}` +"\n"
          +"Living Area =  "+ `${formData.living_area}`)

          axios
          .post(`http://192.168.174.1:8000/form`,{
            NIC:formData['NIC'],
            age:formData['age'],
            gender:formData['gender'],
            height:formData['height'],
            weight:formData['weight'],
            vaccine_type:formData['vaccine_type'],
            blood_group:formData['blood_group'],
            living_area:formData['living_area']


          } )
          .then( res=> {
            console.log(res);
            if(res.status===200){
              alert(`Entered data has been sent successfully`)
            }
            console.log(res.data)

          }

          )





          
        }else{

          alert("Invalid Input")
        
          
        }

         
          
    };
    

    render() { 
        return (
            <>
            <div className='button3'>
                <Link to="/home"><button type="button" className="btn-d"> Home
                </button></Link>
            </div>


          
            <Doc3>
            <img src={doc3} alt="doc3" />
                </Doc3> 
                      
            
<div className="content">



            
                    
                    <form className="Form" onSubmit={this.handleSubmit}>

                    <div className="row g-3">
      
                            <div className="col-md-4">
                              <label className="form-label">NIC</label></div>
                              <div className="col-md-4">
                              <input type="text" className="form-control" value={this.state.NIC}
                                      onChange={this.handleNIC}>
                              </input>

                            </div>
                      </div>

                      <br></br>

                      <div className="row g-3">
      
                        <div className="col-md-4">
                          <label className="form-label">Age</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.age}
                                  onChange={this.handleAge}>
                          </input>
      
                        </div>
                        </div>
                        <br></br>
                        <div className="row g-3">
                          <div className="col-md-4">
                          <label  className="form-label">Gender</label></div>
                          <div className="col-md-4">
                          <select className="form-select" value={this.state.gender} 
                          onChange={this.handleGender} >
                                    <option value=''>  </option>
                                    <option value='Male'> Male </option>
                                    <option value='Female'> Female </option>
      
                          </select>
                        </div>
      
                      </div>
                      <br></br>
                      
      
                      <div className="row g-3">
      
                        <div className="col-md-4">
                          <label className="form-label">Height</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.height}
                                  onChange={this.handleHeight}>
                          </input>
                        </div>
                        </div>
                        <br></br>
      
                        <div className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label">Weight</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.weight}
                                  onChange={this.handleWeight}>
                          </input>
                        </div>
      
                      </div>
      
                      <br></br>
      
                      <div className="row g-3">
      
      
                          <div className="col-md-4">
                              <label  className="form-label">Vaccine Type</label></div>
                              <div className="col-md-4">
                              <select className="form-select" value={this.state.vaccine_type} 
                              onChange={this.handlevaccine_type}>
                                        <option value=''>  </option>
                                        <option value='Pfizer'> Pfizer </option>
                                        <option value='Moderna'> Moderna </option>
                                        <option value='Sinopharm'> Sinopharm</option>
                                        <option value='Astrazeneca'> Astrazeneca</option>
      
                              </select>
                          </div>
                          </div>
                          <br></br>
      
                          <div className="row g-3">
      
                          <div className="col-md-4">
                          <label  className="form-label">Blood Group</label></div>
                          <div className="col-md-4">
                          <select className="form-select" value={this.state.blood_group} 
                          onChange={this.handleblood_group}>
                                    <option value=''>  </option>
                                    <option value='A+'> A+ </option>
                                    <option value='A-'> A- </option>
                                    <option value='AB+'> AB+ </option>
                                    <option value='AB-'> AB- </option>
                                    <option value='B+'> B+ </option>
                                    <option value='B-'> B- </option>
                                    <option value='O+'> O+ </option>
                                    <option value='O-'> O- </option>
      
                          </select>
                        </div>
      
                      </div>
                      <br></br>
      
                      <div className="row g-3">
      
                      <div className="col-md-4">
      
                          <label  className="form-label">Living Area</label></div>
                          <div className="col-md-4">
                          <select className="form-select" value={this.state.living_area} 
                          onChange={this.handleLivingArea}>
                                    <option value=''>  </option>
                                    <option value='Downtown'> Downtown </option>
                                    <option value='Outskirt'> Outskirt</option>
                                    
                          </select>
                        </div>
      
                        </div>
                      
      
                      
      
                      <br></br>
                    
                      <button type="submit" className="btn btn-info">Submit</button>
                      
                    </form>
                    </div>
   



        </>
        );
    }
}
 
export default Form;