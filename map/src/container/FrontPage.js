import React, { useState, useRef } from "react";
import pic1 from "../img/pic1.png";
import Frame1 from "..//img/Frame1.png";
/*import Ellipse1 from "..//img/Ellipse1.png";
import Ellipse2 from "..//img/Ellipse2.png";
import Vector from "..//img/Vector.png";
import Vector2 from "..//img/Vector2.png";
import Vector3 from "..//img/Vector3.png";*/
import Vector4 from "..//img/Vector4.png";
import Vector5 from "..//img/Vector5.png";
import Vector6 from "..//img/Vector6.png";
import Vector7 from "..//img/Vector7.png";
/*import ng1 from "..//img/ng1.png";*/
import Icon1 from "..//img/Icon1.png";
import Icon2 from "..//img/Icon2.png";
import Icon3 from "..//img/Icon3.png";
import Icon4 from "..//img/Icon4.png";
import tinu from "..//img/tinu.png";
import obi from "..//img/obi.png";
import atiku from "..//img/atiku.png";
import Polygon from "..//img/Polygon.png";
import apc from "..//img/apc.png";
import lp from "..//img/lp.png";
import pdp from "..//img/pdp.png";
import "../css/FrontPage.css";


const FrontPage = () => {
    {/* function for first dropdown */}
    const [ open, setOpen ] = useState(false);
    const dropdownRef = useRef(null)

    const showDropdown = () => {
        setOpen(true);
    };

    const hideDropdown = (e) => {
        if(open && !dropdownRef.current?.contains(e.target)) {
            setOpen(false);
        }
    };
    window.addEventListener("click", hideDropdown)

    console.log(open, dropdownRef.current)

    {/* fnction for second dropdown */}
    const [isOpen, setIsOpen] = useState(false)
    const dropRef = useRef(null)

    const handleDropdown = () => {
        setIsOpen(true);
    };

    const closeDropdown = (e) => {
        if(isOpen && !dropRef.current?.contains(e.target)) {
            setIsOpen(false);
        }
    };
    window.addEventListener("click", closeDropdown)

    console.log(isOpen, dropRef.current)

    return (
        <>
            <nav className="navbar">
                <div className="nav">
                    <img src = {pic1} alt="" />
                    <div className="nav-link">
                        <a href="/aboutus" className="link">ABOUT US</a>

                        {/* FIRST DROPDOWN AND CONTENT */}
                       <div className="dropdown-menu" ref={dropdownRef}>
                            <div className="arrow"  onClick={(e) => showDropdown(open)}>
                                <span>OUR COMMUNITIES</span>
                                <img src={Vector7} alt="" />
                            </div>
                            {open && (
                                <ul>
                                    <div className="drop-cont">
                                        <div className="drop1">
                                            <div className="icon1">
                                                <img src={Icon1} alt="" />
                                                <div>
                                                    <li>general user</li>
                                                    <p>Odio mi in tellus turois elementum ipsum</p>
                                                </div>
                                            </div>
                                            <div className="icon2">
                                                <img src={Icon2} alt="" />
                                                <div>
                                                    <li>general user</li>
                                                    <p>Odio mi in tellus turois elementum ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="drop2">
                                            <div className="icon3">
                                                <img src={Icon3} alt="" />
                                                <div>
                                                    <li>general user</li>
                                                    <p>Odio mi in tellus turois elementum ipsum</p>
                                                </div>
                                            </div>
                                            <div className="icon4">
                                                <img src={Icon4} alt="" />
                                                <div>
                                                    <li>general user</li>
                                                    <p>Odio mi in tellus turois elementum ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            )}
                       </div>

                        {/* SECOND DROPDOWN AND CONTENT */}
                       <div className="drop-menu" ref={dropRef}>
                            <div className="arrow1"  onClick={(e) => handleDropdown(isOpen)}>
                                <span>election data</span>
                                <img src={Vector7} alt="" />
                            </div>
                            {isOpen && (
                                <ul>
                                    <li>election day live updates</li>
                                    <li>post-election analysis</li>
                                </ul>
                            )}
                        </div>
                       
                        <a href="/ebuddy" className="link">e-buddy</a>
                        <a href="/veoplatform" className="link1">veo-platform</a>
                        <a href="/login" className="link">login</a>
                        <button className="signup-btn">
                            <a href="signup">signup</a>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="post">
                <div className="data">
                    <h1>Election Data</h1>
                    <span className="press">PRESIDENTIAL / 2023</span>
                </div>
                <div className="option">
                    {/*<h3>Presidential Race</h3>*/}
                    <select className="choose">
                        <option className="tap">
                            Election Data
                        </option>
                        <option className="tap">
                            Pre-Election
                        </option>
                        <option className="tap">
                            Election Day Live Updates
                        </option>
                        <option className="tap">
                            Post-Election Anaylsis
                        </option>
                    </select>
                    <select className="choose">
                        <option className="tap">Presidential</option>
                        <option className="tap">Gubernatorial</option>
                        <option className="tap">Senate</option>
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
            </div>  

            <section className="candidates">

                {/*PRESIDENT SECTION*/}

                <div className="president">
                    <h5>
                        president
                    </h5>
                    <div className="content">
                        <div className="large">
                            <div className="percent"></div>
                            <div className="apc">
                                <div className="polygon">
                                    <img src={Polygon} alt="" />
                                </div>
                                <div className="tinubu">
                                    <div className="apc1">
                                        <img src={tinu} alt="" />
                                    </div>
                                    <div className="apc2">
                                        <h6>tinubu, APC</h6>
                                        <p>81,283,786 votes(51.2%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="large">
                            <div className="percent2"></div>
                            <div className="lp">
                                <div className="polygon2">
                                    <img src={Polygon} alt="" />
                                </div>
                                <div className="obi">
                                    <div className="lp1">
                                        <img src={obi} alt="" />
                                    </div>
                                    <div className="lp2">
                                        <h6>Peter, LP</h6>
                                        <p>81,283,786 votes(51.2%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="large">
                            <div className="percent3"></div>
                            <div className="pdp">
                                <div className="polygon3">
                                    <img src={Polygon} alt="" />
                                </div>
                                <div className="atiku">
                                    <div className="pdp1">
                                        <img src={atiku} alt="" />
                                    </div>
                                    <div className="pdp2">
                                        <h6>Atiku, PDP</h6>
                                        <p>81,283,786 votes(51.2%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SENATE AND HOUSE OF REPRESENTATIVE SECTION */}

                <div className="sen-house-container">
                    <div className="senate-container">
                        <h5>
                            senate
                        </h5>
                        <div className="whole-sen-cont">
                            <div className="large">
                                <div className="percentage"></div>
                                <div className="apc-container">
                                    <div className="p">
                                        <img src={Polygon} alt="" />
                                    </div>
                                    <div className="tinubu1">
                                        <div className="apc-logo">
                                            <img src={apc} alt="" />
                                        </div>
                                        <div className="apc-word">
                                            <h6>all progressive congress</h6>
                                            <p>54 seats (51.2%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="large">
                                <div className="percentage2"></div>
                                <div className="lp-container">
                                    <div className="p2">
                                        <img src={Polygon} alt="" />
                                    </div>
                                    <div className="obi1">
                                        <div className="lp-logo">
                                            <img src={lp} alt="" />
                                        </div>
                                        <div className="lp-word">
                                            <h6>the labour party</h6>
                                            <p>12 seats (51.2%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="large">
                                <div className="percentage3"></div>
                                <div className="pdp-container">
                                    <div className="p3">
                                        <img src={Polygon} alt="" />
                                    </div>
                                    <div className="atiku1">
                                        <div className="pdp-logo">
                                            <img src={pdp} alt="" />
                                        </div>
                                        <div className="pdp-word">
                                            <h6>people democratic party</h6>
                                            <p>36 seats (51.2%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*HOUSE */}

                    <div className="house-container">
                        <h5>house</h5>
                        <div className="whole-house-cont">
                            
                            <div className="large">
                                <div className="line1"></div>
                                <div className="apc1-container">
                                    <div className="poly">
                                        <img src={Polygon} alt="" />
                                    </div>
                                    <div className="tinubu2">
                                        <div className="apc-logo">
                                            <img src={apc} alt="" />
                                        </div>
                                        <div className="apc1-word">
                                            <h6>all progressive congress</h6>
                                            <p>54 seats (51.2%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                            <div className="large">
                                <div className="line2"></div>
                                <div className="lp2-container">
                                    <div className="poly2">
                                        <img src={Polygon} alt="" />
                                    </div>
                                    <div className="obi2">
                                        <div className="lp-logo">
                                            <img src={lp} alt="" />
                                        </div>
                                        <div className="lp2-word">
                                            <h6>the labour party</h6>
                                            <p>12 seats (51.2%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="large">
                                <div className="line3"></div>
                                <div className="pdp2-container">
                                    <div className="poly3">
                                        <img src={Polygon} alt="" />
                                    </div>
                                    <div className="atiku2">
                                        <div className="pdp-logo">
                                            <img src={pdp} alt="" />
                                        </div>
                                        <div className="pdp2-word">
                                            <h6>people democratic party</h6>
                                            <p>36 seats (51.2%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="horizontal">
                <hr/>
            </div>

            {/* THE MAP */}
            <div className="map">
                <img src={Frame1} alt="" />
            </div>

            {/*<div className="first">
                <div className="second">
                    <img src={Ellipse1} alt="" />
                    <div className="third">
                        <img src={Ellipse2} alt="" /> 
                        <div className="total">
                            <div>
                                <h6>TOTAL VOTES</h6>
                                <p>168,912,222</p>
                            </div>
                        </div>
                    </div>
                    <div className="vote1">
                        <div className="vector">
                            <img src={Vector} alt="" />
                        </div>
                        <div className="reject">
                            <h5>rejected votes</h5>
                            <p>8,400,000</p>
                        </div>
                    </div>
                    <div className="accept">
                        <div className="vector2">
                            <img src={Vector2} alt=""/>
                        </div>
                        <div className="vote2">
                            <h5>accepted votes</h5>
                            <p>160,512,232</p>
                        </div>
                    </div>
                </div>
                <div className="other-map">
                    <div className="small-map">
                        <h4>candidates by geopolitical zones</h4>
                        <img src={ng1} alt="" />
                    </div>
                    <div className="direction">
                        <div className="north">
                            <div className="one"></div>
                            <h2>North East</h2>
                            <p>3,000</p>
                        </div>
                        <div className="north">
                            <div className="two"></div>
                            <h2>North West</h2>
                            <p>3,000</p>
                        </div>
                        <div className="north">
                            <div className="three"></div>
                            <h2>North cental</h2>
                            <p>3,000</p>
                        </div>
                        <div className="north">
                            <div className="four"></div>
                            <h2>south west</h2>
                            <p>3,000</p>
                        </div>
                        <div className="north">
                            <div className="five"></div>
                            <h2>south south</h2>
                            <p>3,000</p>
                        </div>
                        <div className="north">
                            <div className="six"></div>
                            <h2>south east</h2>
                            <p>3,000</p>
                        </div>
                    </div>
                </div>
                <div className="whole">
                    <div className="elect">
                        <div>
                            <h6>total elected members</h6>
                            <p>10,000</p>
                        </div>
                        <div className="male">
                            <div className="gender">
                                <h6>male</h6>
                                <img src={Vector3} alt="" />
                            </div>
                            <p>10,000</p>
                        </div>
                        <div className="female">
                            <div className="gender">
                                <h6>female</h6>
                                <img src={Vector3} alt="" />
                            </div>
                            <p>10,000</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <footer className="foot">
                <div className="big-footer">
                    <div className="footer">
                        <img src={pic1} alt="" />
                        <div className="letter">isale Eko avenue, dolphin estate, ikoyi, lagos, <br /> nigeria</div>
                        <footer className="copy">&copy; Copyright 2022</footer>
                    </div>
                    <div className="faq">
                        <div className="link1">
                            <li class="title">about</li>
                            <li><a href="#/">our story</a></li>
                            <li><a href="#/">blog</a></li>
                            <li><a href="#/">about hernalytics</a></li>
                            <li><a href="#/">videos</a></li>
                        </div>
                        <div className="link1">
                            <li class="title">support</li>
                            <li><a href="#/">FAQs</a></li>
                            <li><a href="#/">privacy policy</a></li>
                            <li><a href="#/">terms of services</a></li>
                        </div>
                        <div className="link1">
                            <li class="title">Let's chat!</li>
                            <li class="sub-title">hernalytics@gmail.com</li>
                            <li class="sub-title">+234 801 234 5678</li>
                            <div className="social">
                                <div className="insta">
                                    <img  src={Vector4} alt="" />
                                </div>
                                <div className="whats" >
                                    <img src={Vector5} alt="" />
                                </div>
                                <div className="tweet">
                                    <img src={Vector6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};
export default FrontPage;