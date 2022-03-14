import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import Typist from 'react-typist';
import doc from '../Assets/doc14.webp'
import doc2 from '../Assets/doc15.webp'
import styled, { keyframes, ThemeProvider } from 'styled-components'

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }`

const Doc = styled.div`
position: absolute;
top: 32%;
left: 5%;
width: 20vw;
animation: ${float} 2s ease infinite;
img{
    width:auto;
    height: auto;
}
`

const Doc2 = styled.div`
position: absolute;
top: 32%;
right: 10%;
width: 20vw;
animation: ${float} 2s ease infinite;
img{
    width:auto;
    height: auto;
}
`
class Home extends Component {
    
    
    render() { 
        return (
            <><div className='homePage'>
                 <div className='button3'>
                    <Link to="/contact"><button type="button" className="btn-d"> Contact Us
                    </button></Link>
                </div>
                <Typist cursor={{hideWhenDone: true , hideWhenDoneDelay:10 }}>
  
                <h1 className='topic'>

                <font face ="Algerian" >
                Welcome to  <br></br>Risk Predictor</font></h1>


                </Typist>
                <Doc>
            <img src={doc} alt="doc1" />
                </Doc>    
                <Doc2>
            <img src={doc2} alt="doc2" />
                </Doc2> 
            </div>

            <div className='button1'>
            <Link to="/form"><button type="button" className="btn-c"><font face ="Comic sans MS" >Click Here to Continue</font>
            </button></Link>
            </div>
            <div className='button2'>
            <Link to="/about"><button type="button" className="btn-a"><font face ="Comic sans MS" > About Our Website</font>
            </button></Link>
            </div>
            <div className='button4'>
            <Link to=" "><button type="button" className="btn-o"><font face ="Comic sans MS" >View Overall Analysis</font>
            </button></Link>
            </div>
            </>
        );
    }
}
 
export default Home;