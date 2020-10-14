import React, { Component } from 'react';
//import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/download.JPEG';
import Social from '../components/Social'
var ReactRotatingText = require('react-rotating-text');


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <h3>I am <ReactRotatingText items={['Feroz Muhaiyadeen', 'a Web Developer']} /></h3>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    