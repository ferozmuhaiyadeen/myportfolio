import React, { Component } from 'react';
//import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/download.JPEG';
import Social from '../components/Social'
import pdficon from '../img/pdficon.png'
var ReactRotatingText = require('react-rotating-text');



class Home extends Component {
    render() {
        return (
            
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <h3>I am <ReactRotatingText items={['Feroz Muhaiyadeen', 'a Web Developer']} /></h3>
            <br></br>
            <h3>Be my guest to view my Resume</h3>
            <a href="https://drive.google.com/file/d/1NkgEy0zXzo6v4NjoKP8kqfpTLQfM-QHi/view?usp=sharing"><img src={pdficon} alt="pdficon" className="pdficon"></img></a>
            
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    