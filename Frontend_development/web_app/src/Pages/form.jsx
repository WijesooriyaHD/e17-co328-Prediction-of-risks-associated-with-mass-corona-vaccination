import React, { Component } from 'react';
import './form.css'
class Form extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            age : ' ',
            gender:' ',
            height:' ',
            weight: ' ',
            vaccine:' ',
            blood:' ',
            livingArea: ' '
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

    handleSubmit= event =>{
        alert(`${this.state.age} ${this.state.gender} ${this.state.height} 
        ${this.state.weight} ${this.state.vaccine}
        ${this.state.blood} ${this.state.livingArea}`)
        event.preventDefault()
    }
    

    render() { 
        return (
            <>
   
              <div className="content">
                    
              <form className="Form" onSubmit={this.handleSubmit}>
                
                <div className="row g-3">

                  <div className="col-md-4">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" value={this.state.age}
                            onChange={this.handleAge}>
                    </input>

                  </div>

                    <div className="col-md-4">
                    <label  className="form-label">Gender</label>
                    <select className="form-select" value={this.state.gender} 
                    onChange={this.handleGender} >
                              <option value='Male'> Male </option>
                              <option value='Female'> Female </option>

                    </select>
                  </div>

                </div>
                

                <div className="row g-3">

                  <div className="col-md-4">
                    <label className="form-label">Height</label>
                    <input type="text" className="form-control" value={this.state.height}
                            onChange={this.handleHeight}>
                    </input>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Weight</label>
                    <input type="text" className="form-control" value={this.state.weight}
                            onChange={this.handleWeight}>
                    </input>
                  </div>

                </div>

                <div className="row g-3">


                    <div className="col-md-4">
                        <label  className="form-label">Vaccine Type</label>
                        <select className="form-select" value={this.state.vaccine} 
                        onChange={this.handleVaccine}>
                                  <option value='Pfizer'> Pfizer </option>
                                  <option value='Moderna'> Moderna </option>
                                  <option value='Sinopharm'> Sinopharm</option>

                        </select>
                    </div>
                      

                    <div className="col-md-4">
                    <label  className="form-label">Blood Group</label>
                    <select className="form-select" value={this.state.blood} 
                    onChange={this.handleBlood}>
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

                <div className="row g-3">

                <div className="col-md-4">

                    <label  className="form-label">Living Area</label>
                    <select className="form-select" value={this.state.livingArea} 
                    onChange={this.handleLivingArea}>
                              <option value='Downtown'> Downtown </option>
                              <option value='Outskirt'> Outskirt</option>
                              
                    </select>
                  </div>

                  
                

                </div>


              
                <button type="submit" className="btn btn-dark">Submit</button>
                
              </form>
              </div>



        </>
        );
    }
}
 
export default Form;