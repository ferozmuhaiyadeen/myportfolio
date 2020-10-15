import React, { Component } from 'react';
import Navitem from './Navitem';
import Social from '../components/Social';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <table>
            <tr>
            <ul>
            <td><Social/></td>
            <td><Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem></td>
            <td><Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem></td>
            <td><Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem></td>
            <td><Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem></td>
            <td><Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem></td>
            
            </ul>
            </tr>
            </table>
            </nav>
            )
        }
    }
    
    export default Navbar
    