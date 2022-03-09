import React, { Component } from 'react';
import './about.css'

class About extends Component {
   
       render() { 
        return (
            <>
   
   <div class="timeline">
  <div class="container left">
    <div class="content">
      <h1><center>Introduction</center></h1>
      <p>

       <h3> There is a trend among people not to get COVID-19 vaccinations. Because of the differing viewpoints of the various parties involved, society is skeptical of obtaining it. However, there is no research being done into the vaccination's side effects or the causes of illnesses and deaths. This project will look into the specific criteria or risks that come with vaccinations. So, this will help people to get an idea to check whether to take the vaccines or not.</h3> </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h1><center>Objectives</center></h1>
      <p>

      <h3> To derive and validate risk prediction algorithms to estimate the risk of covid-19 related to  side effects after the vaccination of people  By, Creating a comprehensive data set with data mining and other techniques Investigating the effects of Demographic Factors, Health Conditions, Genetical influences, and Habitual influences for risks associated with mass corona vaccination. Developing an Interactive Web site with all the data, statistics, analytics, and visualization.</h3>  </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h1><center>Target Customers</center></h1>
      <p>
        <h3>
        People who are going to take the COVID-19 vaccines.</h3></p>
    </div>
  </div>
  
  <div class="container right">
    <div class="content">
      <h1><center>Our Solution</center></h1>
      <p>
        <h3>
        Taking an information form from a person who is willing to take a vaccine and predict the risks (side effects) that can occur according to the developed model.
        That form contains the following information.</h3>
    <h4>
        <li>age group </li>
        <li>gender</li>
        <li>blood group</li>
      
        <li>height and weight (BMI) </li>
        <li>vaccine type </li>
        <li>district </li>
        
        </h4>
        <h3>
        Graphical representation of the analyzed data. </h3>
    </p>
    </div>
  </div>
  
</div>



        </>
        );
    }
}
 
export default About;