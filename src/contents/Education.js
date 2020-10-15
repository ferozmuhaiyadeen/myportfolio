import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import collegeicon from '../img/college_logo.png';
import schoolicon from '../img/school_logo.png';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E. Computer Science and Engineering" where="Sri Sairam Engineering College - Anna University" logo= {<a href="https://sairam.edu.in/"><img alt="sairam" src={collegeicon} className="edulogo"></img></a>} from="July 2014" to="March 2018"/>
            <Widecard title="SSLC | HSC" where="Zion Matriculation Higher Secondary School" logo= {<a href="http://www.zionschool.ac.in/"><img alt="zion" src={schoolicon} className="schoollogo"></img></a>} from="2010" to="2014"/>
            </div>
            )
        }
    }
    
export default Education
    