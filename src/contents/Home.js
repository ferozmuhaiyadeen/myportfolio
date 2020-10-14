import React, { Component } from 'react';
//import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/download.JPEG';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <h3>I am Feroz Muhaiyadeen.<u>I am a web developer</u></h3>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    