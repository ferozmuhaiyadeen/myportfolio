import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E. Computer Science and Engineering" where="Sri Sairam Engineering College - Anna University" from="July 2014" to="March 2018"/>
            <Widecard title="SSLC | HSC" where="Zion Matriculation Higher Secondary School" from="2010" to="2014"/>
            </div>
            )
        }
    }
    
export default Education
    