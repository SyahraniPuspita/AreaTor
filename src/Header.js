import React, {Component} from 'react';
import logo from './logo1.png';
class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header_logo">
                    <img src={logo}/>
                </div>
                <div className="header_list">
                    <ul>
                        <li>Contact Us</li>
                        <li>About</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Header;