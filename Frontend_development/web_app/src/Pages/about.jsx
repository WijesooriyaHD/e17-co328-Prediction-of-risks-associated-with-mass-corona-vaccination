import React, { Component } from 'react';
import './about.css'
import img1 from '../Assets/about/img1.jpg';
import img7 from '../Assets/about/img7.jpg';
import img8 from '../Assets/about/img8.jpg';
import img10 from '../Assets/about/img10.jpg';





class About extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div class="banner1">
                <img src={img1} />
        <div class="text-box text-box1">
            <h1><font face ="Colonna MT" size="7">Why this Web Site ?</font> </h1>
            <span></span>

            <p> </p>
                <font face ="Comic sans MS" size="5">
                There is a trend among people not to get COVID-19 vaccinations. <br></br>
               Society is doubtful of getting it due to spreading opinions, various myths, and fear of getting side effects. 
                <br></br> However, there is no research being done into the vaccination's side effects or the causes of illnesses and deaths. 
                <br></br>This project will look into the specific criteria or risks that come with vaccinations.
                
                </font>
                </div>
    </div>

    <div class="banner2">
        
        <img src={img7} />
        <div class="text-box text-box2">
            <h1><font face ="Colonna MT" size="7">Our Objective</font></h1>
            <span></span>

            <p></p><font face ="Comic sans MS" size="5">
                To derive and validate risk prediction algorithms to estimate the risk of covid-19 related to side effects after the vaccination of people By,
                 Creating a comprehensive data set with data mining and other techniques <br></br>
                 Developing an Interactive Web site with all the data, statistics, analytics, and visualization.
                </font>
                </div>
    </div>


    <div class="banner3">
        
        <img src={img8} />
        <div class="text-box text-box3">
            <h1><font face ="Colonna MT" size="10">Our Target Customers</font></h1>
            <span></span>

            <p><font face ="Comic sans MS" size="5">People who are going to take the COVID-19 vaccines.</font></p>
        </div>
    </div>


    <div class="banner4">
        
        <img src={img10} />
        <div class="text-box text-box4">
            <h1><font face ="Colonna MT" size="7">Our Solution</font></h1>
            <span></span>

            <p><font face ="Comic sans MS" size="5">Taking an information form from a person who is willing to take a vaccine and<br></br> predict the risks (side effects) that can occur according to the developed model.
            </font>     
            </p>
        </div>
    </div>
            
            </>
        );
    }
}
 
export default About;