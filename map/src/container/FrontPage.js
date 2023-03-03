import React, { useState } from "react";
import pic1 from "../img/pic1.png";
import Frame1 from "..//img/Frame1.png";
import "../css/FrontPage.css";


const FrontPage = () => {

    const [ state, setState ] = useState(false);

    const showDropdown = () => {
        setState(true);
    };

    const hideDropdown = () => {
        setState(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav">
                    <img src = {pic1} alt="" />
                    <div className="nav-link">
                        <a href="/aboutus" className="link">ABOUT US</a>
                        <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            OUR COMMUNITIES
                            {state ?(<ul className="dropdown-list" onMouseEnter={showDropdown}>
                                <li>1st</li>
                                <li>1st</li>
                                <li>1st</li>
                                <li>1st</li>
                                    
                            </ul>): 
                            null}
                            
                        </div>
                        <a href="/ebuddy" className="link">e-buddy</a>
                        <a href="/veoplatform" className="link">veo-platform</a>
                        <a href="/login" className="link">login</a>
                        <button className="signup-btn">
                            <a href="signup" className="link">signup</a>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="post">
                <h1>Post Election Data</h1>
                <span className="press">PRESIDENTIAL / 2023</span>
            </div>

            <div className="option">
                <h3>Presidential Race</h3>
                <select className="choose">
                    <option>
                        Election Data
                    </option>
                    <option>
                        Pre-Election
                    </option>
                    <option>
                        Election Day Live Updates
                    </option>
                    <option>
                        Post-Election Anaylsis
                    </option>
                </select>
                <select className="choose">
                    <option>Presidential</option>
                    <option>Gubernatorial</option>
                    <option>Senate</option>
                    <option>House Of Representatives</option>
                </select>
                <select className="choose">
                    <option>2023</option>
                    <option>2019</option>
                    <option>2015</option>
                    <option>2011</option>
                    <option>2007</option>
                    <option>3003</option>
                    <option>1999</option>
                    <option>1995</option>
                    <option>1991</option>
                    <option>1987</option>
                    <option>1983</option>
                    <option>1979</option>
                    <option>1975</option>
                    <option>1971</option>
                    <option>1967</option>
                    <option>1963</option>
                    <option>1959</option>
                </select>
            </div>

            <div className="horizontal">
                <hr/>
            </div>

            {/* THE MAP */}
            <div className="map">
                <img  src={Frame1} alt="" />
            </div>
        </>
    )

};
export default FrontPage;