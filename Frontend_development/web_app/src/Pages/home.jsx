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
                <Typist cursor={{hideWhenDone: true , hideWhenDoneDelay:10 }}>
  
                <h1 className='topic'> Welcome to Risk Predictor</h1>

                </Typist>
                <Doc>
            <img src={doc} alt="doc1" />
                </Doc>    
                <Doc2>
            <img src={doc2} alt="doc2" />
                </Doc2> 
            </div>

            <div className='button1'>
            <Link to="/form"><button type="button" className="btn-c">Click here to continue
            </button></Link>
            </div>
            <div className='button2'>
            <Link to="/about"><button type="button" className="btn-a"> About this application
            </button></Link>
            </div>
            </>
        );
    }
}
 
export default Home;