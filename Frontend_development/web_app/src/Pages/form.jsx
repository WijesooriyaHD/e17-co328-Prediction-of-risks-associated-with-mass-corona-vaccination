import React, { Component } from 'react';
import './form.css'

import {userSchema} from '../Validations/formValidation'
import * as yup from "yup";

class Form extends Component {
    
    constructor(props){
        super(props)

        this.state = {
          age : '',
          gender:'',
          height:'',
          weight: '',
          vaccine:'',
          blood:'',
          livingArea: ''
        }
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

    handleVaccine= event =>{
      this.setState({
          vaccine:event.target.value
      })
    }

    handleBlood= event =>{
      this.setState({
          blood:event.target.value
      })
    }

    handleLivingArea= event =>{
      this.setState({
          livingArea:event.target.value
      })
    }

    handleSubmit= async (event) =>{

      event.preventDefault()

      let formData={
        age:this.state.age,
        gender:this.state.gender,
        height:this.state.height,
        weight:this.state.weight,
        vaccine:this.state.vaccine,
        blood:this.state.blood,
        livingArea:this.state.livingArea

      };

      const isValid= await userSchema.isValid(formData)
      console.log(isValid)

      if(isValid===true){
        alert("Hello ! \n"+
        "This is what we received :\n"
        +"Age = "+`${this.state.age}`+"\n"
        +"Gender = "+`${this.state.gender}` +"\n"
        +"Height =  "+`${this.state.height}` +"\n"
        +"Weight =  "+`${this.state.weight}`+"\n"
        +"Vaccine Type =  "+`${this.state.vaccine}`+"\n"
        +"Blood Type =  "+`${this.state.blood}` +"\n"
        +"Living Area =  "+ `${this.state.livingArea}`)
      }else{

        alert("Invalid Input")
      
        
      }

       
        
  }
    

    render() { 
        return (
            <>
   
              <div className="content">
                    
              <form className="Form" onSubmit={this.handleSubmit}>
                
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
                        <select className="form-select" value={this.state.vaccine} 
                        onChange={this.handleVaccine}>
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
                    <select className="form-select" value={this.state.blood} 
                    onChange={this.handleBlood}>
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
                    <select className="form-select" value={this.state.livingArea} 
                    onChange={this.handleLivingArea}>
                              <option value=''>  </option>
                              <option value='Downtown'> Downtown </option>
                              <option value='Outskirt'> Outskirt</option>
                              
                    </select>
                  </div>

                  </div>
                

                

                <br></br>
              
                <button type="submit" className="btn btn-dark">Submit</button>
                
              </form>
              </div>



        </>
        );
    }
}
 
export default Form;