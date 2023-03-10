import React, { useState, useRef, useEffect } from "react";
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
import axios from "axios";

const FrontPage = () => {
  /*useState for loading the candidate's API result */
  const [obiData, setObiData] = useState("");
  const [tinubusData, setTinubuData] = useState("");
  const [atikuData, setAtikuData] = useState("");

  const [stateResult, setStateResult] = useState([]);

  {
    /* function for first dropdown */
  }
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const showDropdown = () => {
    setOpen(true);
  };

  const hideDropdown = (e) => {
    if (open && !dropdownRef.current?.contains(e.target)) {
      setOpen(false);
    }
  };
  window.addEventListener("click", hideDropdown);

  console.log(open, dropdownRef.current);

  {
    /* fnction for second dropdown */
  }

  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef(null);

  const handleDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = (e) => {
    if (isOpen && !dropRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };
  window.addEventListener("click", closeDropdown);

  console.log(isOpen, dropRef.current);

  /* LOADING THE API candidate result */

  useEffect(() => {
    var data = "";

    var config = {
      method: "get",
      url: "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president",
      headers: {
        Accept: "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setObiData(response.data[0]);
        setTinubuData(response.data[1]);
        setAtikuData(response.data[2]);
      })
      .catch(function (error) {
        console.log(error);
      });

    var config = {
      method: "get",
      url: "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=map",
      headers: {
        Accept: "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    var config = {
      method: "get",
      url: "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result",
      headers: {
        Accept: "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setStateResult(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* NAVBAR SECTION */}

      <nav className="navbar">
        <div className="nav">
          <img src={pic1} alt="" />
          <div className="nav-link">
            <a href="/aboutus" className="link">
              ABOUT US
            </a>

            {/* FIRST DROPDOWN AND CONTENT */}
            <div className="dropdown-menu" ref={dropdownRef}>
              <div className="arrow" onClick={(e) => showDropdown(open)}>
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
              <div className="arrow1" onClick={(e) => handleDropdown(isOpen)}>
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

            <a href="/ebuddy" className="link">
              e-buddy
            </a>
            <a href="/veoplatform" className="link1">
              veo-platform
            </a>
            <a href="/login" className="link">
              login
            </a>
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
            <option className="tap">Election Data</option>
            <option className="tap">Pre-Election</option>
            <option className="tap">Election Day Live Updates</option>
            <option className="tap">Post-Election Anaylsis</option>
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
          <h5>president</h5>
          <div className="content">
            {/*{
                            presidentData?.map((candidate) =>
                                <div className="large" key={candidate.candidate_id}>
                                    <div className="percent"></div>
                                    <div className="apc">
                                        <div className="polygon">
                                            <img src={Polygon} alt="" />
                                        </div>
                                        <div className="tinubu">
                                            <div className="apc1">
                                                <img src={candidate?.candidate_id==="01gsxaa3v52mbr3aspbjn4w9bh" ? obi : candidate.candidate_id==="01gsxaarzz4gnvqykbb3ryewja" ? tinu : atiku} alt="" />
                                            </div>
                                            <div className="apc2">
                                                <h6>{candidate?.full_name}, {candidate?.political_party_name}</h6>
                                                <p>{candidate?.candidates_vote}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            
                        }*/}

            <div
              className="large"
              style={{
                width: `${
                  (tinubusData?.candidates_vote * 100) /
                  (obiData?.candidates_vote +
                    tinubusData?.candidates_vote +
                    atikuData?.candidates_vote)
                }% `,
              }}
            >
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
                    <h6>
                      {tinubusData?.full_name},{" "}
                      {tinubusData?.political_party_name}
                    </h6>
                    <p>{tinubusData?.candidates_vote} votes(51.2%)</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="large"
              style={{
                width: `${
                  (obiData?.candidates_vote * 100) /
                  (obiData?.candidates_vote +
                    tinubusData?.candidates_vote +
                    atikuData?.candidates_vote)
                }% `,
              }}
            >
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
                    <h6>
                      {obiData?.full_name}, {obiData?.political_party_name}
                    </h6>
                    <p>{obiData?.candidates_vote} votes(51.2%)</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="large"
              style={{
                width: `${
                  (atikuData?.candidates_vote * 100) /
                  (obiData?.candidates_vote +
                    tinubusData?.candidates_vote +
                    atikuData?.candidates_vote)
                }% `,
              }}
            >
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
                    <h6>
                      {atikuData?.full_name}, {atikuData?.political_party_name}
                    </h6>
                    <p>{atikuData?.candidates_vote} votes(51.2%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SENATE AND HOUSE OF REPRESENTATIVE SECTION */}

        <div className="sen-house-container">
          <div className="senate-container">
            <h5>senate</h5>
            <div className="whole-sen-cont">
              <div
                className="large"
                style={{
                  width: `${
                    (tinubusData?.candidates_vote * 100) /
                    (obiData?.candidates_vote +
                      tinubusData?.candidates_vote +
                      atikuData?.candidates_vote)
                  }% `,
                }}
              >
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
                      <h6>
                        {tinubusData?.full_name},{" "}
                        {tinubusData?.political_party_name}
                      </h6>
                      <p>{tinubusData?.candidates_vote} votes(51.2%)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="large"
                style={{
                  width: `${
                    (obiData?.candidates_vote * 100) /
                    (obiData?.candidates_vote +
                      tinubusData?.candidates_vote +
                      atikuData?.candidates_vote)
                  }% `,
                }}
              >
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
                      <h6>
                        {obiData?.full_name}, {obiData?.political_party_name}
                      </h6>
                      <p>{obiData?.candidates_vote} votes(51.2%)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="large"
                style={{
                  width: `${
                    (atikuData?.candidates_vote * 100) /
                    (obiData?.candidates_vote +
                      tinubusData?.candidates_vote +
                      atikuData?.candidates_vote)
                  }% `,
                }}
              >
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
                      <h6>
                        {atikuData?.full_name},{" "}
                        {atikuData?.political_party_name}
                      </h6>
                      <p>{atikuData?.candidates_vote} votes(51.2%)</p>
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
              <div
                className="large"
                style={{
                  width: `${
                    (tinubusData?.candidates_vote * 100) /
                    (obiData?.candidates_vote +
                      tinubusData?.candidates_vote +
                      atikuData?.candidates_vote)
                  }% `,
                }}
              >
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
                      <h6>
                        {tinubusData?.full_name},{" "}
                        {tinubusData?.political_party_name}
                      </h6>
                      <p>{tinubusData?.candidates_vote} votes(51.2%)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="large"
                style={{
                  width: `${
                    (obiData?.candidates_vote * 100) /
                    (obiData?.candidates_vote +
                      tinubusData?.candidates_vote +
                      atikuData?.candidates_vote)
                  }% `,
                }}
              >
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
                      <h6>
                        {obiData?.full_name}, {obiData?.political_party_name}
                      </h6>
                      <p>{obiData?.candidates_vote} votes(51.2%)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="large"
                style={{
                  width: `${
                    (atikuData?.candidates_vote * 100) /
                    (obiData?.candidates_vote +
                      tinubusData?.candidates_vote +
                      atikuData?.candidates_vote)
                  }% `,
                }}
              >
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
                      <h6>
                        {atikuData?.full_name},{" "}
                        {atikuData?.political_party_name}
                      </h6>
                      <p>{atikuData?.candidates_vote} votes(51.2%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal">
        <hr />
      </div>

      {/* THE MAP */}
      <div className="map">
        <svg
          width="965"
          height="787"
          viewBox="0 0 965 787"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M314.071 403.482L316.692 404.132L319.992 405.934L324.186 409.639L327.486 414.565L330.524 423.972L334.944 426.594L338.173 429.661L344.69 437.951L347.931 440.847L349.873 441.132L350.266 440.733L351.004 437.438L352.482 434.553L352.708 434.256L353.9 435.26L354.448 435.157L354.519 431.737L358.772 429.753L360.107 426.047L368.995 426.218L370.663 425.694L369.948 428.704L368.149 431.771V432.751L369.126 434.678L371.735 437.711L372.378 444.746L370.984 450.117V455.464L369.066 457.368L368.053 459.785L367.851 464.05L368.673 464.688L373.748 461.325L384.781 456.684L399.554 452.842L407.977 452.044L412.243 452.819L421.416 453.469L421.035 456.707L421.679 463.4L423.918 467.071L427.135 470.047L428.005 472.157V480.024L428.684 487.789L430.161 494.094L431.674 495.291L435.618 494.926L437.381 495.462L436.952 497.526L435.487 498.906L434.927 500.377L434.427 504.858L432.115 511.505L428.184 515.051L420.511 518.608L419.32 520.25L418.914 525.29H416.818L415.209 524.093L414.232 524.207L410.217 520.455L409.216 519.794L408.728 520.364L407.406 518.517L404.498 517.662L400.555 518.529L398.005 520.923L395.098 521.961L387.735 530.421L380.587 534.822L374.63 540.968L373.153 541.344L372.331 540.956L370.746 538.676L369.864 538.619L369.65 536.019L368.566 535.734L365.313 541.435L363.717 543.567L361.882 544.548L359.213 547.182L357.748 551.857L357.676 554.969L355.484 557.831L353.78 558.846L349.503 558.093L347.514 558.971L346.322 552.13L344.642 549.85L343.582 546.885L344.69 540.591L343.129 538.174L345.703 534.127L347.978 528.631L347.907 523.887L349.837 519.395L350.206 517.206L350.027 513.318L349.086 511.037L347.359 509.806L346.703 507.389L344.618 505.781L342.391 506.249L340.651 507.389L340.139 506.956L335.671 507.913L334.885 506.055L335.171 505.473L334.289 504.835L333.717 502.828L332.704 502.133L332.621 500.741L331.358 498.461L328.308 498.29L327.426 498.872L324.734 499.088L322.351 496.546L321.696 496.614L320.195 495.006L319.42 495.086L317.562 492.692L310.532 495.987L307.995 495.383L306.708 494.493L306.374 493.296L306.648 491.095L307.84 488.986L307.518 488.074L304.921 488.359L304.373 487.618L304.826 486.603L304.492 485.828L303.658 485.417L301.573 485.839L300.656 485.109L300.382 484.22L294.734 479.465L292.352 476.387L293.197 471.666L290.207 471.176L284.703 472.179L276.577 469.454L274.278 467.482H272.753L271.18 466.342L269.608 462.066L269.703 460.287L272.431 456.867L274.028 456.137L274.361 454.575L273.694 453.777L270.942 453.469L266.57 454.199L263.615 455.818L262.96 455.305V450.424L264.258 449.946L265.152 448.304L264.175 445.556L258.539 442.637L258.385 441.964L255.501 439.9L255.418 439.136L252.582 436.343L250.295 432.124L250.497 430.984L253.047 428.213L255.775 423.755L260.195 419.194L264.485 416.583L266.593 419.571L269.179 421.577L277.519 424.998L279.711 425.089L282.999 426.321L287.419 426.081L289.957 426.868L294.627 426.731L302.133 428.464L305.707 427.894L307.578 423.607L308.34 416.207L311.092 407.325L314.071 403.482Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M348.496 487.037V479.405H349.421V483.191H349.51L352.939 479.405H354.146L350.941 482.848L354.146 487.037H353.028L350.375 483.489L349.421 484.563V487.037H348.496ZM361.423 483.221C361.423 484.026 361.278 484.722 360.987 485.308C360.697 485.894 360.298 486.346 359.791 486.664C359.284 486.982 358.705 487.141 358.054 487.141C357.403 487.141 356.825 486.982 356.318 486.664C355.811 486.346 355.412 485.894 355.122 485.308C354.831 484.722 354.686 484.026 354.686 483.221C354.686 482.416 354.831 481.72 355.122 481.134C355.412 480.548 355.811 480.096 356.318 479.778C356.825 479.46 357.403 479.301 358.054 479.301C358.705 479.301 359.284 479.46 359.791 479.778C360.298 480.096 360.697 480.548 360.987 481.134C361.278 481.72 361.423 482.416 361.423 483.221ZM360.529 483.221C360.529 482.56 360.418 482.002 360.197 481.548C359.979 481.093 359.682 480.749 359.307 480.515C358.934 480.282 358.516 480.165 358.054 480.165C357.592 480.165 357.174 480.282 356.799 480.515C356.426 480.749 356.129 481.093 355.908 481.548C355.689 482.002 355.58 482.56 355.58 483.221C355.58 483.882 355.689 484.44 355.908 484.894C356.129 485.349 356.426 485.693 356.799 485.927C357.174 486.16 357.592 486.277 358.054 486.277C358.516 486.277 358.934 486.16 359.307 485.927C359.682 485.693 359.979 485.349 360.197 484.894C360.418 484.44 360.529 483.882 360.529 483.221ZM368.195 481.79C368.113 481.539 368.005 481.314 367.87 481.115C367.739 480.914 367.581 480.743 367.397 480.601C367.216 480.46 367.01 480.352 366.778 480.277C366.547 480.202 366.294 480.165 366.018 480.165C365.566 480.165 365.155 480.282 364.785 480.515C364.415 480.749 364.12 481.093 363.902 481.548C363.683 482.002 363.574 482.56 363.574 483.221C363.574 483.882 363.684 484.44 363.905 484.894C364.126 485.349 364.426 485.693 364.803 485.927C365.181 486.16 365.606 486.277 366.078 486.277C366.515 486.277 366.9 486.184 367.233 485.997C367.569 485.809 367.829 485.543 368.016 485.2C368.205 484.855 368.299 484.448 368.299 483.981L368.582 484.041H366.287V483.221H369.193V484.041C369.193 484.669 369.059 485.216 368.791 485.681C368.525 486.145 368.157 486.505 367.688 486.761C367.221 487.015 366.684 487.141 366.078 487.141C365.402 487.141 364.808 486.982 364.297 486.664C363.787 486.346 363.39 485.894 363.104 485.308C362.821 484.722 362.679 484.026 362.679 483.221C362.679 482.617 362.76 482.074 362.921 481.592C363.085 481.108 363.316 480.696 363.615 480.355C363.913 480.015 364.265 479.754 364.673 479.573C365.08 479.391 365.529 479.301 366.018 479.301C366.421 479.301 366.796 479.361 367.144 479.483C367.494 479.602 367.806 479.773 368.079 479.994C368.355 480.212 368.585 480.474 368.769 480.78C368.952 481.083 369.079 481.42 369.149 481.79H368.195ZM371.7 479.405V487.037H370.776V479.405H371.7Z"
            fill="#00344D"
          />
          <path
            d="M284.608 472.156L290.112 471.152L293.102 471.643L292.257 476.363L294.639 479.442L300.287 484.196L300.561 485.086L297.642 489.065L296.569 489.749L294.711 489.589L293.09 491.55L292.876 493.124L293.353 494.082L295.735 495.017L294.687 498.312L295.604 501.151L296.105 501.47L294.401 505.507L291.84 506.647L289.743 508.733L289.183 509.874L289.361 511.458L285.513 519.314L285.894 520.261L285.454 521.23L283.655 522.062L282.177 523.966L281.439 529.246L282.844 530.705L283.035 531.64L281.987 532.221V534.08L280.569 533.498L280.271 533.784L279.08 539.485L277.281 543.35L274.088 544.49L273.123 544.08L271.705 542.392L270.108 542.255L265.688 545.949H264.807L262.305 539.724L264.687 537.158L262.614 534.775L260.66 534.388L256.741 534.833L248.83 534.707L246.828 534.297L244.112 534.73L241.586 534.285L238.965 535.425L238.417 536.315L238.31 538.595L237.118 539.37L236.177 541.959L234.116 542.871L233.58 544.011L231.483 545.847L230.899 546.987L231.006 549.518L230.053 550.658V553.897L231.519 554.626L233.175 557.226L233.866 558.879L233.437 560.84L232.448 563.121L230.375 565.071L229.362 569.335L225.86 570.316L225.169 571.022L223.977 575.15L223.024 575.948L223.358 575.446L223.06 576.131L223.584 577.168L224.418 577.225L226.729 578.776L228.755 582.071L230.613 582.185L232.198 583.325L233.675 585.902L233.21 587.225L224.99 606.312L219.223 599.584L208.298 589.049L190.642 575.367L187.425 573.474L192.19 573.793L193.179 571.821L192.929 570.601L188.997 568.617L185.673 568.902L184.482 568.411L186.055 566.872L188.914 566.758L190.237 565.983L191.166 564.683L194.073 563.93L194.931 561.855L193.93 557.785V552.688L193.167 551.799L191.059 552.38L189.093 554.968L187.401 556.177L185.221 556.325L179.502 555.402L177.119 553.121V549.233L180.693 543.623L185.018 539.884L187.472 538.743L190.272 536.349L191.547 532.643L192.429 526.361L195.61 524.742L198.171 519.041L203.282 515.118H206.046L209.037 516.532L212.504 519.064H214.66L215.423 517.627L215.149 515.768L215.637 513.363L215.089 508.802L216.948 501.345L217.949 500.695L224.93 498.882L224.192 496.146L229.612 494.492L238.882 494.983L247.221 494.629L249.068 495.233L250.76 497.753L251.951 501.39L251.761 502.371L253.059 505.438L255.776 506.111L262.364 502.12L265.938 497.069L267.976 492.599L270.001 483.364L271.347 480.924L274.207 478.096L276.804 476.443L277.817 474.094L280.033 473.661L281.82 475.075L282.797 474.733L284.572 471.95L284.608 472.156Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M204.403 536.217C204.403 537.022 204.258 537.718 203.967 538.304C203.676 538.89 203.277 539.343 202.771 539.661C202.264 539.979 201.685 540.138 201.034 540.138C200.383 540.138 199.804 539.979 199.297 539.661C198.791 539.343 198.392 538.89 198.101 538.304C197.81 537.718 197.665 537.022 197.665 536.217C197.665 535.412 197.81 534.717 198.101 534.13C198.392 533.544 198.791 533.092 199.297 532.774C199.804 532.456 200.383 532.297 201.034 532.297C201.685 532.297 202.264 532.456 202.771 532.774C203.277 533.092 203.676 533.544 203.967 534.13C204.258 534.717 204.403 535.412 204.403 536.217ZM203.509 536.217C203.509 535.556 203.398 534.999 203.177 534.544C202.958 534.089 202.661 533.745 202.286 533.512C201.914 533.278 201.496 533.161 201.034 533.161C200.572 533.161 200.153 533.278 199.778 533.512C199.405 533.745 199.109 534.089 198.887 534.544C198.669 534.999 198.56 535.556 198.56 536.217C198.56 536.878 198.669 537.436 198.887 537.89C199.109 538.345 199.405 538.689 199.778 538.923C200.153 539.156 200.572 539.273 201.034 539.273C201.496 539.273 201.914 539.156 202.286 538.923C202.661 538.689 202.958 538.345 203.177 537.89C203.398 537.436 203.509 536.878 203.509 536.217ZM212.009 532.401V540.033H211.115L206.956 534.041H206.881V540.033H205.957V532.401H206.851L211.025 538.408H211.1V532.401H212.009ZM216.214 540.033H213.858V532.401H216.318C217.058 532.401 217.692 532.554 218.219 532.859C218.745 533.163 219.149 533.599 219.43 534.167C219.71 534.734 219.851 535.412 219.851 536.202C219.851 536.997 219.709 537.682 219.426 538.256C219.143 538.827 218.73 539.267 218.189 539.575C217.647 539.88 216.989 540.033 216.214 540.033ZM214.783 539.213H216.154C216.785 539.213 217.308 539.092 217.723 538.848C218.138 538.605 218.447 538.258 218.651 537.808C218.855 537.359 218.956 536.823 218.956 536.202C218.956 535.586 218.856 535.056 218.655 534.611C218.453 534.164 218.153 533.821 217.753 533.582C217.353 533.341 216.855 533.221 216.258 533.221H214.783V539.213ZM227.841 536.217C227.841 537.022 227.695 537.718 227.405 538.304C227.114 538.89 226.715 539.343 226.208 539.661C225.702 539.979 225.123 540.138 224.472 540.138C223.821 540.138 223.242 539.979 222.735 539.661C222.228 539.343 221.83 538.89 221.539 538.304C221.248 537.718 221.103 537.022 221.103 536.217C221.103 535.412 221.248 534.717 221.539 534.13C221.83 533.544 222.228 533.092 222.735 532.774C223.242 532.456 223.821 532.297 224.472 532.297C225.123 532.297 225.702 532.456 226.208 532.774C226.715 533.092 227.114 533.544 227.405 534.13C227.695 534.717 227.841 535.412 227.841 536.217ZM226.946 536.217C226.946 535.556 226.836 534.999 226.615 534.544C226.396 534.089 226.099 533.745 225.724 533.512C225.351 533.278 224.934 533.161 224.472 533.161C224.01 533.161 223.591 533.278 223.216 533.512C222.843 533.745 222.546 534.089 222.325 534.544C222.107 534.999 221.997 535.556 221.997 536.217C221.997 536.878 222.107 537.436 222.325 537.89C222.546 538.345 222.843 538.689 223.216 538.923C223.591 539.156 224.01 539.273 224.472 539.273C224.934 539.273 225.351 539.156 225.724 538.923C226.099 538.689 226.396 538.345 226.615 537.89C226.836 537.436 226.946 536.878 226.946 536.217Z"
            fill="#00344D"
          />
          <path
            d="M300.608 485.086L301.525 485.816L303.61 485.394L304.444 485.804L304.778 486.58L304.325 487.594L304.873 488.336L307.47 488.05L307.792 488.963L306.6 491.072L306.326 493.273L306.66 494.47L307.947 495.359L310.484 495.963L317.561 492.623L319.42 495.017L320.194 494.937L321.696 496.545L322.351 496.477L324.734 499.019L327.426 498.803L328.308 498.221L331.358 498.392L332.621 500.672L332.704 502.063L333.717 502.759L334.289 504.743L335.17 505.381L334.884 505.963L335.671 507.822L340.139 506.864L340.651 507.297L342.39 506.157L344.618 505.689L346.703 507.297L347.358 509.714L349.086 510.946L350.027 513.226L350.206 517.114L349.837 519.303L347.895 523.83L347.966 528.573L345.69 534.069L343.129 538.174L344.654 540.625L343.546 546.919L344.606 549.883L346.286 552.164L347.478 559.005L347.561 559.336L345.321 561.616L340.448 561.183L336.004 562.106L326.247 567.933L317.49 571.467L312.724 576.633H311.95L308.876 572.14L307.685 571.673L305.707 571.308L303.574 573.121L302.514 575.401L302.335 578.103L302.812 578.959L304.551 579.882L305.195 585.378L307.577 589.46L309.96 592.219L312.2 593.884L314.857 594.807L315.191 596.791L314.368 600.486L312.522 602.663L310.592 604.556L306.922 606.836L304.182 610.337L300.882 612.617L298.725 613.301L292.482 614.442L289.945 613.792L290.779 611.739L288.872 609.904L291.255 605.343L290.695 604.396L286.049 601.717L283.666 598.49L278.09 595.503L274.325 594.078L272.371 592.55L266.271 594.659L264.079 597.464L261.97 597.008L259.266 594.728L257.622 594.397L253.845 595.161L250.271 594.34L249.079 594.693L248.317 595.035L248.245 596.176L249.306 597.966L248.686 599.174L243.813 602.857L241.836 602.937L241.776 600.121L240.99 597.213L241.836 593.872L241.657 592.242L239.679 590.338L233.258 587.202L233.722 585.88L232.257 583.303L230.672 582.163L228.814 582.06L226.848 578.708L224.537 577.157L223.703 577.089L223.178 576.051L223.476 575.378L223.143 575.88L224.096 575.082L225.287 570.943L225.978 570.247L229.552 569.255L230.553 564.991L232.626 563.041L233.627 560.761L234.044 558.8L233.365 557.147L231.697 554.547L230.231 553.817V550.579L231.196 549.439L231.077 546.908L231.661 545.767L233.746 543.92L234.282 542.78L236.343 541.868L237.285 539.28L238.476 538.493L238.583 536.212L239.119 535.323L241.74 534.183L244.278 534.639L246.995 534.206L248.996 534.616L256.907 534.742L260.827 534.308L262.781 534.696L264.854 537.068L262.471 539.644L264.973 545.87H265.854L270.346 542.267L271.943 542.404L273.36 544.091L274.325 544.49L277.518 543.35L279.317 539.485L280.449 533.784L280.747 533.499L282.165 534.08V532.222L283.213 531.629L283.035 530.705L281.629 529.246L282.355 523.955L283.678 522.211L285.489 521.378L285.93 520.409L285.548 519.452L289.397 511.596L289.218 510.011L289.778 508.87L291.899 506.704L294.46 505.564L296.164 501.528L295.651 501.208L294.734 498.381L295.771 495.085L293.388 494.151L292.911 493.193L293.126 491.608L294.806 489.647L296.664 489.806L297.725 489.122L300.608 485.086Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M290.26 554.74V547.108H294.866V547.928H291.184V550.507H294.628V551.327H291.184V553.92H294.926V554.74H290.26ZM298.887 554.74H296.532V547.108H298.992C299.732 547.108 300.366 547.261 300.892 547.566C301.419 547.87 301.823 548.306 302.103 548.874C302.384 549.441 302.525 550.119 302.525 550.909C302.525 551.704 302.383 552.389 302.1 552.963C301.816 553.534 301.404 553.974 300.862 554.282C300.321 554.587 299.662 554.74 298.887 554.74ZM297.456 553.92H298.828C299.459 553.92 299.982 553.799 300.397 553.555C300.812 553.312 301.121 552.965 301.325 552.515C301.528 552.066 301.63 551.53 301.63 550.909C301.63 550.293 301.53 549.763 301.328 549.318C301.127 548.871 300.826 548.528 300.426 548.289C300.026 548.048 299.528 547.928 298.932 547.928H297.456V553.92ZM310.514 550.924C310.514 551.729 310.369 552.425 310.078 553.011C309.788 553.597 309.389 554.05 308.882 554.368C308.375 554.686 307.797 554.845 307.146 554.845C306.495 554.845 305.916 554.686 305.409 554.368C304.902 554.05 304.503 553.597 304.213 553.011C303.922 552.425 303.777 551.729 303.777 550.924C303.777 550.119 303.922 549.424 304.213 548.837C304.503 548.251 304.902 547.799 305.409 547.481C305.916 547.163 306.495 547.004 307.146 547.004C307.797 547.004 308.375 547.163 308.882 547.481C309.389 547.799 309.788 548.251 310.078 548.837C310.369 549.424 310.514 550.119 310.514 550.924ZM309.62 550.924C309.62 550.263 309.51 549.706 309.288 549.251C309.07 548.796 308.773 548.452 308.398 548.219C308.025 547.985 307.608 547.868 307.146 547.868C306.683 547.868 306.265 547.985 305.89 548.219C305.517 548.452 305.22 548.796 304.999 549.251C304.78 549.706 304.671 550.263 304.671 550.924C304.671 551.585 304.78 552.143 304.999 552.597C305.22 553.052 305.517 553.396 305.89 553.63C306.265 553.863 306.683 553.98 307.146 553.98C307.608 553.98 308.025 553.863 308.398 553.63C308.773 553.396 309.07 553.052 309.288 552.597C309.51 552.143 309.62 551.585 309.62 550.924Z"
            fill="#00344D"
          />
          <path
            d="M129.867 232.429L130.928 231.836L134.371 232.247L147.476 239.179L151.634 240.798L153.85 241.129L168.35 240.206L175.724 240.616L181.086 239.647L184.588 239.567L190.831 241.494L200.839 247.993L202.722 247.879L206.165 249.088L206.772 249.931L206.534 254.549L203.639 266.806L198.135 271.857L193.464 273.499L191.701 274.64L189.509 276.92L187.769 280.637L187.555 287.843L188.889 290.591L192.38 293.624L192.035 298.116L190.843 301.856V304.456L192.535 305.596L197.682 306.12L198.349 305.573L198.945 298.903L207.785 296.053L211.812 295.756L214.957 293.966L217.066 291.537L217.4 289.793L216.506 287.011L214.29 283.59L212.134 281.31L210.644 278.083L211.181 276.521V265.586L212.253 264.731L214.1 264.252L220.057 264.845L226.371 261.79L230.898 260.649L232.09 258.95L232.173 256.59L230.779 255.04L227.515 253.181L226.931 251.528L227.682 249.852L230.279 248.198L230.577 246.978L229.242 239.499L228.313 238.655H226.276L225.084 236.374L218.698 235.77L212.265 233.273L207.94 230.993L206.903 229.556L206.713 227.8L208.345 225.44L214.123 222.487L219.401 220.64L228.778 218.553L240.525 216.74H244.862L248.245 217.55L250.259 219.374L251.45 226.797L252.415 228.233L256.883 231.05L257.455 233.079L257.014 238.564L257.443 243.124L259.397 244.55L272.109 243.763L286.525 237.971L291.207 237.503L292.732 234.995L296.807 231.848L299.011 232.258L300.631 233.513L304.587 238.529L309.114 246.1L311.008 250.764L310.925 251.722L307.351 257.856L306.874 263.317L308.59 266.031L308.757 267.719L307.875 269.999L308.161 274.343L305.969 276.395L305.576 279.029L305.838 280.591L309.471 282.872L310.925 286.885L312.629 287.569L314.309 286.555L320.718 278.573L327.378 273.442L330.309 271.732L332.811 271.037L336.278 270.888L337.469 272.029L338.661 275.061L347.751 271.8L352.517 272.439L353.279 271.299L352.481 268.574L353.887 267.205L359.522 267.776L360.249 268.357L360.821 270.546L361.155 275.677L362.811 275.837L365.491 275.073L367.41 275.575L369.792 279.907L369.733 282.838L368.124 287.558L373.879 289.451L377.727 291.446L377.358 293.726L376.166 295.767L371.115 298.732L370.102 300.419L368.172 302.335L365.587 303.886L364.502 305.3L365.694 307.58L367.731 309.473L375.678 312.312L391.011 312.221L392.643 312.984L393.037 314.125L393.227 319.894L394.323 324.318L394.442 327.841L393.692 329.563L389.844 330.03L388.795 330.509L388.45 331.239L388.652 332.277L389.999 333.155L394.311 334.705L393.323 338.126L396.897 339.973L397.588 342.117L393.906 345.731L393.191 348.912L392.25 349.904L389.331 351.375L388.664 352.435L388.557 355.081L392.596 358.25L390.785 363.073L393.716 362.389L395.181 362.868L384.875 376.938L383.756 377.212L372.807 367.976L370.71 367.258L357.604 367.794L354.411 368.17L354.006 368.603L353.577 384.179L354.471 418.624L353.923 420.186L356.246 425.784L357.938 426.32L360.118 426.081L358.784 429.787L354.53 431.77L354.459 435.191L353.911 435.294L352.719 434.29L352.493 434.587L351.016 437.471L350.277 440.767L349.884 441.166L347.942 440.881L344.701 437.985L338.184 429.695L334.956 426.628L330.536 424.006L327.497 414.599L324.197 409.673L319.992 405.911L316.691 404.109L314.07 403.459L304.229 401.51L295.27 401.863L291.231 402.901L285.369 402.536L283.177 401.852L281.438 401.042L280.33 399.343L274.146 395.159L260.123 386.812L259.361 387.12L254.965 385.307L249.58 384.384L244.814 385.706L242.133 384.92L234.568 376.676L232.876 375.422L225.311 372.001L222.439 372.184L211.526 376.266H209.143L206.892 374.76L206.01 368.546L204.938 366.141L203.663 365.513L200.089 365.069L196.264 362.321L195.478 361.181L195.061 359.584L195.287 355.674L194.775 353.826L193.774 352.983L184.755 353.883L183.206 353.439L182.158 349.243L182.086 343.109L182.956 337.807L182.634 334.454L181.443 333.907L179.418 334.112L176.689 332.311L170.006 324.922L167.623 321.388L150.943 303.304L146.547 302.153L133.06 302.552L126.65 303.601L127.234 300.18L124.851 299.382L122.349 297.102L120.336 293.031L124.005 285.05L123.839 283.123L124.899 281.823L127.973 280.306L135.217 283.944L136.408 280.386L136.706 276.966L140.066 269.634L139.279 262.565L136.074 260.398L132.5 254.013L133.942 248.768L134.097 246.488L132.631 240.73L130.094 239.795L130.594 237.515L130.26 235.291L130.868 233.068L129.867 232.429Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M266.754 320.153V327.785H265.859L261.7 321.793H261.626V327.785H260.702V320.153H261.596L265.77 326.16H265.844V320.153H266.754ZM269.527 320.153V327.785H268.603V320.153H269.527ZM276.598 322.538C276.516 322.287 276.408 322.062 276.273 321.864C276.142 321.662 275.984 321.491 275.8 321.349C275.619 321.208 275.412 321.1 275.181 321.025C274.95 320.95 274.697 320.913 274.421 320.913C273.969 320.913 273.558 321.03 273.188 321.264C272.818 321.497 272.523 321.841 272.304 322.296C272.086 322.75 271.977 323.308 271.977 323.969C271.977 324.63 272.087 325.188 272.308 325.642C272.529 326.097 272.829 326.441 273.206 326.675C273.584 326.908 274.009 327.025 274.481 327.025C274.918 327.025 275.303 326.932 275.636 326.745C275.971 326.557 276.232 326.291 276.419 325.948C276.608 325.603 276.702 325.196 276.702 324.729L276.985 324.789H274.69V323.969H277.596V324.789C277.596 325.417 277.462 325.964 277.194 326.429C276.928 326.893 276.56 327.253 276.091 327.509C275.624 327.763 275.087 327.89 274.481 327.89C273.805 327.89 273.211 327.73 272.699 327.412C272.19 327.094 271.793 326.642 271.507 326.056C271.224 325.47 271.082 324.774 271.082 323.969C271.082 323.365 271.163 322.823 271.324 322.341C271.488 321.856 271.719 321.444 272.018 321.103C272.316 320.763 272.668 320.502 273.076 320.321C273.483 320.139 273.932 320.049 274.421 320.049C274.824 320.049 275.199 320.11 275.547 320.231C275.897 320.35 276.209 320.521 276.482 320.742C276.758 320.96 276.988 321.223 277.171 321.528C277.355 321.831 277.482 322.168 277.552 322.538H276.598ZM279.179 327.785V320.153H283.785V320.973H280.103V323.552H283.547V324.372H280.103V326.965H283.845V327.785H279.179ZM285.451 327.785V320.153H288.03C288.626 320.153 289.116 320.255 289.498 320.459C289.881 320.66 290.164 320.937 290.348 321.29C290.532 321.642 290.624 322.044 290.624 322.493C290.624 322.943 290.532 323.342 290.348 323.69C290.164 324.037 289.882 324.311 289.502 324.509C289.122 324.706 288.636 324.804 288.045 324.804H285.958V323.969H288.015C288.423 323.969 288.75 323.909 288.999 323.79C289.25 323.671 289.431 323.502 289.543 323.283C289.657 323.062 289.714 322.799 289.714 322.493C289.714 322.188 289.657 321.921 289.543 321.692C289.429 321.464 289.246 321.287 288.995 321.163C288.744 321.036 288.413 320.973 288 320.973H286.375V327.785H285.451ZM289.044 324.357L290.922 327.785H289.849L288 324.357H289.044Z"
            fill="#00344D"
          />
          <path
            d="M126.676 303.646L133.086 302.597L146.549 302.152L150.862 303.213L167.541 321.296L169.924 324.831L176.608 332.219L179.336 334.021L181.362 333.816L182.553 334.363L182.875 337.715L182.005 343.017L182.076 349.151L183.125 353.347L184.674 353.792L193.693 352.891L194.693 353.735L195.206 355.582L194.979 359.493L195.396 361.089L196.183 362.229L200.007 364.977L203.581 365.422L204.856 366.049L205.928 368.455L206.81 374.669L209.062 376.174H211.445L222.358 372.115L225.229 371.933L232.795 375.353L234.486 376.607L242.052 384.851L244.732 385.638L249.498 384.315L254.883 385.239L259.327 387.074L260.09 386.767L274.112 395.113L280.296 399.297L281.404 400.996L283.143 401.806L285.335 402.49L291.197 402.855L295.236 401.817L304.195 401.464L314.036 403.413L311.106 407.233L308.389 416.172L307.627 423.572L305.756 427.859L302.182 428.429L294.676 426.696L290.006 426.833L287.468 426.046L283.048 426.286L279.76 425.054L277.568 424.963L269.228 421.543L266.559 419.593L264.498 416.549L260.209 419.16L255.789 423.72L253.06 428.179L250.463 430.995L250.261 432.135L252.548 436.354L255.419 439.147L255.503 439.911L258.386 441.975L258.541 442.648L264.212 445.589L265.189 448.337L264.295 449.979L257.433 450.082L252.584 451.598L251.607 454.13L251.952 454.848L250.761 457.311L249.224 456.684L246.901 457.345L244.161 456.638L241.385 456.9L240.193 456.342L238.442 453.993L237.31 453.571L231.972 454.996L230.781 454.437L230.054 452.533L229.566 452.727L229.101 452.111L227.112 453.024L222.954 453.172L221.19 449.557L218.593 448.896L212.946 450.834L209.693 450.378L209.789 451.382L209.574 450.412L209.145 450.515L204.928 452.374L201.83 452.727L191.977 452.476L191.393 451.724L189.666 451.644L188.82 450.572L186.556 445.088L186.091 441.929L185.162 441.177V440.265L181.04 437.699L177.466 432.865L176.012 428.943L175.905 426.548L174.964 423.39L172.581 420.391L169.007 412.284L167.029 410.106L165.456 404.075L164.491 402.273L165.683 397.142L168.161 395.375L168.578 393.551L169.257 392.878L173.022 390.495L175.81 386.892L175.619 385.41L174.058 384.52L170.687 386.573L168.054 386.664L163.598 385.387L162.287 385.535L159.428 383.779L152.637 381.795L148.765 379.036L146.751 376.756L146.108 373.928L141.247 371.123L138.864 371.226L134.313 373.597L132.252 377.827V380.849L131.716 382.115L126.45 386.025L118.539 389.355L111.641 393.117L108.674 395.329L107.328 395.626L103.753 398.146L95.4136 401.863L94.3056 402.034L93.6742 401.179L93.138 401.304L92.0539 400.016L91.2318 399.799L88.1699 400.107L79.8301 406.412L77.8523 407.165L73.1939 411.087L72.9676 412.227L71.1805 413.128L66.3672 413.892H62.5904L58.7898 417.062L59.457 415.032L58.7541 413.481V409.445L57.9082 408.419L58.1941 406.777L58.8494 405.192L58.3848 402.171L57.1934 400.13L58.075 398.533L59.7787 397.496L59.3021 393.688L60.1242 393.425L60.5293 391.464L60.291 390.757V389.754L61.1131 387.884L61.6254 386.105L61.1369 385.239L60.8152 384.361L60.3982 383.471L60.5531 382.137L60.851 380.165L61.0416 379.378L67.4394 379.583L68.2853 379.401L69.4767 378.055L73.873 377.406L74.6594 378.34L76.1367 378.854L77.9119 378.74L83.8689 376.767L84.1668 374.76L86.49 370.336L86.6925 366.072L88.9681 363.928L88.5631 357.292L87.0381 352.732L87.4074 351.113L88.7894 348.969L91.7322 347.395L92.7091 345.309L95.7949 341.181L96.8076 337.647L97.999 336.974L100.549 337.259L103.039 335.287L103.158 333.895L101.561 330.977L101.18 328.776L101.621 327.248L102.943 325.857L110.985 322.779L115.024 323.052L116.382 322.71L118.765 320.361L118.908 318.879L121.72 315.926L122.399 313.178L122.697 307.477L123.709 306.223L126.188 305.242L126.676 303.646Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M190.829 407.199V399.567H191.753V403.353H191.842L195.271 399.567H196.478L193.273 403.01L196.478 407.199H195.36L192.707 403.651L191.753 404.725V407.199H190.829ZM199.061 407.199L196.974 399.567H197.913L199.508 405.783H199.582L201.207 399.567H202.251L203.876 405.783H203.95L205.545 399.567H206.484L204.397 407.199H203.443L201.759 401.117H201.699L200.015 407.199H199.061ZM207.354 407.199H206.385L209.188 399.567H210.142L212.944 407.199H211.975L209.695 400.774H209.635L207.354 407.199ZM207.712 404.218H211.618V405.038H207.712V404.218ZM214.133 407.199V399.567H216.712C217.308 399.567 217.798 399.669 218.18 399.873C218.563 400.074 218.846 400.351 219.03 400.704C219.214 401.056 219.306 401.458 219.306 401.907C219.306 402.357 219.214 402.756 219.03 403.104C218.846 403.451 218.564 403.725 218.184 403.923C217.804 404.12 217.318 404.218 216.727 404.218H214.64V403.383H216.697C217.104 403.383 217.432 403.324 217.681 403.204C217.932 403.085 218.113 402.916 218.225 402.697C218.339 402.476 218.396 402.213 218.396 401.907C218.396 401.602 218.339 401.335 218.225 401.106C218.111 400.878 217.928 400.701 217.677 400.577C217.426 400.45 217.095 400.387 216.682 400.387H215.057V407.199H214.133ZM217.726 403.771L219.604 407.199H218.531L216.682 403.771H217.726ZM221.159 407.199H220.19L222.992 399.567H223.946L226.749 407.199H225.78L223.499 400.774H223.439L221.159 407.199ZM221.517 404.218H225.422V405.038H221.517V404.218Z"
            fill="#00344D"
          />
          <path
            d="M58.79 417.131L62.5906 413.962H66.3674L71.2283 413.141L73.0154 412.24L73.2418 411.1L77.9002 407.177L79.8779 406.425L88.1701 400.108L91.232 399.8L92.0541 400.017L93.1382 401.305L93.6744 401.18L94.3058 402.035L95.4138 401.864L103.754 398.147L107.328 395.627L108.674 395.331L111.641 393.119L118.539 389.356L126.45 386.027L131.716 382.116L132.252 380.827V377.806L134.266 373.576L138.817 371.204L141.2 371.102L146.06 373.906L146.704 376.734L148.717 379.015L152.589 381.774L159.38 383.758L162.24 385.514L163.55 385.365L168.113 386.597L170.746 386.506L174.118 384.453L175.679 385.343L175.869 386.825L173.082 390.428L169.317 392.811L168.638 393.484L168.221 395.308L165.742 397.075L164.551 402.206L165.516 404.008L167.089 410.039L169.066 412.217L172.641 420.324L175.023 423.323L175.965 426.481L176.072 428.875L177.525 432.798L181.1 437.632L185.222 440.198V441.11L186.151 441.862L186.616 445.021L188.88 450.505L189.725 451.577L191.453 451.657L192.037 452.409L192.668 456.058L192.299 457.517L191.107 459.045L190.81 458.612L188.081 459.478L185.865 461.269L185.532 460.824L184.34 462.409L181.898 463.731L181.123 465.362L178.586 466.422L174.309 460.083L170.734 457.985L167.399 461.782L166.136 462.432L165.981 465.054L165.051 466.194L162.287 467.049L157.164 465.521L156.449 465.841L155.413 476.41L154.484 478.417L153.114 479.66L153.28 480.663L153.602 481.724L157.272 484.358L160.905 489.922L161.942 490.48L159.952 500.423L159.44 506.455L156.688 517.651L149.67 518.655L147.871 520.217L144.083 521.631L140.508 521.482L137.292 522.144L130.036 522.429L129.595 522.11L129.988 520.821L134.754 516.26L134.266 512.988L132.955 509.909L133.074 507.378L132.312 506.124L128.737 504.733L128.249 503.923L127.856 497.47L126.462 495.315L119.075 495.064L116.132 495.748L114.786 497.014L113.595 497.31L111.617 495.988L109.532 491.039L106.434 490.708L104.504 492.396L103.146 497.23L99.8339 501.791L97.7609 502.35L92.9953 502.031L90.2074 500.742L86.6332 498.051L82.8207 492.909L81.6293 489.488L77.9955 486.672L75.4697 483.81L74.8502 479.637L75.4578 478.987L75.9463 479.261L78.0193 472.42L78.2099 468.896L77.4474 466.89L76.399 466.194H74.7906L74.2306 466.707L73.5515 468.133L72.4316 474.472L71.4904 474.324L69.9297 471.85L69.2625 469.159L69.0242 461.782L68.5357 460.151L67.0584 458.11L64.7947 457.05L60.6367 457.289L53.4883 462.181L54.8107 459.798L55.6805 454.895L57.265 450.163L56.9076 448.886L57.3484 445.807L58.6947 443.231L59.1236 439.935L56.2166 436.446L54.8227 431.886L54.918 429.605L56.1689 427.473L55.6447 425.193L56.2166 424.394L57.7059 424.052L59.3262 420.734L58.8139 420.233L59.6836 419.093V417.873L58.79 417.131Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M113.585 443.68C113.585 444.485 113.439 445.181 113.149 445.767C112.858 446.353 112.459 446.805 111.952 447.123C111.445 447.441 110.867 447.6 110.216 447.6C109.565 447.6 108.986 447.441 108.479 447.123C107.972 446.805 107.573 446.353 107.283 445.767C106.992 445.181 106.847 444.485 106.847 443.68C106.847 442.875 106.992 442.179 107.283 441.593C107.573 441.007 107.972 440.555 108.479 440.237C108.986 439.919 109.565 439.76 110.216 439.76C110.867 439.76 111.445 439.919 111.952 440.237C112.459 440.555 112.858 441.007 113.149 441.593C113.439 442.179 113.585 442.875 113.585 443.68ZM112.69 443.68C112.69 443.019 112.58 442.461 112.358 442.007C112.14 441.552 111.843 441.208 111.468 440.974C111.095 440.741 110.678 440.624 110.216 440.624C109.754 440.624 109.335 440.741 108.96 440.974C108.587 441.208 108.29 441.552 108.069 442.007C107.85 442.461 107.741 443.019 107.741 443.68C107.741 444.341 107.85 444.899 108.069 445.353C108.29 445.808 108.587 446.152 108.96 446.386C109.335 446.619 109.754 446.736 110.216 446.736C110.678 446.736 111.095 446.619 111.468 446.386C111.843 446.152 112.14 445.808 112.358 445.353C112.58 444.899 112.69 444.341 112.69 443.68ZM114.124 439.864H115.182L117.299 443.427H117.389L119.505 439.864H120.564L117.806 444.351V447.496H116.882V444.351L114.124 439.864ZM127.84 443.68C127.84 444.485 127.695 445.181 127.404 445.767C127.113 446.353 126.714 446.805 126.208 447.123C125.701 447.441 125.122 447.6 124.471 447.6C123.82 447.6 123.241 447.441 122.734 447.123C122.228 446.805 121.829 446.353 121.538 445.767C121.247 445.181 121.102 444.485 121.102 443.68C121.102 442.875 121.247 442.179 121.538 441.593C121.829 441.007 122.228 440.555 122.734 440.237C123.241 439.919 123.82 439.76 124.471 439.76C125.122 439.76 125.701 439.919 126.208 440.237C126.714 440.555 127.113 441.007 127.404 441.593C127.695 442.179 127.84 442.875 127.84 443.68ZM126.946 443.68C126.946 443.019 126.835 442.461 126.614 442.007C126.395 441.552 126.098 441.208 125.723 440.974C125.351 440.741 124.933 440.624 124.471 440.624C124.009 440.624 123.59 440.741 123.215 440.974C122.842 441.208 122.546 441.552 122.324 442.007C122.106 442.461 121.997 443.019 121.997 443.68C121.997 444.341 122.106 444.899 122.324 445.353C122.546 445.808 122.842 446.152 123.215 446.386C123.59 446.619 124.009 446.736 124.471 446.736C124.933 446.736 125.351 446.619 125.723 446.386C126.098 446.152 126.395 445.808 126.614 445.353C126.835 444.899 126.946 444.341 126.946 443.68Z"
            fill="#00344D"
          />
          <path
            d="M53.5217 462.168L60.6701 457.277L64.8281 457.037L67.0918 458.097L68.5691 460.138L69.0576 461.769L69.2363 469.157L69.9035 471.848L71.4881 474.323L72.4888 474.471L73.6088 468.131L74.2879 466.706L74.8478 466.193H76.4801L77.5285 466.888L78.1718 468.884L77.9812 472.407L75.9082 479.248L75.4197 478.975L74.8121 479.624L75.4316 483.798L77.9574 486.66L81.5912 489.476L82.7826 492.896L86.5951 498.039L90.1693 500.73L92.9334 502.041L97.699 502.36L99.772 501.801L103.084 497.241L104.442 492.406L106.372 490.719L109.47 491.049L111.615 495.986L113.509 497.275L114.7 496.978L116.047 495.713L118.989 495.029L126.376 495.279L127.77 497.434L128.163 503.888L128.652 504.697L132.226 506.088L132.988 507.343L132.869 509.874L134.18 512.953L134.668 516.225L129.903 520.786L129.509 522.074L129.95 522.393L137.206 522.108L140.423 521.447L143.997 521.595L147.786 520.181L149.585 518.619L156.602 517.616L159.866 516.385L161.534 515.119L162.654 515.564L163.274 516.521L163.977 521.401H166.36L170.947 519.121L174.985 519.794L178.56 527.901L182.205 525.62H183.516L184.886 526.407L187.412 525.358L192.368 525.061L192.737 525.21L192.38 526.35L191.486 532.621L190.223 536.338L187.424 538.732L184.969 539.873L180.645 543.612L177.07 549.222V553.11L179.453 555.391L185.184 556.314L187.364 556.166L189.056 554.957L191.022 552.369L193.119 551.788L193.893 552.677V557.774L194.906 561.844L194.048 563.908L191.141 564.661L190.223 565.96L188.889 566.736L186.03 566.861L184.457 568.389L185.648 568.879L188.973 568.594L192.904 570.578L193.154 571.81L192.177 573.771L187.412 573.451L181.455 570.897L176.236 569.837L176.665 567.146L176.248 565.721L169.97 564.98L168.635 565.641L167.992 565.539L166.646 564.045L163.345 563.167L162.249 562.323L161.987 561.525L162.654 560.385L165.99 558.891L167.325 557.683L167.182 556.599L165.919 554.912L161.808 555.379L157.972 557.842L155.363 556.599V554.935L154.493 553.521L154.767 552.449L158.02 549.165L157.376 548.139L156.102 547.9L111.329 547.455L109.434 548.664L110.042 550.317L104.597 550.864L103.632 549.234L102.202 548.321L98.1398 546.691L95.9357 546.406L94.3154 549.268L94.1248 551.856L91.6466 553.737L90.7293 558.241L89.4664 559.381L73.1322 559.598L68.9027 558.994L68.4142 559.119V560.978L64.3396 563.783L61.9568 562.768L57.8941 563.258L56.4049 562.802L56.9053 559.062L58.2516 557.717L59.0021 555.961L57.4057 551.696L58.9545 549.234L61.4683 547.181L61.7066 544.057L61.4564 542.917L58.9068 542.598L57.9775 542.153L57.4891 541.172L57.2865 539.097L58.7162 536.931L58.3826 535.757L58.9545 531.811L58.6924 530.671L57.1435 530.512L56.5002 529.816L56.6789 526.555L58.3469 524.719L61.9568 522.713L59.026 520.17L58.4541 519.03L60.682 516.521L61.385 514.332L60.5986 509.019L58.7758 507.126L58.6328 496.078L61.4564 495.986L62.4334 495.439V494.618L61.933 490.627L58.74 488.347L58.4779 486.34L57.2865 484.607L56.9291 479.818L57.2269 469.557L56.8695 468.473L55.8926 468.074L54.8084 465.201L52.7949 462.727L53.5217 462.168Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M96.651 527.86C96.651 528.665 96.5056 529.36 96.2149 529.947C95.9243 530.533 95.5255 530.985 95.0187 531.303C94.5119 531.621 93.933 531.78 93.2821 531.78C92.6312 531.78 92.0523 531.621 91.5455 531.303C91.0386 530.985 90.6399 530.533 90.3492 529.947C90.0585 529.36 89.9132 528.665 89.9132 527.86C89.9132 527.055 90.0585 526.359 90.3492 525.773C90.6399 525.186 91.0386 524.734 91.5455 524.416C92.0523 524.098 92.6312 523.939 93.2821 523.939C93.933 523.939 94.5119 524.098 95.0187 524.416C95.5255 524.734 95.9243 525.186 96.2149 525.773C96.5056 526.359 96.651 527.055 96.651 527.86ZM95.7566 527.86C95.7566 527.199 95.646 526.641 95.4249 526.186C95.2063 525.732 94.9094 525.388 94.5342 525.154C94.1616 524.921 93.7442 524.804 93.2821 524.804C92.82 524.804 92.4013 524.921 92.0262 525.154C91.6535 525.388 91.3566 525.732 91.1355 526.186C90.9169 526.641 90.8076 527.199 90.8076 527.86C90.8076 528.521 90.9169 529.078 91.1355 529.533C91.3566 529.988 91.6535 530.332 92.0262 530.565C92.4013 530.799 92.82 530.916 93.2821 530.916C93.7442 530.916 94.1616 530.799 94.5342 530.565C94.9094 530.332 95.2063 529.988 95.4249 529.533C95.646 529.078 95.7566 528.521 95.7566 527.86ZM103.422 526.429C103.34 526.178 103.232 525.953 103.098 525.754C102.966 525.553 102.809 525.381 102.625 525.24C102.443 525.098 102.237 524.99 102.006 524.916C101.775 524.841 101.522 524.804 101.246 524.804C100.794 524.804 100.383 524.921 100.012 525.154C99.6422 525.388 99.3478 525.732 99.1292 526.186C98.9106 526.641 98.8012 527.199 98.8012 527.86C98.8012 528.521 98.9118 529.078 99.1329 529.533C99.354 529.988 99.6534 530.332 100.031 530.565C100.409 530.799 100.834 530.916 101.306 530.916C101.743 530.916 102.128 530.822 102.461 530.636C102.796 530.447 103.057 530.181 103.243 529.839C103.432 529.493 103.527 529.087 103.527 528.62L103.81 528.68H101.514V527.86H104.421V528.68C104.421 529.308 104.287 529.855 104.019 530.319C103.753 530.784 103.385 531.144 102.915 531.4C102.448 531.653 101.912 531.78 101.306 531.78C100.63 531.78 100.036 531.621 99.5242 531.303C99.0149 530.985 98.6174 530.533 98.3317 529.947C98.0485 529.36 97.9068 528.665 97.9068 527.86C97.9068 527.256 97.9876 526.713 98.1491 526.231C98.3131 525.747 98.5441 525.334 98.8422 524.994C99.1404 524.654 99.4932 524.393 99.9006 524.211C100.308 524.03 100.756 523.939 101.246 523.939C101.648 523.939 102.024 524 102.371 524.122C102.722 524.241 103.033 524.411 103.307 524.632C103.583 524.851 103.812 525.113 103.996 525.419C104.18 525.722 104.307 526.058 104.376 526.429H103.422ZM111.013 524.044H111.937V529.097C111.937 529.619 111.814 530.085 111.568 530.494C111.324 530.902 110.98 531.224 110.536 531.46C110.091 531.693 109.569 531.81 108.97 531.81C108.372 531.81 107.85 531.693 107.405 531.46C106.96 531.224 106.615 530.902 106.369 530.494C106.126 530.085 106.004 529.619 106.004 529.097V524.044H106.928V529.022C106.928 529.395 107.01 529.727 107.174 530.017C107.338 530.306 107.572 530.533 107.875 530.699C108.18 530.863 108.545 530.945 108.97 530.945C109.395 530.945 109.76 530.863 110.066 530.699C110.372 530.533 110.605 530.306 110.767 530.017C110.931 529.727 111.013 529.395 111.013 529.022V524.044ZM119.834 524.044V531.676H118.94L114.781 525.683H114.707V531.676H113.782V524.044H114.677L118.851 530.051H118.925V524.044H119.834Z"
            fill="#00344D"
          />
          <path
            d="M56.442 562.802L57.9312 563.258L61.9939 562.768L64.3053 563.782L68.4275 560.977V559.142L68.916 559.016L73.1455 559.621L89.4796 559.404L90.7425 558.264L91.6599 553.76L94.1261 551.856L94.2334 549.176L95.8537 546.314L98.0578 546.6L102.12 548.23L103.55 549.142L104.515 550.773L109.96 550.225L109.352 548.572L111.247 547.363L156.02 547.808L157.294 548.048L157.938 549.074L154.685 552.357L154.411 553.429L155.281 554.843V556.508L157.89 557.751L161.726 555.288L165.837 554.82L167.1 556.508L167.243 557.591L165.908 558.8L162.572 560.293L161.905 561.433L162.167 562.232L163.263 563.075L166.564 563.953L167.993 565.538L168.684 565.698L170.019 565.037L176.297 565.778L176.714 567.203L176.285 569.894L164.931 568.583L162.322 567.819L148.025 565.721L137.791 565.196L125.984 566.268L107.982 566.45L107.303 566.804L107.077 568.309L106.445 568.195L106.731 568.583L100.274 567.648H93.1254L67.391 568.48L56.0012 569.723L55.5723 566.177L56.442 562.802Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M116.016 558.639V553.296H116.663V558.065H119.146V558.639H116.016ZM120.704 558.639H120.026L121.988 553.296H122.656L124.617 558.639H123.939L122.343 554.141H122.301L120.704 558.639ZM120.955 556.552H123.689V557.126H120.955V556.552ZM128.851 554.966C128.793 554.79 128.718 554.633 128.624 554.494C128.532 554.353 128.421 554.233 128.292 554.134C128.165 554.034 128.021 553.959 127.859 553.907C127.698 553.854 127.52 553.828 127.327 553.828C127.011 553.828 126.723 553.91 126.464 554.074C126.205 554.237 125.999 554.478 125.845 554.796C125.692 555.114 125.616 555.505 125.616 555.967C125.616 556.43 125.693 556.82 125.848 557.139C126.003 557.457 126.212 557.698 126.477 557.861C126.741 558.025 127.039 558.107 127.369 558.107C127.675 558.107 127.945 558.041 128.178 557.911C128.412 557.779 128.595 557.593 128.725 557.353C128.858 557.111 128.924 556.827 128.924 556.5L129.122 556.541H127.515V555.967H129.55V556.541C129.55 556.981 129.456 557.364 129.268 557.689C129.082 558.014 128.825 558.267 128.496 558.446C128.169 558.623 127.793 558.712 127.369 558.712C126.896 558.712 126.48 558.6 126.122 558.378C125.765 558.155 125.487 557.839 125.287 557.428C125.089 557.018 124.99 556.531 124.99 555.967C124.99 555.545 125.046 555.165 125.159 554.827C125.274 554.488 125.436 554.2 125.645 553.961C125.853 553.723 126.1 553.54 126.385 553.414C126.671 553.287 126.985 553.223 127.327 553.223C127.609 553.223 127.872 553.266 128.115 553.351C128.36 553.434 128.578 553.554 128.77 553.708C128.963 553.861 129.124 554.045 129.252 554.259C129.381 554.471 129.47 554.707 129.518 554.966H128.851ZM135.166 555.967C135.166 556.531 135.064 557.018 134.86 557.428C134.657 557.839 134.378 558.155 134.023 558.378C133.668 558.6 133.263 558.712 132.807 558.712C132.352 558.712 131.946 558.6 131.592 558.378C131.237 558.155 130.958 557.839 130.754 557.428C130.551 557.018 130.449 556.531 130.449 555.967C130.449 555.404 130.551 554.917 130.754 554.507C130.958 554.096 131.237 553.78 131.592 553.557C131.946 553.334 132.352 553.223 132.807 553.223C133.263 553.223 133.668 553.334 134.023 553.557C134.378 553.78 134.657 554.096 134.86 554.507C135.064 554.917 135.166 555.404 135.166 555.967ZM134.539 555.967C134.539 555.505 134.462 555.114 134.307 554.796C134.154 554.478 133.946 554.237 133.684 554.074C133.423 553.91 133.131 553.828 132.807 553.828C132.484 553.828 132.191 553.91 131.928 554.074C131.667 554.237 131.46 554.478 131.305 554.796C131.152 555.114 131.075 555.505 131.075 555.967C131.075 556.43 131.152 556.82 131.305 557.139C131.46 557.457 131.667 557.698 131.928 557.861C132.191 558.025 132.484 558.107 132.807 558.107C133.131 558.107 133.423 558.025 133.684 557.861C133.946 557.698 134.154 557.457 134.307 557.139C134.462 556.82 134.539 556.43 134.539 555.967ZM139.175 554.632C139.144 554.367 139.017 554.162 138.794 554.016C138.572 553.87 138.299 553.797 137.975 553.797C137.739 553.797 137.532 553.835 137.354 553.912C137.179 553.988 137.041 554.094 136.942 554.227C136.845 554.361 136.796 554.514 136.796 554.684C136.796 554.827 136.83 554.949 136.898 555.052C136.967 555.153 137.056 555.237 137.164 555.305C137.272 555.371 137.385 555.426 137.503 555.469C137.621 555.511 137.73 555.545 137.829 555.571L138.372 555.717C138.511 555.754 138.666 555.804 138.836 555.868C139.008 555.933 139.172 556.02 139.329 556.132C139.487 556.241 139.618 556.382 139.72 556.554C139.823 556.727 139.874 556.938 139.874 557.188C139.874 557.477 139.799 557.738 139.647 557.971C139.498 558.204 139.279 558.389 138.99 558.526C138.703 558.664 138.354 558.733 137.944 558.733C137.561 558.733 137.23 558.671 136.95 558.547C136.672 558.424 136.452 558.252 136.292 558.031C136.134 557.81 136.045 557.553 136.024 557.261H136.692C136.709 557.463 136.777 557.63 136.895 557.762C137.015 557.893 137.166 557.99 137.349 558.054C137.533 558.117 137.732 558.148 137.944 558.148C138.191 558.148 138.412 558.108 138.609 558.028C138.806 557.947 138.961 557.833 139.076 557.689C139.191 557.543 139.248 557.373 139.248 557.178C139.248 557 139.199 556.856 139.099 556.745C139 556.633 138.87 556.543 138.708 556.473C138.546 556.404 138.372 556.343 138.184 556.291L137.526 556.103C137.109 555.983 136.779 555.812 136.535 555.589C136.292 555.367 136.17 555.075 136.17 554.715C136.17 554.416 136.251 554.155 136.412 553.933C136.576 553.708 136.795 553.534 137.07 553.411C137.346 553.286 137.655 553.223 137.996 553.223C138.34 553.223 138.646 553.285 138.914 553.408C139.182 553.53 139.394 553.697 139.551 553.909C139.709 554.121 139.792 554.362 139.801 554.632H139.175Z"
            fill="#00344D"
          />
          <path
            d="M191.987 452.476L201.84 452.727L204.938 452.373L209.168 450.538L209.596 450.435L209.811 451.404L209.692 450.378L212.849 450.811L218.496 448.873L221.093 449.534L222.857 453.149L227.015 453.001L229.004 452.088L229.469 452.704L227.658 458.747L225.275 460.617L222.678 461.689L220.748 463.399L218.484 468.245L218.341 469.841L219.306 473.045L217.889 477.606L218.711 483.056L222.106 490.023L223.107 494.344L224.096 496.283L224.835 499.03L217.853 500.832L216.852 501.493L214.993 508.95L215.542 513.511L215.065 515.917L215.339 517.775L214.577 519.212H212.42L208.953 516.681L205.963 515.267H203.199L198.099 519.201L195.538 524.902L192.357 526.532L192.714 525.392L192.345 525.244L187.389 525.54L184.863 526.589L183.493 525.802H182.182L178.537 528.083L174.962 519.976L170.923 519.303L166.337 521.584H163.954L163.251 516.704L162.631 515.746L161.511 515.301L159.843 516.567L156.686 517.65L159.474 506.43L159.986 500.399L161.976 490.456L160.939 489.897L157.27 484.356L153.565 481.699L153.243 480.639L153.076 479.636L154.446 478.393L155.376 476.386L156.412 465.816L157.127 465.497L162.25 467.025L165.014 466.17L165.943 465.03L166.098 462.407L167.361 461.757L170.709 457.972L174.283 460.07L178.56 466.409L181.098 465.349L181.872 463.718L184.315 462.396L185.506 460.811L185.84 461.256L188.02 459.534L190.748 458.667L191.046 459.101L192.238 457.573L192.607 456.113L191.987 452.476Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M178.262 490.883C178.262 491.688 178.117 492.384 177.826 492.97C177.536 493.556 177.137 494.009 176.63 494.327C176.123 494.645 175.544 494.804 174.893 494.804C174.242 494.804 173.664 494.645 173.157 494.327C172.65 494.009 172.251 493.556 171.961 492.97C171.67 492.384 171.525 491.688 171.525 490.883C171.525 490.078 171.67 489.383 171.961 488.796C172.251 488.21 172.65 487.758 173.157 487.44C173.664 487.122 174.242 486.963 174.893 486.963C175.544 486.963 176.123 487.122 176.63 487.44C177.137 487.758 177.536 488.21 177.826 488.796C178.117 489.383 178.262 490.078 178.262 490.883ZM177.368 490.883C177.368 490.222 177.257 489.665 177.036 489.21C176.818 488.755 176.521 488.411 176.146 488.178C175.773 487.944 175.356 487.827 174.893 487.827C174.431 487.827 174.013 487.944 173.638 488.178C173.265 488.411 172.968 488.755 172.747 489.21C172.528 489.665 172.419 490.222 172.419 490.883C172.419 491.544 172.528 492.102 172.747 492.556C172.968 493.011 173.265 493.355 173.638 493.589C174.013 493.822 174.431 493.939 174.893 493.939C175.356 493.939 175.773 493.822 176.146 493.589C176.521 493.355 176.818 493.011 177.036 492.556C177.257 492.102 177.368 491.544 177.368 490.883ZM183.99 488.975C183.945 488.597 183.764 488.304 183.446 488.096C183.128 487.887 182.738 487.783 182.276 487.783C181.938 487.783 181.642 487.837 181.389 487.947C181.138 488.056 180.942 488.206 180.8 488.397C180.661 488.589 180.591 488.806 180.591 489.05C180.591 489.253 180.64 489.428 180.737 489.575C180.836 489.719 180.963 489.84 181.117 489.937C181.271 490.031 181.432 490.109 181.601 490.171C181.77 490.231 181.926 490.279 182.067 490.317L182.842 490.525C183.041 490.578 183.262 490.65 183.506 490.742C183.752 490.833 183.986 490.959 184.21 491.118C184.436 491.274 184.622 491.476 184.769 491.722C184.916 491.968 184.989 492.269 184.989 492.627C184.989 493.04 184.881 493.412 184.665 493.745C184.451 494.078 184.138 494.343 183.726 494.539C183.316 494.735 182.818 494.833 182.231 494.833C181.685 494.833 181.211 494.745 180.811 494.569C180.414 494.392 180.101 494.146 179.872 493.831C179.646 493.515 179.518 493.149 179.488 492.732H180.442C180.467 493.02 180.564 493.258 180.733 493.447C180.904 493.633 181.121 493.773 181.381 493.864C181.645 493.954 181.928 493.999 182.231 493.999C182.584 493.999 182.901 493.941 183.181 493.827C183.462 493.71 183.685 493.549 183.849 493.343C184.013 493.134 184.094 492.891 184.094 492.612C184.094 492.359 184.024 492.153 183.882 491.994C183.74 491.835 183.554 491.705 183.323 491.606C183.092 491.507 182.842 491.42 182.574 491.345L181.635 491.077C181.039 490.905 180.567 490.661 180.219 490.343C179.871 490.025 179.697 489.609 179.697 489.094C179.697 488.667 179.813 488.294 180.044 487.976C180.277 487.656 180.59 487.407 180.983 487.231C181.378 487.052 181.819 486.963 182.306 486.963C182.798 486.963 183.235 487.051 183.617 487.227C184 487.401 184.303 487.64 184.527 487.943C184.753 488.246 184.872 488.59 184.885 488.975H183.99ZM191.517 487.067H192.441V492.12C192.441 492.642 192.318 493.108 192.072 493.518C191.829 493.925 191.485 494.247 191.04 494.483C190.595 494.717 190.074 494.833 189.475 494.833C188.876 494.833 188.354 494.717 187.91 494.483C187.465 494.247 187.12 493.925 186.874 493.518C186.63 493.108 186.508 492.642 186.508 492.12V487.067H187.433V492.046C187.433 492.419 187.515 492.75 187.679 493.041C187.843 493.329 188.076 493.556 188.379 493.723C188.685 493.887 189.05 493.969 189.475 493.969C189.9 493.969 190.265 493.887 190.57 493.723C190.876 493.556 191.11 493.329 191.271 493.041C191.435 492.75 191.517 492.419 191.517 492.046V487.067ZM200.339 487.067V494.699H199.445L195.286 488.707H195.211V494.699H194.287V487.067H195.181L199.355 493.074H199.43V487.067H200.339Z"
            fill="#00344D"
          />
          <path
            d="M229.492 452.728L229.981 452.534L230.708 454.438L231.899 454.997L237.236 453.572L238.368 453.994L240.12 456.342L241.311 456.901L244.087 456.639L246.827 457.346L249.151 456.685L250.687 457.312L251.879 454.849L251.533 454.13L252.51 451.599L257.407 450.071L264.269 449.969L262.971 450.448V455.328L263.626 455.841L266.581 454.222L270.953 453.492L273.705 453.8L274.373 454.598L274.039 456.16L272.443 456.89L269.714 460.31L269.619 462.089L271.192 466.365L272.764 467.505H274.289L276.493 469.432L284.619 472.157L282.808 474.893L281.831 475.236L280.044 473.81L277.828 474.255L276.815 476.604L274.218 478.257L271.358 481.085L270.012 483.525L267.975 492.76L265.949 497.23L262.316 502.281L255.715 506.249L253.011 505.576L251.712 502.521L251.903 501.54L250.711 497.903L249.008 495.383L247.161 494.79L238.821 495.143L229.552 494.642L224.131 496.295L223.142 494.357L222.141 490.035L218.746 483.069L217.924 477.619L219.342 473.058L218.377 469.854L218.52 468.258L220.783 463.412L222.713 461.701L225.311 460.63L227.693 458.76L229.492 452.728Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M233.776 479.842V472.21H238.382V473.029H234.7V475.608H238.143V476.428H234.7V479.022H238.442V479.842H233.776ZM240.048 479.842V472.21H240.972V475.996H241.061L244.49 472.21H245.697L242.492 475.653L245.697 479.842H244.579L241.926 476.294L240.972 477.367V479.842H240.048ZM247.818 472.21V479.842H246.894V472.21H247.818ZM249.253 473.029V472.21H254.978V473.029H252.578V479.842H251.653V473.029H249.253ZM257.328 472.21V479.842H256.404V472.21H257.328Z"
            fill="#00344D"
          />
          <path
            d="M360.465 91.4664L366.958 98.9005L373.01 98.7751L376.99 98.0796L375.298 110.417L376.489 117.452L376.406 124.293L377.597 130.188L378.062 135.604L379.623 139.264L379.146 143.334L382.125 149.263L382.947 152.684L382.792 154.599L383.924 157.416L382.625 163.299L380.421 167.609L381.922 168.989L384.936 170.311L388.129 172.922L389.511 174.553L390.107 176.833L387.855 178.68L383.876 177.757L383.221 181.405L377.407 185.966L375.882 184.974L368.006 185.122L366.219 186.08L365.445 190.641L363.586 195.361L363.05 199.649L363.241 200.869L365.516 203.035L366.589 207.242L365.099 214.197V216.854H363.908L361.12 219.568L357.844 221.586L356.831 222.886L354.794 226.774L354.031 230.822L352.232 234.504L348.658 238.039L345.882 239.761L340.271 240.468L330.811 239.818L324.091 240.958L317.813 246.328L314.322 250.844L312.797 251.71L310.795 251.847L310.879 250.889L308.984 246.226L304.457 238.655L300.501 233.638L300.251 227.39L298.607 218.747L296.308 215.326L289.898 212.236V210.868L292.34 203.468V200.675L290.708 198.178L285.49 196.114L279.711 195.407L278.258 196.331L275.291 197.003L270.776 196.433L264.259 197.3L259.91 194.552L256.491 194.426L254.478 190.664L253.191 190.014L248.89 190.755L246.4 190.402L245.316 189.672L244.374 189.843L243.112 190.55L242.135 193.195L234.581 194.86L229.684 192.294H227.564L226.539 192.842L227.325 177.13L227.206 156.367L228.314 151.224L229.41 150.54L240.526 152.444L245.852 152.068L248.997 152.421L254.716 151.692L256.241 152.022L263.52 151.418L266.451 149.48L267.333 146.059L266.558 141.213L264.855 135.923L264.783 132.639L268.441 130.461L270.681 128.329L277.603 118.58L284.858 117.44L296.772 116.539L301.538 114.669L303.146 113.529L303.063 103.906L302.181 98.0568L302.312 97.2586L304.826 95.1835L310.605 93.4047H313.929L317.145 95.0466L317.741 94.7958L318.611 92.6408L319.314 86.3925L325.271 86.6092L327.975 87.3845L330.001 89.6649L332.264 90.4174L343.595 91.8769L352.054 87.3161L355.628 84.3516L360.465 91.4664Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M285.673 166.732V166.062L289.787 159.92H285.628V159.1H290.89V159.771L286.776 165.913H290.935V166.732H285.673ZM292.798 166.732H291.829L294.632 159.1H295.586L298.388 166.732H297.419L295.138 160.308H295.079L292.798 166.732ZM293.156 163.751H297.061V164.571H293.156V163.751ZM299.577 159.1H300.68L303.274 165.436H303.363L305.957 159.1H307.06V166.732H306.195V160.934H306.121L303.736 166.732H302.901L300.516 160.934H300.441V166.732H299.577V159.1ZM308.913 166.732V159.1H313.489V159.92H309.837V162.499H313.147V163.319H309.837V166.732H308.913ZM314.432 166.732H313.463L316.266 159.1H317.22L320.022 166.732H319.053L316.773 160.308H316.713L314.432 166.732ZM314.79 163.751H318.696V164.571H314.79V163.751ZM321.211 166.732V159.1H323.79C324.386 159.1 324.876 159.202 325.258 159.406C325.641 159.607 325.924 159.884 326.108 160.237C326.292 160.59 326.384 160.991 326.384 161.441C326.384 161.89 326.292 162.289 326.108 162.637C325.924 162.985 325.642 163.258 325.262 163.457C324.882 163.653 324.396 163.751 323.805 163.751H321.718V162.916H323.775C324.182 162.916 324.51 162.857 324.759 162.737C325.01 162.618 325.191 162.449 325.303 162.231C325.417 162.01 325.474 161.746 325.474 161.441C325.474 161.135 325.417 160.868 325.303 160.639C325.189 160.411 325.006 160.234 324.755 160.11C324.504 159.983 324.172 159.92 323.76 159.92H322.135V166.732H321.211ZM324.803 163.304L326.682 166.732H325.608L323.76 163.304H324.803ZM328.237 166.732H327.268L330.07 159.1H331.024L333.827 166.732H332.858L330.577 160.308H330.517L328.237 166.732ZM328.594 163.751H332.5V164.571H328.594V163.751Z"
            fill="#00344D"
          />
          <path
            d="M264.962 34.4121L280.307 40.8884L304.767 49.1549L309.532 51.8344L315.061 50.1697H319.409L329.584 54.8673L348.503 72.6088L355.652 84.4897L352.078 87.4542L343.619 92.015L332.288 90.5555L330.025 89.803L327.999 87.5226L325.259 86.6561L319.302 86.4394L318.599 92.6877L317.729 94.8427L317.134 95.0935L313.917 93.4516H310.605L304.826 95.2304L302.313 97.3055L302.181 98.1037L303.111 103.964L303.194 113.588L301.586 114.728L296.82 116.598L284.906 117.498L277.603 118.582L270.657 128.365L268.417 130.497L264.759 132.675L264.831 135.958L266.535 141.249L267.309 146.095L266.427 149.515L263.497 151.454L256.217 152.058L254.692 151.727L248.973 152.457L245.828 152.104L240.502 152.48L229.387 150.576L228.291 151.26L227.183 156.402L227.302 177.165L226.515 192.877L224.585 194.017L223.465 193.937L222.548 191.942L220.165 192.763L217.913 191.782L215.9 191.919L201.603 198.133L198.744 201.554L196.587 203.07L193.275 202.74L192.37 202.158L189.439 197.997L190.821 192.558L193.93 186.138L196.456 174.976L195.515 160.096L195.682 148.763L196.873 144.453L198.398 142.765L203.164 141.42H206.357L210.134 143.7H211.325L212.087 141.922L212.373 132.8L210.372 126.506V124.226L211.921 117.316L212.135 113.531L209.991 108.651L207.775 106.199L208.275 101.98L209.967 98.5597L209.693 95.7777L211.623 91.2967L211.146 89.8714L209.86 88.868L208.477 89.2215L205.511 93.4288L204.76 94.0674L202.592 94.5576L198.97 93.7595L195.455 91.3993L184.078 87.7963L182.815 86.542L179.014 84.4669L177.048 82.0953L176.143 81.7418L170.627 83.5433L168.411 82.6996L160.523 82.8592L160.631 64.1143H165.563L185.293 47.4902L215.221 41.7892L218.092 44.2292L224.895 44.7765L232.58 43.9556L238.358 44.5941L244.708 44.4117L250.963 37.274"
            fill="#64CCFF"
          />
          <path
            d="M264.962 34.4121L280.307 40.8884L304.767 49.1549L309.532 51.8344L315.061 50.1697H319.409L329.584 54.8673L348.503 72.6088L355.652 84.4897L352.078 87.4542L343.619 92.015L332.288 90.5555L330.025 89.803L327.999 87.5226L325.259 86.6561L319.302 86.4394L318.599 92.6877L317.729 94.8427L317.134 95.0935L313.917 93.4516H310.605L304.826 95.2304L302.313 97.3055L302.181 98.1037L303.111 103.964L303.194 113.588L301.586 114.728L296.82 116.598L284.906 117.498L277.603 118.582L270.657 128.365L268.417 130.497L264.759 132.675L264.831 135.958L266.535 141.249L267.309 146.095L266.427 149.515L263.497 151.454L256.217 152.058L254.692 151.727L248.973 152.457L245.828 152.104L240.502 152.48L229.387 150.576L228.291 151.26L227.183 156.402L227.302 177.165L226.515 192.877L224.585 194.017L223.465 193.937L222.548 191.942L220.165 192.763L217.913 191.782L215.9 191.919L201.603 198.133L198.744 201.554L196.587 203.07L193.275 202.74L192.37 202.158L189.439 197.997L190.821 192.558L193.93 186.138L196.456 174.976L195.515 160.096L195.682 148.763L196.873 144.453L198.398 142.765L203.164 141.42H206.357L210.134 143.7H211.325L212.087 141.922L212.373 132.8L210.372 126.506V124.226L211.921 117.316L212.135 113.531L209.991 108.651L207.775 106.199L208.275 101.98L209.967 98.5597L209.693 95.7777L211.623 91.2967L211.146 89.8714L209.86 88.868L208.477 89.2215L205.511 93.4288L204.76 94.0674L202.592 94.5576L198.97 93.7595L195.455 91.3993L184.078 87.7963L182.815 86.542L179.014 84.4669L177.048 82.0953L176.143 81.7418L170.627 83.5433L168.411 82.6996L160.523 82.8592L160.631 64.1143H165.563L185.293 47.4902L215.221 41.7892L218.092 44.2292L224.895 44.7765L232.58 43.9556L238.358 44.5941L244.708 44.4117L250.963 37.274"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M236.475 77.3071C236.43 76.9295 236.249 76.6363 235.931 76.4276C235.613 76.2189 235.223 76.1146 234.761 76.1146C234.423 76.1146 234.127 76.1692 233.874 76.2786C233.623 76.3879 233.427 76.5382 233.285 76.7295C233.146 76.9208 233.076 77.1382 233.076 77.3817C233.076 77.5854 233.125 77.7605 233.222 77.9071C233.321 78.0512 233.448 78.1717 233.602 78.2686C233.756 78.363 233.917 78.4413 234.086 78.5034C234.255 78.563 234.41 78.6114 234.552 78.6487L235.327 78.8574C235.526 78.9096 235.747 78.9816 235.991 79.0735C236.237 79.1655 236.471 79.2909 236.695 79.4499C236.921 79.6065 237.107 79.8077 237.254 80.0537C237.4 80.2996 237.474 80.6015 237.474 80.9592C237.474 81.3716 237.366 81.7443 237.15 82.0772C236.936 82.4101 236.623 82.6747 236.21 82.871C235.8 83.0673 235.302 83.1654 234.716 83.1654C234.169 83.1654 233.696 83.0772 233.296 82.9008C232.899 82.7244 232.586 82.4785 232.357 82.1629C232.131 81.8474 232.003 81.481 231.973 81.0636H232.927C232.952 81.3518 233.049 81.5903 233.218 81.7791C233.389 81.9654 233.605 82.1046 233.866 82.1965C234.13 82.2859 234.413 82.3306 234.716 82.3306C235.069 82.3306 235.386 82.2735 235.666 82.1592C235.947 82.0424 236.169 81.881 236.333 81.6748C236.497 81.4661 236.579 81.2226 236.579 80.9443C236.579 80.6909 236.509 80.4847 236.367 80.3257C236.225 80.1667 236.039 80.0375 235.808 79.9381C235.577 79.8388 235.327 79.7518 235.059 79.6773L234.12 79.4089C233.524 79.2375 233.051 78.9928 232.704 78.6748C232.356 78.3568 232.182 77.9406 232.182 77.4264C232.182 76.999 232.297 76.6264 232.528 76.3084C232.762 75.9879 233.075 75.7394 233.468 75.563C233.863 75.3842 234.304 75.2947 234.791 75.2947C235.282 75.2947 235.72 75.3829 236.102 75.5593C236.485 75.7332 236.788 75.9717 237.012 76.2748C237.238 76.5779 237.357 76.922 237.369 77.3071H236.475ZM245.433 79.2152C245.433 80.0201 245.288 80.7158 244.997 81.3021C244.706 81.8884 244.307 82.3406 243.801 82.6586C243.294 82.9766 242.715 83.1356 242.064 83.1356C241.413 83.1356 240.834 82.9766 240.327 82.6586C239.821 82.3406 239.422 81.8884 239.131 81.3021C238.84 80.7158 238.695 80.0201 238.695 79.2152C238.695 78.4102 238.84 77.7146 239.131 77.1282C239.422 76.5419 239.821 76.0897 240.327 75.7717C240.834 75.4537 241.413 75.2947 242.064 75.2947C242.715 75.2947 243.294 75.4537 243.801 75.7717C244.307 76.0897 244.706 76.5419 244.997 77.1282C245.288 77.7146 245.433 78.4102 245.433 79.2152ZM244.539 79.2152C244.539 78.5543 244.428 77.9965 244.207 77.5419C243.988 77.0872 243.691 76.7432 243.316 76.5096C242.944 76.2761 242.526 76.1593 242.064 76.1593C241.602 76.1593 241.183 76.2761 240.808 76.5096C240.436 76.7432 240.139 77.0872 239.917 77.5419C239.699 77.9965 239.59 78.5543 239.59 79.2152C239.59 79.876 239.699 80.4338 239.917 80.8884C240.139 81.3431 240.436 81.6872 240.808 81.9207C241.183 82.1542 241.602 82.271 242.064 82.271C242.526 82.271 242.944 82.1542 243.316 81.9207C243.691 81.6872 243.988 81.3431 244.207 80.8884C244.428 80.4338 244.539 79.876 244.539 79.2152ZM246.987 83.0312V75.3991H247.911V79.1853H248.001L251.429 75.3991H252.637L249.432 78.8425L252.637 83.0312H251.519L248.865 79.4835L247.911 80.5568V83.0312H246.987ZM259.914 79.2152C259.914 80.0201 259.768 80.7158 259.478 81.3021C259.187 81.8884 258.788 82.3406 258.281 82.6586C257.775 82.9766 257.196 83.1356 256.545 83.1356C255.894 83.1356 255.315 82.9766 254.808 82.6586C254.301 82.3406 253.903 81.8884 253.612 81.3021C253.321 80.7158 253.176 80.0201 253.176 79.2152C253.176 78.4102 253.321 77.7146 253.612 77.1282C253.903 76.5419 254.301 76.0897 254.808 75.7717C255.315 75.4537 255.894 75.2947 256.545 75.2947C257.196 75.2947 257.775 75.4537 258.281 75.7717C258.788 76.0897 259.187 76.5419 259.478 77.1282C259.768 77.7146 259.914 78.4102 259.914 79.2152ZM259.019 79.2152C259.019 78.5543 258.909 77.9965 258.688 77.5419C258.469 77.0872 258.172 76.7432 257.797 76.5096C257.424 76.2761 257.007 76.1593 256.545 76.1593C256.083 76.1593 255.664 76.2761 255.289 76.5096C254.916 76.7432 254.619 77.0872 254.398 77.5419C254.18 77.9965 254.07 78.5543 254.07 79.2152C254.07 79.876 254.18 80.4338 254.398 80.8884C254.619 81.3431 254.916 81.6872 255.289 81.9207C255.664 82.1542 256.083 82.271 256.545 82.271C257.007 82.271 257.424 82.1542 257.797 81.9207C258.172 81.6872 258.469 81.3431 258.688 80.8884C258.909 80.4338 259.019 79.876 259.019 79.2152ZM260.733 76.2189V75.3991H266.457V76.2189H264.057V83.0312H263.133V76.2189H260.733ZM274.005 79.2152C274.005 80.0201 273.86 80.7158 273.569 81.3021C273.278 81.8884 272.88 82.3406 272.373 82.6586C271.866 82.9766 271.287 83.1356 270.636 83.1356C269.985 83.1356 269.406 82.9766 268.9 82.6586C268.393 82.3406 267.994 81.8884 267.703 81.3021C267.413 80.7158 267.267 80.0201 267.267 79.2152C267.267 78.4102 267.413 77.7146 267.703 77.1282C267.994 76.5419 268.393 76.0897 268.9 75.7717C269.406 75.4537 269.985 75.2947 270.636 75.2947C271.287 75.2947 271.866 75.4537 272.373 75.7717C272.88 76.0897 273.278 76.5419 273.569 77.1282C273.86 77.7146 274.005 78.4102 274.005 79.2152ZM273.111 79.2152C273.111 78.5543 273 77.9965 272.779 77.5419C272.56 77.0872 272.264 76.7432 271.888 76.5096C271.516 76.2761 271.098 76.1593 270.636 76.1593C270.174 76.1593 269.756 76.2761 269.38 76.5096C269.008 76.7432 268.711 77.0872 268.49 77.5419C268.271 77.9965 268.162 78.5543 268.162 79.2152C268.162 79.876 268.271 80.4338 268.49 80.8884C268.711 81.3431 269.008 81.6872 269.38 81.9207C269.756 82.1542 270.174 82.271 270.636 82.271C271.098 82.271 271.516 82.1542 271.888 81.9207C272.264 81.6872 272.56 81.3431 272.779 80.8884C273 80.4338 273.111 79.876 273.111 79.2152Z"
            fill="#00344D"
          />
          <path
            d="M160.523 82.8576L168.41 82.698L170.626 83.5417L176.143 81.7402L177.048 82.0937L179.014 84.5109L182.814 86.5861L184.077 87.7947L195.467 91.3521L198.97 93.7579L202.616 94.5333L204.784 94.043L205.534 93.4045L208.501 89.1971L209.883 88.8437L211.17 89.8471L211.646 91.2723L209.692 95.7761L209.8 98.5126L208.108 101.933L207.608 106.152L209.824 108.603L211.968 113.483L211.754 117.269L210.205 124.178V126.459L212.206 132.753L211.92 141.874L211.241 143.664H210.05L206.273 141.384H203.08L198.315 142.73L196.79 144.417L195.598 148.727L195.431 160.061L196.373 174.94L193.847 186.103L190.737 192.522L189.439 197.995L192.477 202.157L193.382 202.738L196.694 203.069L198.732 201.53L201.591 198.109L215.888 191.895L217.901 191.758L220.153 192.739L222.536 191.918L223.453 193.913L224.573 193.993L226.503 192.853L227.528 192.305H229.696L234.593 194.871L242.146 193.206L243.123 190.561L244.386 189.854L245.327 189.683L246.412 190.413L248.902 190.766L253.203 190.025L254.489 190.675L256.503 194.438L259.922 194.563L264.271 197.311L270.788 196.444L275.303 197.014L278.27 196.342L279.723 195.418L285.502 196.125L290.684 198.143L292.364 200.595V203.411L289.922 210.811V212.179L296.331 215.269L298.631 218.69L300.275 227.332L300.525 233.581L298.905 232.326L296.701 231.916L292.626 235.063L291.101 237.571L286.419 238.039L272.003 243.831L259.291 244.618L257.349 243.238L256.92 238.677L257.361 233.193L256.789 231.163L252.321 228.347L251.356 226.91L250.165 219.488L248.151 217.663L244.767 216.854H240.431L228.683 218.667L219.307 220.753L214.029 222.6L208.251 225.554L206.619 227.914L206.809 229.67L207.846 231.106L212.171 233.387L218.604 235.884L224.99 236.488L226.182 238.769H228.219L229.148 239.612L230.482 247.092L230.185 248.312L227.587 249.965L226.837 251.641L227.421 253.295L230.685 255.153L232.079 256.704L231.996 259.064L230.804 260.763L226.277 261.903L220.058 264.913L214.101 264.32L212.254 264.799L211.182 265.654V276.589L210.646 278.151L212.135 281.378L214.291 283.658L216.507 287.079L217.401 289.861L217.067 291.605L214.958 294.034L211.813 295.824L207.786 296.121L198.946 298.971L198.35 305.641L197.683 306.189L192.536 305.664L190.844 304.524V301.924L192.036 298.184L192.381 293.692L188.891 290.659L187.556 287.911L187.771 280.705L189.51 276.988L191.702 274.708L193.466 273.567L198.136 271.926L203.64 266.874L206.535 254.663L206.774 250.045L206.166 249.201L202.723 247.993L200.84 248.107L190.833 241.608L184.59 239.681L181.087 239.76L175.726 240.73L168.351 240.319L153.851 241.243L151.635 240.912L147.477 239.293L134.372 232.361L130.929 231.95L129.868 232.543H128.331L113.832 220.696L118.991 197.448L121.517 192.077L127.343 187.311L126.366 183.594L123.482 181.519L122.803 175.966L126.58 171.588L123.768 161.6L124.233 155.648L125.746 150.745L124.638 132.673L137.529 122.001L146.739 115.159L158.093 98.4898L160.571 87.5096L160.523 82.8576Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M148.662 169.457V161.825H149.587V165.611H149.676L153.105 161.825H154.312L151.107 165.268L154.312 169.457H153.194L150.541 165.909L149.587 166.983V169.457H148.662ZM155.508 169.457V161.825H160.114V162.645H156.433V165.224H159.876V166.043H156.433V168.637H160.174V169.457H155.508ZM161.78 169.457V161.825H164.449C164.98 161.825 165.419 161.917 165.764 162.101C166.109 162.282 166.367 162.527 166.535 162.835C166.704 163.14 166.789 163.479 166.789 163.852C166.789 164.18 166.731 164.451 166.614 164.665C166.499 164.878 166.348 165.047 166.159 165.171C165.973 165.296 165.77 165.388 165.552 165.447V165.522C165.785 165.537 166.02 165.619 166.256 165.768C166.492 165.917 166.69 166.13 166.849 166.409C167.008 166.687 167.087 167.027 167.087 167.43C167.087 167.812 167 168.156 166.826 168.462C166.652 168.768 166.378 169.01 166.003 169.189C165.627 169.368 165.139 169.457 164.538 169.457H161.78ZM162.705 168.637H164.538C165.142 168.637 165.57 168.52 165.824 168.287C166.08 168.051 166.208 167.765 166.208 167.43C166.208 167.171 166.142 166.933 166.01 166.714C165.878 166.493 165.691 166.317 165.447 166.185C165.204 166.051 164.916 165.984 164.583 165.984H162.705V168.637ZM162.705 165.179H164.419C164.697 165.179 164.948 165.124 165.172 165.015C165.398 164.906 165.577 164.752 165.708 164.553C165.842 164.354 165.909 164.12 165.909 163.852C165.909 163.517 165.793 163.232 165.559 162.999C165.326 162.763 164.955 162.645 164.449 162.645H162.705V165.179ZM168.606 169.457V161.825H171.274C171.806 161.825 172.244 161.917 172.589 162.101C172.935 162.282 173.192 162.527 173.361 162.835C173.53 163.14 173.614 163.479 173.614 163.852C173.614 164.18 173.556 164.451 173.439 164.665C173.325 164.878 173.173 165.047 172.984 165.171C172.798 165.296 172.596 165.388 172.377 165.447V165.522C172.611 165.537 172.845 165.619 173.081 165.768C173.317 165.917 173.515 166.13 173.674 166.409C173.833 166.687 173.912 167.027 173.912 167.43C173.912 167.812 173.825 168.156 173.652 168.462C173.478 168.768 173.203 169.01 172.828 169.189C172.453 169.368 171.965 169.457 171.363 169.457H168.606ZM169.53 168.637H171.363C171.967 168.637 172.396 168.52 172.649 168.287C172.905 168.051 173.033 167.765 173.033 167.43C173.033 167.171 172.967 166.933 172.835 166.714C172.704 166.493 172.516 166.317 172.273 166.185C172.029 166.051 171.741 165.984 171.408 165.984H169.53V168.637ZM169.53 165.179H171.244C171.522 165.179 171.773 165.124 171.997 165.015C172.223 164.906 172.402 164.752 172.534 164.553C172.668 164.354 172.735 164.12 172.735 163.852C172.735 163.517 172.618 163.232 172.384 162.999C172.151 162.763 171.781 162.645 171.274 162.645H169.53V165.179ZM176.355 161.825V169.457H175.431V161.825H176.355Z"
            fill="#00344D"
          />
          <path
            d="M418.426 361.922L420.022 360.782L420.916 360.907L421.631 363.051L422.465 363.952L424.252 363.256L425.36 363.416L428.267 365.457L429.863 365.172L431.948 366.38H433.259L436.011 363.986L437.131 361.09L439.097 358.673L440.288 358.273L441.599 358.718L445.09 361.762L445.471 365.468L450.499 368.25L451.69 370.086L451.63 381.146L452.107 382.639L453.703 383.78L455.074 383.54L457.873 381.716L462.83 376.3L463.89 374.134L465.427 372.993L467.011 373.244L468.799 374.67L473.338 374.943L479.7 381.682L480.415 383.848L483.357 383.996L485.276 383.517L486.253 382.697L490.196 376.539L493.353 370.143L494.652 369.493L496.665 371.374L499.549 371.5L502.027 372.469L502.777 377.577L505.077 381.465L507.65 382.605L513.989 383.244H518.397L521.697 381.705L522.888 382.343L525.271 384.863L524.33 388.204L521.113 392.764L518.599 395.045L516.919 395.273L515.18 396.413L513.5 399.651L511.653 401.202L511.272 403.767L512.035 405.729L514.525 408.499L514.906 409.913L514.548 416.082L516.264 418.442L522.4 421.532L526.76 423.014L536.518 422.843L548.146 419.662L560.489 424.599L563.491 426.959L565.231 430.015L562.157 434.211L558.893 435.146L553.519 434.063L553.126 433.595L551.315 433.857L550.124 432.637L548.063 431.611H545.787L544.262 432.592L542.678 435.032L541.808 438.293L543.845 439.843L546.228 442.705L546.645 445.989L546.002 446.73L547.193 449.786L547.062 451.143L533.754 459.364L532.312 460.948L518.266 450.766V451.565L513.5 451.815L507.686 451.348L499.513 449.581L487.492 445.339L484.299 444.837L481.213 445.043L479.569 445.362L474.863 447.87L473.385 449.478L472.194 452.739L472.289 455.612L477.889 468.884L477.782 470.435L476.424 471.689L470.073 469.146L466.118 465.954L464.843 466.114L458.588 464.973L452.738 461.781L442.361 457.733L432.222 456.308L421.345 453.48L412.171 452.83L407.906 452.055L399.483 452.853L384.709 456.695L373.677 461.336L368.601 464.7L367.779 464.061L367.982 459.797L368.995 457.38L370.913 455.475V450.128L372.307 444.758L371.663 437.723L369.054 434.69L368.077 432.763V431.782L369.936 428.715L370.651 425.705L383.911 423.709L387.378 422.341L392.894 421.133L401.234 416.982L405.737 411.715L406.929 409.845L408.216 405.968L409.157 405.558L410.968 396.493L413.351 390.484L414.006 382.503L413.422 380.028L413.517 373.621L416.031 366.186L416.663 365.491L417.854 365.411L418.354 364.704L418.426 361.922Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M430.609 417.286V424.918H429.715L425.556 418.926H425.481V424.918H424.557V417.286H425.451L429.625 423.293H429.7V417.286H430.609ZM432.771 424.918H431.803L434.605 417.286H435.559L438.361 424.918H437.393L435.112 418.493H435.052L432.771 424.918ZM433.129 421.937H437.035V422.757H433.129V421.937ZM443.724 419.194C443.679 418.816 443.498 418.523 443.18 418.314C442.862 418.106 442.472 418.001 442.01 418.001C441.672 418.001 441.376 418.056 441.123 418.165C440.872 418.275 440.676 418.425 440.534 418.616C440.395 418.808 440.325 419.025 440.325 419.268C440.325 419.472 440.374 419.647 440.471 419.794C440.57 419.938 440.697 420.058 440.851 420.155C441.005 420.25 441.166 420.328 441.335 420.39C441.504 420.45 441.66 420.498 441.801 420.535L442.576 420.744C442.775 420.796 442.996 420.868 443.24 420.96C443.486 421.052 443.72 421.178 443.944 421.337C444.17 421.493 444.356 421.694 444.503 421.94C444.65 422.186 444.723 422.488 444.723 422.846C444.723 423.258 444.615 423.631 444.399 423.964C444.185 424.297 443.872 424.561 443.46 424.758C443.05 424.954 442.551 425.052 441.965 425.052C441.419 425.052 440.945 424.964 440.545 424.788C440.148 424.611 439.835 424.365 439.606 424.05C439.38 423.734 439.252 423.368 439.222 422.95H440.176C440.201 423.238 440.298 423.477 440.467 423.666C440.638 423.852 440.855 423.991 441.115 424.083C441.379 424.173 441.662 424.217 441.965 424.217C442.318 424.217 442.635 424.16 442.915 424.046C443.196 423.929 443.419 423.768 443.582 423.561C443.746 423.353 443.828 423.109 443.828 422.831C443.828 422.578 443.758 422.371 443.616 422.212C443.474 422.053 443.288 421.924 443.057 421.825C442.826 421.725 442.576 421.639 442.308 421.564L441.369 421.296C440.773 421.124 440.301 420.88 439.953 420.562C439.605 420.244 439.431 419.827 439.431 419.313C439.431 418.886 439.547 418.513 439.778 418.195C440.011 417.875 440.324 417.626 440.717 417.45C441.112 417.271 441.553 417.181 442.04 417.181C442.532 417.181 442.969 417.27 443.351 417.446C443.734 417.62 444.037 417.858 444.261 418.162C444.487 418.465 444.606 418.809 444.618 419.194H443.724ZM446.555 424.918H445.586L448.389 417.286H449.343L452.145 424.918H451.176L448.896 418.493H448.836L446.555 424.918ZM446.913 421.937H450.819V422.757H446.913V421.937ZM453.334 424.918V417.286H455.913C456.509 417.286 456.999 417.388 457.381 417.591C457.764 417.793 458.047 418.07 458.231 418.422C458.415 418.775 458.507 419.176 458.507 419.626C458.507 420.076 458.415 420.475 458.231 420.822C458.047 421.17 457.765 421.443 457.385 421.642C457.005 421.839 456.519 421.937 455.928 421.937H453.841V421.102H455.898C456.306 421.102 456.634 421.042 456.882 420.923C457.133 420.804 457.314 420.635 457.426 420.416C457.54 420.195 457.597 419.932 457.597 419.626C457.597 419.321 457.54 419.053 457.426 418.825C457.312 418.596 457.129 418.42 456.878 418.296C456.627 418.169 456.296 418.106 455.883 418.106H454.258V424.918H453.334ZM456.927 421.489L458.805 424.918H457.732L455.883 421.489H456.927ZM460.36 424.918H459.391L462.193 417.286H463.147L465.95 424.918H464.981L462.7 418.493H462.641L460.36 424.918ZM460.718 421.937H464.623V422.757H460.718V421.937ZM467.931 424.918L465.844 417.286H466.783L468.378 423.502H468.452L470.077 417.286H471.121L472.745 423.502H472.82L474.415 417.286H475.354L473.267 424.918H472.313L470.629 418.836H470.569L468.885 424.918H467.931ZM476.224 424.918H475.255L478.058 417.286H479.012L481.814 424.918H480.845L478.565 418.493H478.505L476.224 424.918ZM476.582 421.937H480.487V422.757H476.582V421.937Z"
            fill="#00344D"
          />
          <path
            d="M638.479 133.939L647.7 140.997L649.059 144.338L649.976 152.411L649.75 154.474L653.515 159.788L653.765 167.473L654.158 170.551L655.349 173.641L655.588 178.054L665.536 201.895L665.262 207.505L664.011 210.606L662.819 218.337L664.761 220.082L668.336 220.503L667.382 220.777L664.154 225.064L657.005 228.804L653.943 233.023L651.561 235.018L649.785 235.885L645.127 236.888L643.364 238.439L641.72 240.719L640.528 246.352L637.407 254.858L633.106 260.638L632.867 262.212L641.66 265.633L643.018 267.582L644.055 275.735L645.103 277.046L653.681 280.033L656.159 285.666L655.588 295.506L656.064 298.767L655.075 300.773L650.429 301.492L648.046 302.541L646.485 304.719L646.878 306.566L651.989 311.56L654.968 313.167L665.869 321.251L667.335 325.573L668.062 332.631L671.135 338.651L673.149 341.068L672.994 342.151L672.303 342.334H667.537L659.865 341.091L647.307 346.621L640.338 345.732L634.869 348.753L627.292 344.842L619.929 340.281L606.74 334.877L595.708 329.164L592.646 328.583L583.591 324.079L580.017 326.109L579.659 327.751L583.436 332.38L583.758 334.364L583.162 336.268L577.491 337.75L574.048 343.691L568.818 345.298L556.903 345.971L550.303 344.34L544.584 344.033L542.785 343.428L540.903 341.843L538.937 337.203L537.865 335.88L536.924 335.071L532.253 333.452L531.538 332.482L531.646 330.555L534.481 325.459L534.755 324.125L534.445 317.352L533.254 313.783L531.11 311.594L529.847 311.355L516.741 313.852V299.736L515.812 294.263L512.702 289.52L509.39 288.516L505.602 288.425L503.779 288.984L500.764 285.894L497.583 283.91L497.262 283.078L500.062 278.289L500.693 273.728L501.884 273.089L504.97 268.426L506.555 264.036L506.459 261.756L505.542 259.852L500.943 254.915L500.407 252.634L499.93 244.778L500.467 240.788L502.373 235.577L503.564 235.087L506.781 235.269L509.164 234.687L512.428 231.027L515.586 226.341L521.233 221.587L522.031 220.332L524.986 218.542L526.999 218.2L528.357 219.42L529.716 219.523L536.292 217.049L537.484 216.832L544.632 218.086L553.484 220.834L557.475 219.169L560.216 220.002L562.336 224.186L566.065 224.426L575.239 223.878L579.493 222.841L580.851 223.183L584.032 228.77L584.675 231.221L583.686 240.172L584.651 242.452L586.26 244.003L593.051 245.36L599.723 243.775L601.581 243.969L603.797 245.519L606.728 246.226L608.944 245.576L607.681 241.723V239.67L609.504 237.492L612.518 235.942L617.284 234.802L618.999 233.912L621.204 232.327L622.514 229.226L621.323 227.561L610.755 226.923L604.047 225.532L596.434 224.654L592.86 222.544L586.546 214.084L585.354 211.234L584.794 208.303L580.219 209.375L578.813 208.109L578.158 206.125L581.149 200.424L580.529 195.499L578.682 190.414L576.526 189.843L573.25 190.151L570.724 191.292H567.614L566.006 190.573L566.59 185.716L570.426 180.539L577.765 180.015L584.282 176.594L597.316 172.341L604.738 169.479L606.156 168.408V165.842L605.477 163.699L613.471 140.222L618.88 137.942L623.026 137.314L624.218 138.249L625.207 140.119L625.35 141.704L638.479 133.939Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M557.696 287.605V279.973H560.364C560.896 279.973 561.334 280.065 561.679 280.249C562.025 280.43 562.282 280.675 562.451 280.983C562.62 281.289 562.704 281.628 562.704 282.001C562.704 282.329 562.646 282.599 562.529 282.813C562.415 283.027 562.263 283.196 562.075 283.32C561.888 283.444 561.686 283.536 561.467 283.596V283.67C561.701 283.685 561.935 283.767 562.171 283.916C562.407 284.065 562.605 284.279 562.764 284.557C562.923 284.835 563.002 285.176 563.002 285.578C563.002 285.961 562.915 286.305 562.742 286.61C562.568 286.916 562.293 287.158 561.918 287.337C561.543 287.516 561.055 287.605 560.453 287.605H557.696ZM558.62 286.786H560.453C561.057 286.786 561.486 286.669 561.739 286.435C561.995 286.199 562.123 285.914 562.123 285.578C562.123 285.32 562.057 285.081 561.925 284.863C561.794 284.642 561.606 284.465 561.363 284.333C561.119 284.199 560.831 284.132 560.498 284.132H558.62V286.786ZM558.62 283.327H560.334C560.612 283.327 560.863 283.273 561.087 283.163C561.313 283.054 561.492 282.9 561.624 282.701C561.758 282.502 561.825 282.269 561.825 282.001C561.825 281.665 561.708 281.381 561.475 281.147C561.241 280.911 560.871 280.793 560.364 280.793H558.62V283.327ZM564.834 287.605H563.865L566.668 279.973H567.622L570.424 287.605H569.455L567.174 281.181H567.115L564.834 287.605ZM565.192 284.624H569.097V285.444H565.192V284.624ZM576.621 279.973H577.546V285.027C577.546 285.548 577.423 286.014 577.177 286.424C576.933 286.832 576.589 287.153 576.144 287.389C575.7 287.623 575.178 287.74 574.579 287.74C573.981 287.74 573.459 287.623 573.014 287.389C572.569 287.153 572.224 286.832 571.978 286.424C571.735 286.014 571.613 285.548 571.613 285.027V279.973H572.537V284.952C572.537 285.325 572.619 285.656 572.783 285.947C572.947 286.235 573.181 286.463 573.484 286.629C573.789 286.793 574.154 286.875 574.579 286.875C575.004 286.875 575.369 286.793 575.675 286.629C575.98 286.463 576.214 286.235 576.376 285.947C576.539 285.656 576.621 285.325 576.621 284.952V279.973ZM585.533 282.358H584.609C584.554 282.093 584.458 281.859 584.322 281.658C584.188 281.456 584.024 281.288 583.83 281.151C583.638 281.012 583.426 280.907 583.192 280.838C582.959 280.768 582.715 280.734 582.462 280.734C582 280.734 581.581 280.85 581.206 281.084C580.834 281.317 580.537 281.661 580.316 282.116C580.097 282.571 579.988 283.129 579.988 283.789C579.988 284.45 580.097 285.008 580.316 285.463C580.537 285.917 580.834 286.261 581.206 286.495C581.581 286.728 582 286.845 582.462 286.845C582.715 286.845 582.959 286.81 583.192 286.741C583.426 286.671 583.638 286.568 583.83 286.432C584.024 286.292 584.188 286.122 584.322 285.921C584.458 285.717 584.554 285.484 584.609 285.22H585.533C585.463 285.61 585.337 285.96 585.153 286.268C584.969 286.576 584.74 286.838 584.467 287.054C584.194 287.268 583.887 287.43 583.547 287.542C583.209 287.654 582.847 287.71 582.462 287.71C581.811 287.71 581.232 287.551 580.725 287.233C580.219 286.915 579.82 286.463 579.529 285.876C579.239 285.29 579.093 284.594 579.093 283.789C579.093 282.984 579.239 282.289 579.529 281.702C579.82 281.116 580.219 280.664 580.725 280.346C581.232 280.028 581.811 279.869 582.462 279.869C582.847 279.869 583.209 279.925 583.547 280.037C583.887 280.148 584.194 280.312 584.467 280.529C584.74 280.742 584.969 281.003 585.153 281.311C585.337 281.617 585.463 281.966 585.533 282.358ZM587.026 287.605V279.973H587.95V283.372H592.02V279.973H592.944V287.605H592.02V284.192H587.95V287.605H587.026ZM595.719 279.973V287.605H594.794V279.973H595.719Z"
            fill="#00344D"
          />
          <path
            d="M429.519 215.896H433.2L436.107 215.132L441.087 210.765L446.782 207.515H448.748L453.609 206.102L455.122 206.375L456.468 207.31L456.85 208.735L454.336 213.296L454.967 216.227L456.159 217.572L460.364 219.659L464.832 221.061L469.014 225.77L470.837 226.397H474.149L477.068 227.07L483.478 232.121L487.767 239.441L488.219 243.865L487.028 246.647L485.837 252.245L487.266 259.144L487.028 261.116L486.17 262.37L481.941 263.511L481.285 264.411L482 266.783L483.239 267.946L491.579 269.086L493.962 272.222L495.868 273.419L499.442 274.149L500.693 273.818L500.062 278.379L497.262 283.168L497.584 284L500.908 285.995L503.922 289.085L503.481 289.416L503.231 292.723L502.576 294.353L501.003 296.132L498.394 296.964L496.13 298.56L493.593 304.261L493.33 307.351L494.951 310.567L495.844 314.58L492.997 316.861L492.592 318.115L492.806 320.395L491.972 329.3L492.604 331.695L492.056 332.709L489.78 334.477L489.304 337.988L487.29 339.448L487.54 344.852L486.289 346.449L486.408 347.771L490.292 353.792L493.354 357.303L495.392 358.683L496.583 361.066L496.726 364.954L494.701 369.424L493.402 370.074L490.245 376.47L486.301 382.627L485.324 383.448L483.406 383.927L480.463 383.779L479.748 381.612L473.386 374.874L468.847 374.6L467.06 373.175L465.475 372.924L463.938 374.064L462.878 376.231L457.922 381.647L455.122 383.471L453.752 383.71L452.156 382.57L451.679 381.077L451.739 370.017L450.547 368.181L445.519 365.399L445.138 361.693L441.647 358.649L440.337 358.204L439.145 358.603L437.18 361.02L436.06 363.917L433.307 366.311H431.997L429.912 365.102L428.315 365.387L425.337 363.392L424.229 363.232L422.442 363.928L421.608 363.027L420.893 360.884L419.999 360.758L418.403 361.898L416.997 362.799L415.877 362.446L414.126 358.9L412.851 358.409L411.588 359.025L409.432 362.446L408.085 363.415L406.275 362.446L402.462 362.081L395.171 362.799L393.705 362.32L390.774 363.004L392.418 358.295L388.403 355.194L388.511 352.549L389.178 351.488L392.097 350.04L393.038 349.048L393.753 345.867L397.434 342.253L396.743 340.109L393.169 338.262L394.158 334.842L389.845 333.291L388.499 332.413L388.296 331.375L388.642 330.646L389.69 330.167L393.538 329.699L394.289 327.977L394.17 324.454L393.074 320.03L392.883 314.261L392.49 313.121L390.858 312.357L375.524 312.448L367.578 309.609L365.54 307.716L364.349 305.436L365.433 304.022L368.019 302.471L369.949 300.556L370.961 298.868L376.013 295.904L377.204 293.863L377.574 291.582L373.713 289.61L367.959 287.717L369.567 282.997L369.627 280.066L367.244 275.734L365.326 275.232L362.645 275.996L360.989 275.836L360.656 270.705L360.084 268.516L359.357 267.935L353.722 267.364L352.316 268.733L353.114 271.458L352.352 272.598L347.586 271.959L338.495 275.22L337.304 272.188L336.113 271.047L332.646 271.196L330.144 271.891L327.213 273.601L320.553 278.732L314.143 286.714L312.463 287.728L310.76 287.044L309.306 283.031L305.672 280.75L305.41 279.188L305.803 276.555L307.996 274.502L307.71 270.158L308.591 267.878L308.424 266.19L306.697 263.385L307.173 257.924L310.748 251.789L312.749 251.653L314.274 250.786L317.682 246.043L323.96 240.672L330.68 239.532L340.14 240.182L345.751 239.475L348.527 237.754L352.101 234.219L353.9 230.536L354.663 226.488L356.7 222.6L357.713 221.3L360.989 219.282L363.777 216.569H364.968L370.223 217.572L372.534 217.367L374.154 218.393L375.095 220.377L374.821 221.597L371.378 224.664L370.914 226.169L378.479 228.37L383.638 233.398L385.723 233.66L388.928 231.927L390.572 229.749L388.403 225.918L388.26 223.638L392.371 222.395L394.694 222.52L397.994 223.775L399.662 223.672L400.353 223.056V221.426L401.783 218.005L405.429 215.052L407.085 214.733L415.162 217.344L417.545 219.316L418.737 221.118L420.607 222.007L427.303 219.453L428.304 217.116L429.519 215.896Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M405.877 287.021V279.389H406.802V283.176H406.891L410.319 279.389H411.527L408.322 282.833L411.527 287.021H410.409L407.756 283.474L406.802 284.547V287.021H405.877ZM413.036 287.021H412.067L414.87 279.389H415.824L418.626 287.021H417.657L415.377 280.597H415.317L413.036 287.021ZM413.394 284.04H417.3V284.86H413.394V284.04ZM422.17 287.021H419.815V279.389H422.275C423.015 279.389 423.648 279.542 424.175 279.848C424.702 280.151 425.106 280.587 425.386 281.156C425.667 281.722 425.807 282.4 425.807 283.19C425.807 283.986 425.666 284.67 425.383 285.244C425.099 285.815 424.687 286.255 424.145 286.563C423.604 286.869 422.945 287.021 422.17 287.021ZM420.739 286.202H422.111C422.742 286.202 423.265 286.08 423.68 285.836C424.094 285.593 424.404 285.246 424.607 284.797C424.811 284.347 424.913 283.812 424.913 283.19C424.913 282.574 424.812 282.044 424.611 281.599C424.41 281.152 424.109 280.809 423.709 280.571C423.309 280.33 422.811 280.209 422.215 280.209H420.739V286.202ZM432.366 279.389H433.291V284.443C433.291 284.964 433.168 285.43 432.922 285.84C432.678 286.248 432.334 286.569 431.889 286.805C431.445 287.039 430.923 287.156 430.324 287.156C429.725 287.156 429.204 287.039 428.759 286.805C428.314 286.569 427.969 286.248 427.723 285.84C427.479 285.43 427.358 284.964 427.358 284.443V279.389H428.282V284.368C428.282 284.741 428.364 285.072 428.528 285.363C428.692 285.651 428.925 285.879 429.229 286.045C429.534 286.209 429.899 286.291 430.324 286.291C430.749 286.291 431.114 286.209 431.42 286.045C431.725 285.879 431.959 285.651 432.12 285.363C432.284 285.072 432.366 284.741 432.366 284.368V279.389ZM441.188 279.389V287.021H440.294L436.135 281.029H436.06V287.021H435.136V279.389H436.031L440.204 285.397H440.279V279.389H441.188ZM443.351 287.021H442.382L445.184 279.389H446.138L448.941 287.021H447.972L445.691 280.597H445.631L443.351 287.021ZM443.708 284.04H447.614V284.86H443.708V284.04Z"
            fill="#00344D"
          />
          <path
            d="M466.88 129.117L471.062 136.277L471.181 138.558L472.456 139.835L474.684 135.719L475.423 132.754L477.484 131.215L482.249 129.014L486.741 128.615L496.01 130.896L496.546 137.646L497.892 139.219L502.432 141.636L503.742 145.148L503.063 147.429L504.255 149.013L505.243 149.492L511.725 150.131L513.929 150.769L515.025 151.693L515.978 155.045L515.883 161.442L514.489 163.049L513.857 165.01L515.823 165.831V166.972L518.087 165.615L521.84 165.33L522.519 166.972V169.89L524.151 170.176L526.319 169.97L529.083 168.351L530.835 166.356L532.324 165.752L535.04 173.938L535.267 176.743L534.004 178.841L533.778 181.121L529.774 186.469L529.179 188.852L529.417 191.132L535.446 190.961L536.744 192.102L537.34 194.382L539.103 197.517L542.475 200.528L544.965 201.132L546.025 202.443L537.542 210.288L536.256 214.529L536.351 217.083L529.774 219.558L528.416 219.455L527.058 218.235L525.045 218.577L522.09 220.367L521.292 221.621L515.644 226.376L512.487 231.062L509.223 234.722L506.84 235.304L503.623 235.121L502.432 235.612L500.525 240.822L499.989 244.813L500.466 252.669L501.002 254.949L505.601 259.886L506.518 261.791L506.614 264.071L505.029 268.461L501.943 273.124L500.752 273.763L499.501 274.093L495.927 273.364L494.02 272.166L491.638 269.031L483.298 267.891L482.035 266.671L481.32 264.299L481.975 263.398L486.205 262.258L487.063 261.004L487.301 259.031L485.871 252.133L487.063 246.535L488.254 243.753L487.766 239.443L483.488 232.123L477.079 227.071L474.16 226.399H470.848L469.025 225.772L464.843 221.063L460.375 219.66L456.17 217.574L454.978 216.228L454.347 213.298L456.861 208.737L456.479 207.312L455.121 206.377L453.668 206.16L448.771 207.517H446.781L441.062 210.755L436.059 215.156L433.152 215.92H429.47L425.181 212.865L423.859 210.288L422.953 206.149L424.764 203.104L424.847 200.585L427.016 198.726L431.484 197.586L434.403 195.648L437.631 195.568L438.823 194.906L435.082 186.013L435.88 181.384L433.39 176.162L434.414 168.944L433.58 154.897L433.902 151.602L436.499 149.002L441.563 146.3L450.665 143.586L455.05 141.385L455.979 140.416L457.325 135.411L459.875 130.155L461.4 129.562L466.88 129.117Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M466.934 190.004V182.372H467.858V186.158H467.948L471.376 182.372H472.584L469.379 185.815L472.584 190.004H471.466L468.812 186.456L467.858 187.529V190.004H466.934ZM474.093 190.004H473.124L475.926 182.372H476.88L479.683 190.004H478.714L476.433 183.579H476.374L474.093 190.004ZM474.451 187.023H478.356V187.842H474.451V187.023ZM486.924 182.372V190.004H486.029L481.87 184.011H481.796V190.004H480.872V182.372H481.766L485.94 188.379H486.014V182.372H486.924ZM495.213 186.188C495.213 186.993 495.067 187.688 494.777 188.275C494.486 188.861 494.087 189.313 493.58 189.631C493.074 189.949 492.495 190.108 491.844 190.108C491.193 190.108 490.614 189.949 490.107 189.631C489.6 189.313 489.202 188.861 488.911 188.275C488.62 187.688 488.475 186.993 488.475 186.188C488.475 185.383 488.62 184.687 488.911 184.101C489.202 183.515 489.6 183.062 490.107 182.744C490.614 182.426 491.193 182.267 491.844 182.267C492.495 182.267 493.074 182.426 493.58 182.744C494.087 183.062 494.486 183.515 494.777 184.101C495.067 184.687 495.213 185.383 495.213 186.188ZM494.318 186.188C494.318 185.527 494.208 184.969 493.987 184.515C493.768 184.06 493.471 183.716 493.096 183.482C492.723 183.249 492.306 183.132 491.844 183.132C491.382 183.132 490.963 183.249 490.588 183.482C490.215 183.716 489.918 184.06 489.697 184.515C489.479 184.969 489.369 185.527 489.369 186.188C489.369 186.849 489.479 187.406 489.697 187.861C489.918 188.316 490.215 188.66 490.588 188.893C490.963 189.127 491.382 189.244 491.844 189.244C492.306 189.244 492.723 189.127 493.096 188.893C493.471 188.66 493.768 188.316 493.987 187.861C494.208 187.406 494.318 186.849 494.318 186.188Z"
            fill="#00344D"
          />
          <path
            d="M436.797 74.2152L447.711 75.7545L453.93 77.328L458.195 79.5399L461.674 82.3904L464.926 83.2228L476.709 94.2143L480.629 93.2109L484.108 93.6442L487.682 95.4115L490.411 97.4069L492.615 99.8127L493.806 102.595L497.38 104.157L503.647 105.605L518.075 110.074V111.055L515.692 112.058L515.001 112.914L513.81 115.912L509.926 118.854L504.981 120.861L500.597 121.488L498.822 120.69L498.059 118.911L494.938 120.633L492.555 120.04L489.386 118.136L488.576 117.064L486.908 111.739L485.514 110.337L474.529 111.226L468.131 110.086L455.753 111.659L455.205 112.001V115.069L454.311 118.945L454.394 123.335L455.097 124.156L458.505 125.216L464.39 125.353L465.379 126.151L466.857 129.139L461.34 129.549L459.815 130.142L457.266 135.398L455.919 140.404L454.99 141.373L450.606 143.574L441.503 146.287L436.44 148.99L433.843 151.589L433.521 154.884L434.355 168.932L433.33 176.149L435.82 181.371L435.022 186L438.763 194.894L437.572 195.555L434.343 195.635L431.424 197.573L426.956 198.714L424.788 200.572L424.705 203.092L422.953 206.148L423.883 210.264L425.205 212.841L429.494 215.896L428.303 217.151L427.302 219.488L420.606 222.042L418.736 221.153L417.544 219.351L415.161 217.379L407.084 214.768L405.428 215.087L401.782 218.04L400.352 221.461V223.045L399.661 223.661L397.993 223.764L394.693 222.51L392.37 222.384L388.26 223.627L388.403 225.907L390.559 229.738L388.915 231.916L385.71 233.649L383.637 233.398L378.573 228.507L371.008 226.306L371.473 224.801L374.916 221.734L375.19 220.514L374.249 218.53L372.628 217.504L370.317 217.709L365.063 216.706V214.049L366.552 207.094L365.48 202.887L363.204 200.72L363.014 199.5L363.55 195.213L365.408 190.493L366.183 185.932L367.97 184.974L375.845 184.826L377.37 185.818L383.184 181.257L383.839 177.609L387.819 178.532L390.07 176.685L389.475 174.405L388.093 172.774L384.9 170.163L381.886 168.84L380.42 167.609L382.588 163.47L383.887 157.587L382.755 154.77L382.91 152.855L382.088 149.434L379.11 143.505L379.586 139.435L378.025 135.683L377.561 130.267L376.369 124.373L376.453 117.531L375.261 110.496L376.989 98.0568L382.779 96.2667L389.07 90.1552L399.435 91.0446L403.7 90.2008L431.579 74.1126L433.104 73.7363L436.797 74.2152Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M391.709 130.244V122.612H392.634V126.398H392.723L396.152 122.612H397.359L394.154 126.055L397.359 130.244H396.241L393.588 126.696L392.634 127.77V130.244H391.709ZM398.868 130.244H397.899L400.702 122.612H401.656L404.458 130.244H403.489L401.209 123.819H401.149L398.868 130.244ZM399.226 127.263H403.132V128.083H399.226V127.263ZM404.338 123.432V122.612H410.062V123.432H407.662V130.244H406.738V123.432H404.338ZM415.662 124.52C415.618 124.142 415.436 123.849 415.118 123.641C414.8 123.432 414.41 123.327 413.948 123.327C413.61 123.327 413.315 123.382 413.061 123.491C412.81 123.601 412.614 123.751 412.472 123.942C412.333 124.134 412.264 124.351 412.264 124.595C412.264 124.798 412.312 124.973 412.409 125.12C412.508 125.264 412.635 125.385 412.789 125.481C412.943 125.576 413.105 125.654 413.274 125.716C413.443 125.776 413.598 125.824 413.739 125.862L414.515 126.07C414.713 126.122 414.934 126.195 415.178 126.286C415.424 126.378 415.659 126.504 415.882 126.663C416.108 126.819 416.295 127.021 416.441 127.267C416.588 127.513 416.661 127.814 416.661 128.172C416.661 128.585 416.553 128.957 416.337 129.29C416.123 129.623 415.81 129.888 415.398 130.084C414.988 130.28 414.49 130.378 413.903 130.378C413.357 130.378 412.884 130.29 412.484 130.114C412.086 129.937 411.773 129.691 411.544 129.376C411.318 129.06 411.19 128.694 411.161 128.276H412.115C412.139 128.565 412.236 128.803 412.405 128.992C412.577 129.178 412.793 129.317 413.054 129.409C413.317 129.499 413.6 129.544 413.903 129.544C414.256 129.544 414.573 129.486 414.854 129.372C415.134 129.255 415.357 129.094 415.521 128.888C415.685 128.679 415.767 128.435 415.767 128.157C415.767 127.904 415.696 127.698 415.554 127.539C415.413 127.38 415.226 127.25 414.995 127.151C414.764 127.052 414.515 126.965 414.246 126.89L413.307 126.622C412.711 126.45 412.239 126.206 411.891 125.888C411.543 125.57 411.369 125.154 411.369 124.639C411.369 124.212 411.485 123.839 411.716 123.521C411.949 123.201 412.262 122.952 412.655 122.776C413.05 122.597 413.491 122.508 413.978 122.508C414.47 122.508 414.907 122.596 415.29 122.772C415.672 122.946 415.975 123.185 416.199 123.488C416.425 123.791 416.544 124.135 416.557 124.52H415.662ZM419.105 122.612V130.244H418.181V122.612H419.105ZM427.01 122.612V130.244H426.116L421.957 124.252H421.882V130.244H420.958V122.612H421.852L426.026 128.619H426.101V122.612H427.01ZM429.172 130.244H428.203L431.006 122.612H431.96L434.762 130.244H433.793L431.513 123.819H431.453L429.172 130.244ZM429.53 127.263H433.436V128.083H429.53V127.263Z"
            fill="#00344D"
          />
          <path
            d="M569.567 110.885L571.7 112.23L578.849 113.063L582.59 111.01L585.091 106.449L591.43 103.496L595.195 102.778L598.554 101.216L606.096 98.9355L608.729 100.361L611.267 105.811L612.089 110.771L613.828 113.656L615.163 112.835L622.144 110.714L628.101 113.245L630.484 112.55L632.688 113.553L635.321 117.43L637.406 130.633L638.443 133.94L625.266 141.841L625.123 140.256L624.134 138.386L622.942 137.451L618.796 138.079L613.387 140.359L605.393 163.836L606.072 165.979V168.545L604.654 169.617L597.232 172.478L584.281 176.731L577.764 180.152L570.425 180.676L566.589 185.853L566.005 190.71L567.614 191.429H570.723L573.249 190.288L576.525 189.98L578.682 190.551L580.421 195.59L581.041 200.516L578.05 206.217L578.706 208.201L580.111 209.466L584.686 208.395L585.246 211.325L586.438 214.176L592.752 222.636L596.326 224.745L603.94 225.623L610.754 227.071L621.322 227.71L622.514 229.374L621.203 232.476L618.999 234.061L617.283 234.95L612.518 236.09L609.503 237.641L607.681 239.819V241.871L609.003 245.782L606.787 246.432L603.856 245.725L601.664 244.072L599.805 243.878L593.133 245.463L586.342 244.106L584.734 242.555L583.769 240.275L584.758 231.324L584.115 228.873L580.933 223.286L579.575 222.944L575.322 223.981L566.148 224.529L562.419 224.289L560.275 220.059L557.534 219.227L553.543 220.891L544.691 218.143L537.543 216.889L536.351 217.106L536.256 214.552L537.543 210.31L546.025 202.466L544.965 201.154L542.475 200.55L539.103 197.54L537.328 194.393L536.732 192.113L535.434 190.972L529.405 191.143L529.167 188.863L529.763 186.48L533.766 181.133L533.992 178.852L535.255 176.754L535.029 173.949L532.312 165.763L530.823 166.367L529.072 168.362L526.308 169.981L524.139 170.187L522.507 169.902V166.971L521.84 165.329L518.099 165.614L515.835 166.971V165.831L513.869 165.01L514.501 163.049L515.907 161.464L516.002 155.068L515.049 151.715L513.953 150.792L511.749 150.153L505.267 149.515L504.278 149.036L503.087 147.451L503.766 145.171L502.456 141.659L497.916 139.242L496.57 137.668L496.034 130.918L486.765 128.638L482.273 129.037L477.508 131.237L475.375 132.708L474.636 135.673L472.408 139.789L471.134 138.512L471.014 136.231L466.833 129.071L465.355 126.084L464.366 125.286L458.481 125.149L455.073 124.088L454.371 123.267L454.287 118.878L455.181 115.001V111.934L455.729 111.592L468.107 110.018L474.505 111.158L485.49 110.269L486.908 111.74L488.588 117.076L489.398 118.148L492.567 120.052L494.95 120.645L498.071 118.923L498.834 120.702L500.609 121.5L504.993 120.873L509.973 118.889L513.774 115.947L514.965 112.949L515.656 112.093L518.039 111.09V110.11L519.552 109.665L531.538 110.167L542.26 111.786L548.503 110.93L555.723 111.82L567.637 112.333L569.567 110.885Z"
            fill="white"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M544.569 144.653H545.493V150.109C545.493 150.596 545.403 151.009 545.224 151.35C545.046 151.69 544.793 151.949 544.468 152.125C544.142 152.301 543.759 152.39 543.316 152.39C542.899 152.39 542.528 152.314 542.202 152.162C541.877 152.008 541.621 151.79 541.434 151.506C541.248 151.223 541.155 150.886 541.155 150.496H542.064C542.064 150.713 542.118 150.901 542.224 151.063C542.334 151.222 542.483 151.346 542.672 151.435C542.861 151.525 543.075 151.57 543.316 151.57C543.582 151.57 543.808 151.514 543.995 151.402C544.181 151.29 544.323 151.126 544.419 150.91C544.519 150.691 544.569 150.424 544.569 150.109V144.653ZM548.269 144.653V152.285H547.345V144.653H548.269ZM555.34 147.038C555.258 146.787 555.149 146.562 555.015 146.364C554.884 146.162 554.726 145.991 554.542 145.849C554.361 145.708 554.154 145.6 553.923 145.525C553.692 145.45 553.439 145.413 553.163 145.413C552.711 145.413 552.3 145.53 551.93 145.764C551.559 145.997 551.265 146.341 551.046 146.796C550.828 147.25 550.718 147.808 550.718 148.469C550.718 149.13 550.829 149.688 551.05 150.142C551.271 150.597 551.571 150.941 551.948 151.175C552.326 151.408 552.751 151.525 553.223 151.525C553.66 151.525 554.045 151.432 554.378 151.245C554.713 151.057 554.974 150.791 555.161 150.448C555.349 150.103 555.444 149.696 555.444 149.229L555.727 149.289H553.431V148.469H556.338V149.289C556.338 149.917 556.204 150.464 555.936 150.929C555.67 151.393 555.302 151.753 554.833 152.009C554.366 152.263 553.829 152.39 553.223 152.39C552.547 152.39 551.953 152.23 551.441 151.912C550.932 151.594 550.535 151.142 550.249 150.556C549.966 149.97 549.824 149.274 549.824 148.469C549.824 147.865 549.905 147.323 550.066 146.841C550.23 146.356 550.461 145.944 550.759 145.603C551.058 145.263 551.41 145.002 551.818 144.821C552.225 144.639 552.674 144.549 553.163 144.549C553.566 144.549 553.941 144.61 554.289 144.731C554.639 144.85 554.951 145.021 555.224 145.242C555.5 145.46 555.73 145.723 555.913 146.028C556.097 146.331 556.224 146.668 556.294 147.038H555.34ZM557.998 152.285H557.03L559.832 144.653H560.786L563.588 152.285H562.62L560.339 145.86H560.279L557.998 152.285ZM558.356 149.304H562.262V150.124H558.356V149.304ZM565.569 152.285L563.482 144.653H564.421L566.016 150.869H566.091L567.716 144.653H568.759L570.384 150.869H570.459L572.054 144.653H572.993L570.906 152.285H569.952L568.267 146.203H568.208L566.523 152.285H565.569ZM573.863 152.285H572.894L575.696 144.653H576.65L579.453 152.285H578.484L576.203 145.86H576.144L573.863 152.285ZM574.221 149.304H578.126V150.124H574.221V149.304Z"
            fill="#00344D"
          />
          <path
            d="M679.557 71.1484L694.39 71.3651L705.78 72.7333L718.599 77.5336L732.527 80.4411L735.779 82.0944L743.035 87.9892L748.73 91.4098L750.612 91.5694L750.97 90.6344L752.161 90.3152L754.127 91.0563L754.866 90.4634L754.163 89.1522L755.938 89.3346L757.963 90.4064L759.941 89.9275L760.93 90.7371L761.68 91.9571L762.872 91.2502L766.267 91.9457L767.149 92.5158L768.257 92.6526H769.448L769.353 97.4528L767.578 106.574L769.043 110.964L770.842 113.051L776.561 117.429L777.133 121.693L774.941 126.494L772.129 129.983L763.694 137.2L763.039 139.709L765.088 144.076L765.028 150.677L762.002 169.251L761.847 173.242L763.861 181.725L758.237 192.146L758.416 194.358L759.179 194.769L765.028 194.529L768.757 198.805L769.758 202.602L768.567 205.008L763.158 210.059L759.226 216.786L755.783 220.606L754.711 223.867V227.287L755.616 232.019L755.33 235.371L752.971 238.849L745.692 243.011L732.336 246.431L729.143 248.643L727.094 251.87L726.367 255.028L726.701 264.595L722.638 269.76L719.064 270.547H710.915L710.557 269.965L709.64 262.611L711.07 249.099L710.271 243.547L705.887 239.693L704.005 240.833L705.196 239.077L701.121 234.995L695.462 227.698L685.347 220.56L682.75 219.089L679.176 217.949L674.41 217.755L669.442 219.477L668.358 220.48L664.783 220.059L662.841 218.314L664.033 210.583L665.284 207.482L665.558 201.872L655.61 178.031L655.371 173.618L654.18 170.528L653.787 167.45L653.537 159.765L649.772 154.451L649.998 152.388L649.081 144.315L647.723 140.974L638.501 133.916L637.465 130.61L635.344 117.441L632.711 113.564L630.507 112.56L628.124 113.256L622.167 110.725L615.161 112.88L613.827 113.701L612.088 110.816L611.266 105.856L608.728 100.406L606.095 98.9807L598.553 101.261L595.194 102.823L591.429 103.542L585.09 106.495L582.588 111.055L578.847 113.108L571.699 112.275L569.566 110.93L578.359 102.379L582.231 97.1336L587.092 93.1315L593.323 86.4157L598.089 83.5196L608.811 78.8904L627.945 77.8186L642.897 72.4597L666.225 71.2397L679.557 71.1484Z"
            fill="#D62B3C"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M684.925 140.274H685.983L688.1 143.837H688.189L690.306 140.274H691.364L688.606 144.761V147.906H687.682V144.761L684.925 140.274ZM698.64 144.09C698.64 144.895 698.495 145.591 698.204 146.177C697.914 146.763 697.515 147.216 697.008 147.534C696.501 147.852 695.923 148.011 695.272 148.011C694.621 148.011 694.042 147.852 693.535 147.534C693.028 147.216 692.629 146.763 692.339 146.177C692.048 145.591 691.903 144.895 691.903 144.09C691.903 143.285 692.048 142.59 692.339 142.003C692.629 141.417 693.028 140.965 693.535 140.647C694.042 140.329 694.621 140.17 695.272 140.17C695.923 140.17 696.501 140.329 697.008 140.647C697.515 140.965 697.914 141.417 698.204 142.003C698.495 142.59 698.64 143.285 698.64 144.09ZM697.746 144.09C697.746 143.429 697.636 142.872 697.414 142.417C697.196 141.962 696.899 141.618 696.524 141.385C696.151 141.151 695.734 141.034 695.272 141.034C694.81 141.034 694.391 141.151 694.016 141.385C693.643 141.618 693.346 141.962 693.125 142.417C692.906 142.872 692.797 143.429 692.797 144.09C692.797 144.751 692.906 145.309 693.125 145.763C693.346 146.218 693.643 146.562 694.016 146.796C694.391 147.029 694.81 147.146 695.272 147.146C695.734 147.146 696.151 147.029 696.524 146.796C696.899 146.562 697.196 146.218 697.414 145.763C697.636 145.309 697.746 144.751 697.746 144.09ZM700.195 147.906V140.274H702.863C703.394 140.274 703.833 140.366 704.178 140.55C704.524 140.731 704.781 140.976 704.95 141.284C705.119 141.59 705.203 141.929 705.203 142.301C705.203 142.629 705.145 142.9 705.028 143.114C704.914 143.327 704.762 143.496 704.573 143.621C704.387 143.745 704.185 143.837 703.966 143.896V143.971C704.199 143.986 704.434 144.068 704.67 144.217C704.906 144.366 705.104 144.58 705.263 144.858C705.422 145.136 705.501 145.476 705.501 145.879C705.501 146.262 705.414 146.606 705.24 146.911C705.066 147.217 704.792 147.459 704.417 147.638C704.042 147.817 703.553 147.906 702.952 147.906H700.195ZM701.119 147.086H702.952C703.556 147.086 703.985 146.97 704.238 146.736C704.494 146.5 704.622 146.214 704.622 145.879C704.622 145.621 704.556 145.382 704.424 145.163C704.293 144.942 704.105 144.766 703.862 144.634C703.618 144.5 703.33 144.433 702.997 144.433H701.119V147.086ZM701.119 143.628H702.833C703.111 143.628 703.362 143.573 703.586 143.464C703.812 143.355 703.991 143.201 704.122 143.002C704.257 142.803 704.324 142.57 704.324 142.301C704.324 141.966 704.207 141.682 703.973 141.448C703.74 141.212 703.37 141.094 702.863 141.094H701.119V143.628ZM707.02 147.906V140.274H711.626V141.094H707.944V143.673H711.387V144.493H707.944V147.086H711.686V147.906H707.02Z"
            fill="#00344D"
          />
          <path
            d="M841.267 46.748L842.101 53.1902L841.112 56.6108L845.27 63.7484L845.032 66.6217L844.484 67.1804L844.817 64.7062L843.626 66.2227L843.316 68.4118L846.152 71.3193L849.083 72.0149L848.308 72.7788L848.642 73.3945L849.571 73.6111L854.885 82.1968L858.256 85.7087L859.448 85.9595L861.497 87.0997L863.439 88.4679L868.05 89.3231L868.36 90.3037H867.669L867.001 91.5579L866.763 90.4177L865.977 91.079H865.095L866.811 92.9033L867.132 94.9101L871.815 93.4962L874.567 90.5203L877.51 88.2399L879.416 87.476L878.129 89.4827L878.308 89.9958L879.082 89.7792L879.761 92.4472L879.368 92.6981L878.57 91.1246L877.557 91.6719L876.878 93.0287L874.495 93.6787L875.294 95.8222L873.876 97.1107L871.636 101.364L872.124 102.242L873.757 101.728L873.673 104.511L872.982 105.822H873.995L873.59 107.372L872.22 109.128L872.696 109.778L874.567 109.288L874.912 109.915L871.779 111.5L874.162 112.07L873.983 113.085H875.413L874.519 114.054L872.947 114.43L873.089 114.909L874.567 114.647L874.71 115.331L874.138 115.833L873.864 115.411L872.672 115.673L872.958 116.528L873.84 116.391L872.827 118.296L874.626 118.535L874.888 120.063L874.209 120.907L874.519 122.332L875.711 122.583L876.342 123.962L876.056 125.274L878.439 125.901L878.844 127.565L879.571 128.158L881.489 127.075L882.037 127.303L882.883 129.481L884.336 130.29L884.706 131.522L887.279 132.4V133.654L888.077 134.794L887.637 136.151L888.482 136.881L889.805 137.508L891.485 136.938L893.868 137.234L893.546 138.374L894.535 138.443L894.999 137.656L897.156 137.576L898.907 136.653L901.838 136.562L902.041 137.953L903.315 138.055L903.172 139.093L901.683 139.458L901.945 140.062L901.493 140.792L902.684 141.111L905.365 144.087L909.439 143.483H910.631L911.143 144.406L913.192 143.414L916.683 144.406L920.853 144.007L921.663 144.361L922.676 144.497L924.594 144.885L925.535 146.253L927.048 146.641L927.453 147.633H926.655L926.75 148.91L929.336 150.05L930.17 151.612L929.312 153.197L932.886 154.075L933.792 155.785L933.148 156.31L934.494 156.926L935.424 157.062L935.567 156.504L936.758 156.412L937.366 155.831L938.95 158.693L937.318 160.164L936.937 162.216L936.055 163.208L936.865 165.488L934.816 166.811L934.745 168.601L937.366 172.911L935.924 174.895L936.198 176.434L933.434 179.593V181.303L933.78 185.624L932.946 187.027L929.598 189.478L929.526 190.105L931.027 192.066L933.41 193.355L935.984 195.841L936.508 198.303L935.769 203.64L934.268 204.7L926.691 207.63L922.068 208.656L919.769 212.305L910.237 215.919L906.33 218.28L904.03 221.301L898.657 223.479H895.893L892.652 220.777L889.65 220.275L888.375 219.329L887.1 219.511L886.374 220.378L885.683 223.023L883.204 225.759L882.275 228.815L881.417 229.955L879.678 231.096L879.964 232.794L879.189 233.034L877.903 234.949L875.139 237.23L873.697 240.548L869.837 242.383L866.954 242.999L866.036 243.854L865.81 245.838L859.114 247.822L854.515 248.153L850.048 246.853L849.309 246.009L845.628 246.5L845.294 255.621L844.246 260.296L842.792 264.526L839.563 271.002L837.8 279.85L836.442 281.241H831.212L828.376 280.101L825.481 278.79L822.073 275.255L819 273.488L815.58 272.348L805.43 271.447L802.439 273.123L799.937 275.586L797.292 279.805L794.492 281.105L790.537 281.264L789.56 284.297L786.653 287.285L779.624 289.816L772.13 290.374L769.139 291.366L761.753 299.416L757.309 305.744L755.355 307.854L753.282 309.074L747.837 310.579L744.62 310.795L737.067 309.655L732.408 307.147L730.252 305.323L726.523 298.287L719.779 295.619L717.599 293.544L714.656 289.611L713.691 286.384L719.863 277.764L720.602 274.343L718.993 270.581L722.567 269.794L726.63 264.629L726.296 255.062L727.023 251.904L729.072 248.677L732.242 246.488L745.597 243.068L752.877 238.906L755.367 235.394L755.653 232.042L754.747 227.31V223.889L755.819 220.628L759.263 216.809L763.194 210.082L768.603 205.031L769.795 202.625L768.794 198.828L765.065 194.552L759.215 194.792L758.452 194.381L758.274 192.169L763.897 181.748L761.884 173.265L762.039 169.274L765.065 150.7L765.124 144.098L763.075 139.731L763.73 137.223L772.142 130.028L774.965 126.516L777.158 121.716L776.586 117.452L770.843 113.051L769.116 110.975L767.65 106.586L769.425 97.4641L769.521 92.6639L771.248 92.5271L776.466 93.5304V92.1736L777.169 91.7061L777.253 90.8624L777.479 88.9126L779.242 87.3962L780.601 87.6698L782.209 86.8375L781.852 85.5148L782.757 84.2606L782.483 83.8957L781.423 83.6791L781.899 82.3907L782.817 80.8742L783.77 78.8447L784.532 78.1605L787.249 78.5596L788.893 77.5676L790.084 77.6703L790.811 78.514L792.002 77.2484L792.276 75.6065L793.873 75.3443L795.624 75.0136L795.97 74.4891L795.565 74.033L796.756 72.699L799.27 72.1517L800.009 70.7378L801.641 69.8485L801.832 68.9477L802.523 68.104L802.999 67.2602V66.2797L804.31 65.7894L804.822 64.6492L803.857 64.2957L804.536 63.6002L806.001 64.3185L805.656 62.5284L806.966 62.6652L807.038 63.2011L808.051 63.5318L809.361 63.3722L811.589 61.468L812.781 61.0462L813.162 61.4794L815.545 61.3654L817.201 59.8489L818.392 60.4076L818.452 59.1762L819.738 58.7658L820.93 58.8684L819.691 60.1796L821.442 61.0804L822.538 59.5867L824.147 60.7269L823.908 59.2332L825.672 58.6517L825.302 61.0233L826.398 61.1602L826.934 60.02L828.305 59.7349L829.401 61.3198L830.592 58.4351L832.57 57.4773V56.9756L831.915 56.759L832.141 55.9495L833.559 56.1775L834.321 55.2653L833.559 55.0715L833.082 53.9313L835.084 52.107L835.012 51.4457L836.787 50.6817V49.6214L837.979 48.4127L839.456 48.1391L839.921 46.9305L841.267 46.748Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M809.664 183.721V176.089H812.333C812.864 176.089 813.303 176.18 813.648 176.364C813.994 176.546 814.251 176.79 814.42 177.098C814.589 177.404 814.673 177.743 814.673 178.116C814.673 178.444 814.615 178.715 814.498 178.928C814.384 179.142 814.232 179.311 814.043 179.435C813.857 179.559 813.654 179.651 813.436 179.711V179.785C813.669 179.8 813.904 179.882 814.14 180.031C814.376 180.18 814.574 180.394 814.733 180.672C814.892 180.951 814.971 181.291 814.971 181.693C814.971 182.076 814.884 182.42 814.71 182.726C814.536 183.031 814.262 183.274 813.887 183.452C813.512 183.631 813.023 183.721 812.422 183.721H809.664ZM810.589 182.901H812.422C813.026 182.901 813.454 182.784 813.708 182.551C813.964 182.315 814.092 182.029 814.092 181.693C814.092 181.435 814.026 181.197 813.894 180.978C813.763 180.757 813.575 180.58 813.331 180.449C813.088 180.315 812.8 180.247 812.467 180.247H810.589V182.901ZM810.589 179.443H812.303C812.581 179.443 812.832 179.388 813.056 179.279C813.282 179.169 813.461 179.015 813.592 178.816C813.726 178.618 813.794 178.384 813.794 178.116C813.794 177.78 813.677 177.496 813.443 177.262C813.21 177.026 812.84 176.908 812.333 176.908H810.589V179.443ZM822.929 179.905C822.929 180.71 822.784 181.405 822.493 181.992C822.203 182.578 821.804 183.03 821.297 183.348C820.79 183.666 820.211 183.825 819.561 183.825C818.91 183.825 818.331 183.666 817.824 183.348C817.317 183.03 816.918 182.578 816.628 181.992C816.337 181.405 816.192 180.71 816.192 179.905C816.192 179.1 816.337 178.404 816.628 177.818C816.918 177.231 817.317 176.779 817.824 176.461C818.331 176.143 818.91 175.984 819.561 175.984C820.211 175.984 820.79 176.143 821.297 176.461C821.804 176.779 822.203 177.231 822.493 177.818C822.784 178.404 822.929 179.1 822.929 179.905ZM822.035 179.905C822.035 179.244 821.924 178.686 821.703 178.231C821.485 177.777 821.188 177.433 820.813 177.199C820.44 176.966 820.023 176.849 819.561 176.849C819.098 176.849 818.68 176.966 818.305 177.199C817.932 177.433 817.635 177.777 817.414 178.231C817.195 178.686 817.086 179.244 817.086 179.905C817.086 180.565 817.195 181.123 817.414 181.578C817.635 182.033 817.932 182.377 818.305 182.61C818.68 182.844 819.098 182.96 819.561 182.96C820.023 182.96 820.44 182.844 820.813 182.61C821.188 182.377 821.485 182.033 821.703 181.578C821.924 181.123 822.035 180.565 822.035 179.905ZM824.483 183.721V176.089H827.062C827.659 176.089 828.148 176.19 828.531 176.394C828.913 176.595 829.196 176.872 829.38 177.225C829.564 177.578 829.656 177.979 829.656 178.429C829.656 178.879 829.564 179.277 829.38 179.625C829.196 179.973 828.914 180.246 828.534 180.445C828.154 180.641 827.669 180.739 827.077 180.739H824.99V179.905H827.047C827.455 179.905 827.783 179.845 828.031 179.726C828.282 179.606 828.464 179.438 828.575 179.219C828.69 178.998 828.747 178.734 828.747 178.429C828.747 178.123 828.69 177.856 828.575 177.628C828.461 177.399 828.278 177.223 828.028 177.098C827.777 176.972 827.445 176.908 827.032 176.908H825.408V183.721H824.483ZM828.076 180.292L829.954 183.721H828.881L827.032 180.292H828.076ZM837.248 176.089V183.721H836.354L832.195 177.728H832.12V183.721H831.196V176.089H832.09L836.264 182.096H836.339V176.089H837.248ZM845.537 179.905C845.537 180.71 845.392 181.405 845.101 181.992C844.81 182.578 844.412 183.03 843.905 183.348C843.398 183.666 842.819 183.825 842.168 183.825C841.517 183.825 840.938 183.666 840.432 183.348C839.925 183.03 839.526 182.578 839.235 181.992C838.945 181.405 838.799 180.71 838.799 179.905C838.799 179.1 838.945 178.404 839.235 177.818C839.526 177.231 839.925 176.779 840.432 176.461C840.938 176.143 841.517 175.984 842.168 175.984C842.819 175.984 843.398 176.143 843.905 176.461C844.412 176.779 844.81 177.231 845.101 177.818C845.392 178.404 845.537 179.1 845.537 179.905ZM844.643 179.905C844.643 179.244 844.532 178.686 844.311 178.231C844.092 177.777 843.796 177.433 843.42 177.199C843.048 176.966 842.63 176.849 842.168 176.849C841.706 176.849 841.288 176.966 840.912 177.199C840.54 177.433 840.243 177.777 840.022 178.231C839.803 178.686 839.694 179.244 839.694 179.905C839.694 180.565 839.803 181.123 840.022 181.578C840.243 182.033 840.54 182.377 840.912 182.61C841.288 182.844 841.706 182.96 842.168 182.96C842.63 182.96 843.048 182.844 843.42 182.61C843.796 182.377 844.092 182.033 844.311 181.578C844.532 181.123 844.643 180.565 844.643 179.905Z"
            fill="#00344D"
          />
          <path
            d="M865.68 247.561L865.526 249.647L864.549 251.654L863.357 253.444L862.047 254.39L859.938 257.697L858.318 263.272L855.148 266.066L854.577 267.32L853.85 270.741L854.708 274.857L855.625 276.066V278.004L853.707 279.897L853.397 285.153L852.206 287.057L852.361 290.991L851.431 293.203L849.049 296.133L848.739 299.554L846.821 300.694L845.105 303.67L838.111 304.992L833.131 311.697L833.31 312.837L835.145 314.684V315.414L833.775 318.538L831.606 320.18V322.198L832.428 324.022L835.633 325.539L836.825 327.352L834.251 330.875L834.096 333.44L833.453 334.911L833.775 336.177L832.488 337.853L832.881 338.742L832.619 340.35L833.131 341.068L832.25 343.577L831.058 345.447L829.867 345.298L827.842 346.804L818.31 347.738L814.927 350.201L812.997 350.532L808.517 354.397L804.037 356.678L804.144 358.206L806.968 358.513L807.552 358.992L807.659 367.521L806.789 368.308L805.801 373.336L806.801 375.696L805.419 380.257L805.777 381.762L802.429 387.235L799.284 389.857V390.998L800.129 392.138L799.152 394.475L800.666 398.945L799.319 401.054L798.021 401.487L796.031 401.225L794.292 401.841L793.612 403.095L793.422 406.208L792.23 407.052L791.039 409.161L788.442 409.378L784.391 412.525L783.402 412.661L776.397 410.792L775.61 411.544L775.324 413.494L773.919 414.816L772.953 418.294L770.845 420.962L768.069 421.122L766.734 422.137L763.792 421.817L761.587 423.197L759.312 423.573L758.454 424.508L757.644 429.069L759.36 435.021L760.051 441.6L759.979 442.74L759.062 443.378L756.167 448.521L756.905 451.383L757.167 455.636L752.318 462.921L748.208 466.49L746.111 469.911L745.539 472.191L744.205 473.867L743.716 477.801L742.394 479.58L743.216 486.581L743.99 488.633L740.452 490.286L738.069 490.594L734.793 494.174L733.339 493.171L733.399 491.392L731.087 486.125L730.635 482.088L729.753 480.116L730.444 473.856L729.253 471.576L726.691 468.611L721.544 464.233L718.566 460.641L716.755 459.364L715.063 458.874L713.109 459.307L709.738 463.868L706.497 466.148L703.268 463.355L699.801 457.996L696.799 450.379L697.776 448.578L702.708 443.128L707.236 439.456L713.288 433.208L723.57 420.073L730.861 414.121L731.385 411.749L730.933 405.159L738.081 392.115L739.272 387.988L738.963 385.924L736.58 381.545L731.647 379.869L728.478 376.517L728.073 372.139L728.621 369.665L722.354 358.468L719.876 356.997L714.301 355.743L712.561 353.553L706.068 341.946L713.455 340.909L717.47 339.278L728.669 332.825L735.519 328.264L736.83 325.607L736.211 321.388L737.021 309.724L744.574 310.864L747.791 310.648L753.236 309.143L755.356 307.854L757.382 305.688L761.826 299.36L769.212 291.31L772.203 290.318L779.697 289.759L786.726 287.228L789.633 284.241L790.61 281.208L794.566 281.048L797.365 279.748L800.01 275.53L802.512 273.067L805.503 271.391L815.653 272.291L819.073 273.432L822.147 275.199L825.53 278.745L828.425 280.056L831.261 281.196H836.491L837.849 279.805L839.613 270.957L842.841 264.481L844.295 260.331L845.343 255.656L845.677 246.534L849.358 246.044L850.097 246.888L854.565 248.188L859.164 247.857L865.859 245.873L865.68 247.561Z"
            fill="#D62B3C"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M733.683 354.055H732.714L735.516 346.423H736.47L739.273 354.055H738.304L736.023 347.63H735.963L733.683 354.055ZM734.04 351.073H737.946V351.893H734.04V351.073ZM742.817 354.055H740.461V346.423H742.921C743.661 346.423 744.295 346.575 744.822 346.881C745.348 347.184 745.752 347.62 746.033 348.189C746.313 348.755 746.454 349.434 746.454 350.224C746.454 351.019 746.312 351.703 746.029 352.277C745.746 352.848 745.333 353.288 744.792 353.596C744.25 353.902 743.592 354.055 742.817 354.055ZM741.386 353.235H742.757C743.388 353.235 743.911 353.113 744.326 352.87C744.741 352.626 745.05 352.28 745.254 351.83C745.458 351.38 745.559 350.845 745.559 350.224C745.559 349.608 745.459 349.077 745.258 348.632C745.056 348.185 744.756 347.842 744.356 347.604C743.956 347.363 743.458 347.242 742.861 347.242H741.386V353.235ZM747.958 354.055H746.989L749.792 346.423H750.746L753.548 354.055H752.579L750.299 347.63H750.239L747.958 354.055ZM748.316 351.073H752.222V351.893H748.316V351.073ZM754.737 346.423H755.84L758.434 352.758H758.523L761.117 346.423H762.22V354.055H761.356V348.256H761.281L758.896 354.055H758.061L755.676 348.256H755.602V354.055H754.737V346.423ZM764.386 354.055H763.417L766.22 346.423H767.174L769.976 354.055H769.007L766.727 347.63H766.667L764.386 354.055ZM764.744 351.073H768.65V351.893H764.744V351.073ZM771.957 354.055L769.87 346.423H770.809L772.404 352.639H772.479L774.104 346.423H775.147L776.772 352.639H776.846L778.441 346.423H779.381L777.294 354.055H776.34L774.655 347.973H774.596L772.911 354.055H771.957ZM780.251 354.055H779.282L782.084 346.423H783.038L785.841 354.055H784.872L782.591 347.63H782.531L780.251 354.055ZM780.609 351.073H784.514V351.893H780.609V351.073Z"
            fill="#00344D"
          />
          <path
            d="M668.382 220.502L669.467 219.499L674.339 217.777L679.105 217.971L682.679 219.111L685.277 220.582L695.392 227.72L701.051 235.017L705.125 239.099L703.934 240.855L705.816 239.715L710.201 243.569L710.999 249.121L709.569 262.633L710.487 269.987L710.844 270.569H718.922L720.53 274.331L719.792 277.752L713.656 286.372L714.621 289.599L717.516 293.601L719.696 295.676L726.44 298.344L730.169 305.379L732.325 307.203L736.984 309.712L736.173 321.376L736.793 325.595L735.482 328.251L728.632 332.812L717.433 339.266L713.453 340.919L706.067 341.956L698.477 342.492H683.632L676.603 343.177L672.35 342.367L673.041 342.185L673.196 341.101L671.182 338.639L668.108 332.618L667.382 325.56L665.916 321.239L655.015 313.155L652.036 311.547L646.937 306.553L646.544 304.706L648.105 302.528L650.487 301.479L655.134 300.761L656.123 298.754L655.646 295.493L656.218 285.653L653.74 280.021L645.162 277.034L644.114 275.722L643.077 267.57L641.695 265.666L632.902 262.245L633.141 260.672L637.442 254.891L640.551 246.419L641.743 240.787L643.387 238.506L645.102 236.956L649.761 235.952L651.536 235.086L653.919 233.09L656.981 228.871L664.129 225.132L667.358 220.844L668.382 220.502Z"
            fill="#D62B3C"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M668.698 282.071C668.616 281.82 668.508 281.595 668.374 281.397C668.242 281.195 668.085 281.024 667.901 280.882C667.719 280.741 667.513 280.633 667.282 280.558C667.051 280.484 666.798 280.446 666.522 280.446C666.07 280.446 665.658 280.563 665.288 280.797C664.918 281.03 664.624 281.374 664.405 281.829C664.186 282.284 664.077 282.841 664.077 283.502C664.077 284.163 664.188 284.721 664.409 285.176C664.63 285.63 664.929 285.974 665.307 286.208C665.685 286.441 666.109 286.558 666.581 286.558C667.019 286.558 667.404 286.465 667.737 286.279C668.072 286.09 668.333 285.824 668.519 285.481C668.708 285.136 668.803 284.73 668.803 284.263L669.086 284.322H666.79V283.502H669.697V284.322C669.697 284.951 669.563 285.497 669.294 285.962C669.029 286.426 668.661 286.787 668.191 287.043C667.724 287.296 667.188 287.423 666.581 287.423C665.906 287.423 665.312 287.264 664.8 286.946C664.291 286.628 663.893 286.176 663.608 285.589C663.324 285.003 663.183 284.307 663.183 283.502C663.183 282.899 663.263 282.356 663.425 281.874C663.589 281.389 663.82 280.977 664.118 280.636C664.416 280.296 664.769 280.035 665.176 279.854C665.584 279.673 666.032 279.582 666.522 279.582C666.924 279.582 667.299 279.643 667.647 279.764C667.998 279.884 668.309 280.054 668.583 280.275C668.858 280.494 669.088 280.756 669.272 281.061C669.456 281.364 669.583 281.701 669.652 282.071H668.698ZM677.719 283.502C677.719 284.307 677.574 285.003 677.283 285.589C676.993 286.176 676.594 286.628 676.087 286.946C675.58 287.264 675.001 287.423 674.351 287.423C673.7 287.423 673.121 287.264 672.614 286.946C672.107 286.628 671.708 286.176 671.418 285.589C671.127 285.003 670.982 284.307 670.982 283.502C670.982 282.697 671.127 282.002 671.418 281.415C671.708 280.829 672.107 280.377 672.614 280.059C673.121 279.741 673.7 279.582 674.351 279.582C675.001 279.582 675.58 279.741 676.087 280.059C676.594 280.377 676.993 280.829 677.283 281.415C677.574 282.002 677.719 282.697 677.719 283.502ZM676.825 283.502C676.825 282.841 676.714 282.284 676.493 281.829C676.275 281.374 675.978 281.03 675.603 280.797C675.23 280.563 674.813 280.446 674.351 280.446C673.888 280.446 673.47 280.563 673.095 280.797C672.722 281.03 672.425 281.374 672.204 281.829C671.985 282.284 671.876 282.841 671.876 283.502C671.876 284.163 671.985 284.721 672.204 285.176C672.425 285.63 672.722 285.974 673.095 286.208C673.47 286.441 673.888 286.558 674.351 286.558C674.813 286.558 675.23 286.441 675.603 286.208C675.978 285.974 676.275 285.63 676.493 285.176C676.714 284.721 676.825 284.163 676.825 283.502ZM679.273 279.686H680.377L682.97 286.021H683.06L685.653 279.686H686.757V287.318H685.892V281.52H685.817L683.432 287.318H682.598L680.213 281.52H680.138V287.318H679.273V279.686ZM688.61 287.318V279.686H691.278C691.81 279.686 692.248 279.778 692.593 279.962C692.939 280.143 693.196 280.388 693.365 280.696C693.534 281.002 693.618 281.341 693.618 281.713C693.618 282.041 693.56 282.312 693.443 282.526C693.329 282.74 693.177 282.908 692.988 283.033C692.802 283.157 692.6 283.249 692.381 283.308V283.383C692.615 283.398 692.849 283.48 693.085 283.629C693.321 283.778 693.519 283.992 693.678 284.27C693.837 284.548 693.916 284.889 693.916 285.291C693.916 285.674 693.829 286.018 693.656 286.323C693.482 286.629 693.207 286.871 692.832 287.05C692.457 287.229 691.969 287.318 691.367 287.318H688.61ZM689.534 286.498H691.367C691.971 286.498 692.4 286.382 692.653 286.148C692.909 285.912 693.037 285.626 693.037 285.291C693.037 285.033 692.971 284.794 692.839 284.576C692.708 284.354 692.52 284.178 692.277 284.046C692.033 283.912 691.745 283.845 691.412 283.845H689.534V286.498ZM689.534 283.04H691.248C691.526 283.04 691.777 282.986 692.001 282.876C692.227 282.767 692.406 282.613 692.538 282.414C692.672 282.215 692.739 281.982 692.739 281.713C692.739 281.378 692.622 281.094 692.388 280.86C692.155 280.624 691.785 280.506 691.278 280.506H689.534V283.04ZM695.435 287.318V279.686H700.041V280.506H696.359V283.085H699.803V283.905H696.359V286.498H700.101V287.318H695.435Z"
            fill="#00344D"
          />
          <path
            d="M503.97 288.984L505.793 288.426L509.582 288.517L512.894 289.52L516.003 294.264L516.933 299.737V313.852L530.038 311.355L531.301 311.595L533.445 313.784L534.637 317.353L534.947 324.125L534.673 325.459L531.837 330.556L531.73 332.483L532.445 333.452L537.115 335.071L538.056 335.881L539.128 337.203L541.094 341.844L542.953 343.372L544.752 343.976L550.471 344.284L556.988 345.972L568.902 345.299L574.132 343.691L577.575 337.751L583.246 336.269L583.842 334.364L583.52 332.38L579.743 327.751L580.101 326.109L583.675 324.08L592.73 328.584L595.792 329.165L606.824 334.786L620.013 340.191L627.376 344.752L634.953 348.663L636.812 353.155L637.062 355.606L636.454 360.258L637.36 367.1L640.1 371.501L641.291 378.342L640.636 379.858L640.994 382.424H641.506L641.756 388.741L639.611 392.23L625.1 398.911L622.837 398.786L611.494 401.18L608.528 402.822L606.073 407.599L600.474 414.167L591.955 418.454L582.805 427.177L579.91 428.533L574.656 429.674L569.759 430.289L565.173 430.004L563.433 426.949L560.431 424.588L548.052 419.663L536.424 422.844L526.666 423.015L522.306 421.533L516.206 418.454L514.49 416.094L514.848 409.925L514.466 408.512L511.976 405.741L511.214 403.78L511.595 401.214L513.442 399.664L515.288 396.403L517.028 395.262L518.708 395.034L521.222 392.754L524.438 388.193L525.38 384.852L522.997 382.333L521.805 381.694L518.505 383.233H514.097L507.759 382.595L505.185 381.455L502.779 377.532L502.028 372.424L499.55 371.455L496.667 371.33L494.701 369.426L496.691 364.933L496.548 361.045L495.356 358.662L493.319 357.282L490.257 353.771L486.373 347.762L486.254 346.439L487.505 344.843L487.255 339.438L489.352 337.979L489.828 334.467L492.056 332.711L492.556 331.491L491.925 329.097L492.759 320.192L492.545 317.911L492.95 316.657L495.797 314.377L494.904 310.363L493.283 307.148L493.545 304.058L496.083 298.357L498.347 296.761L500.956 295.928L502.528 294.15L503.184 292.519L503.434 289.213L503.97 288.984Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M541.459 377.988V370.356H544.038C544.637 370.356 545.126 370.464 545.507 370.68C545.889 370.894 546.172 371.183 546.356 371.549C546.54 371.914 546.632 372.321 546.632 372.771C546.632 373.221 546.54 373.629 546.356 373.997C546.175 374.365 545.894 374.658 545.514 374.877C545.134 375.093 544.647 375.201 544.053 375.201H542.205V374.381H544.023C544.433 374.381 544.762 374.31 545.011 374.168C545.259 374.027 545.439 373.836 545.551 373.595C545.666 373.351 545.723 373.077 545.723 372.771C545.723 372.465 545.666 372.192 545.551 371.951C545.439 371.71 545.258 371.521 545.007 371.385C544.756 371.246 544.423 371.176 544.008 371.176H542.384V377.988H541.459ZM548.121 377.988V370.356H549.045V377.168H552.593V377.988H548.121ZM554.818 377.988H553.85L556.652 370.356H557.606L560.408 377.988H559.44L557.159 371.564H557.099L554.818 377.988ZM555.176 375.007H559.082V375.827H555.176V375.007ZM560.288 371.176V370.356H566.012V371.176H563.612V377.988H562.688V371.176H560.288ZM567.439 377.988V370.356H572.045V371.176H568.363V373.755H571.806V374.575H568.363V377.168H572.105V377.988H567.439ZM574.024 377.988H573.055L575.857 370.356H576.811L579.614 377.988H578.645L576.364 371.564H576.304L574.024 377.988ZM574.382 375.007H578.287V375.827H574.382V375.007ZM585.811 370.356H586.735V375.409C586.735 375.931 586.612 376.397 586.366 376.807C586.123 377.214 585.779 377.536 585.334 377.772C584.889 378.006 584.368 378.122 583.769 378.122C583.17 378.122 582.648 378.006 582.204 377.772C581.759 377.536 581.414 377.214 581.168 376.807C580.924 376.397 580.803 375.931 580.803 375.409V370.356H581.727V375.335C581.727 375.708 581.809 376.039 581.973 376.33C582.137 376.618 582.37 376.845 582.673 377.012C582.979 377.176 583.344 377.258 583.769 377.258C584.194 377.258 584.559 377.176 584.865 377.012C585.17 376.845 585.404 376.618 585.565 376.33C585.729 376.039 585.811 375.708 585.811 375.335V370.356Z"
            fill="#00344D"
          />
          <path
            d="M421.31 453.468L432.187 456.296L442.326 457.721L452.739 461.78L458.601 464.995L464.856 466.136L466.131 465.976L470.086 469.168L476.436 471.711L477.794 470.457L477.902 468.906L472.302 455.634L472.207 452.761L473.398 449.5L474.875 447.892L479.582 445.384L481.226 445.065L484.311 444.859L487.504 445.361L499.526 449.603L507.699 451.37L513.513 451.837L518.278 451.587V450.788L532.325 460.97L527.81 467.812L530.073 468.461L537.365 465.463L546.264 464.38L556.01 464.927L564.922 466.945L571.046 472.532L576.288 478.883L586.26 487.514L586.093 488.255L587.487 489.806L587.177 490.946L587.845 492.976L587.142 496.659L584.306 503.374L584.652 510.124L583.555 511.755L579.874 513.967L575.776 517.673L571.88 524.776L569.366 537.888L570.093 538.721L569.699 539.952V549.94L567.436 559.278L566.578 559.62L564.052 558.788L563.123 560.407L563.242 562.688L559.882 564.672L557.75 564.922L554.438 564.421L553.663 562.653L547.849 555.094L541.261 548.561L539.485 547.74L535.804 547.489L524.402 550.043L519.1 549.575L517.659 548.561L518.445 543.122L517.778 541.252L507.544 535.083L501.075 533.156L498.561 533.077L495.808 533.749L493.295 534.513L491.484 535.881L492.401 541.012L488.66 543.202L484.931 544.148L480.356 543.988L477.902 543.224L475.614 543.737L473.994 545.733L471.182 548.013L467.608 548.572L465.583 545.984L464.582 541.126L462.485 539.644L461.293 542.278L457.231 542.7L455.122 545.984L452.834 547.044L449.32 546.759L445.21 547.215L443.72 556.599L442.529 558.936L440.849 559.609L438.728 558.765L433.963 554.569L433.188 552.813L433.391 551.776L436.107 544.456L435.035 538.048L433.343 535.608L431.532 534.297L428.184 533.898L425.551 536.303L423.049 537.136L419.57 535.403L415.305 532.256L411.862 528.436L408.598 521.013L408.753 520.409L409.241 519.839L410.242 520.5L414.257 524.251L415.234 524.137L416.842 525.335H418.939L419.344 520.295L420.536 518.653L428.208 515.096L432.14 511.55L434.451 504.902L434.952 500.421L435.511 498.95L436.977 497.571L437.406 495.507L435.643 494.971L431.699 495.336L430.103 494.093L428.625 487.788L427.946 480.023V472.156L427.076 470.046L423.86 467.07L421.62 463.399L420.976 456.706L421.31 453.468Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M477.147 503.477V495.844H479.815C480.347 495.844 480.785 495.936 481.131 496.12C481.476 496.302 481.733 496.546 481.902 496.854C482.071 497.16 482.155 497.499 482.155 497.872C482.155 498.2 482.097 498.47 481.98 498.684C481.866 498.898 481.714 499.067 481.526 499.191C481.339 499.315 481.137 499.407 480.918 499.467V499.541C481.152 499.556 481.387 499.638 481.623 499.787C481.859 499.936 482.056 500.15 482.215 500.428C482.374 500.706 482.454 501.047 482.454 501.449C482.454 501.832 482.367 502.176 482.193 502.482C482.019 502.787 481.744 503.029 481.369 503.208C480.994 503.387 480.506 503.477 479.905 503.477H477.147ZM478.071 502.657H479.905C480.508 502.657 480.937 502.54 481.19 502.306C481.446 502.07 481.574 501.785 481.574 501.449C481.574 501.191 481.508 500.952 481.377 500.734C481.245 500.513 481.057 500.336 480.814 500.205C480.57 500.07 480.282 500.003 479.949 500.003H478.071V502.657ZM478.071 499.198H479.785C480.064 499.198 480.315 499.144 480.538 499.034C480.764 498.925 480.943 498.771 481.075 498.572C481.209 498.374 481.276 498.14 481.276 497.872C481.276 497.536 481.159 497.252 480.926 497.018C480.692 496.782 480.322 496.664 479.815 496.664H478.071V499.198ZM483.972 503.477V495.844H488.578V496.664H484.896V499.243H488.34V500.063H484.896V502.657H488.638V503.477H483.972ZM496.296 495.844V503.477H495.402L491.243 497.484H491.168V503.477H490.244V495.844H491.139L495.312 501.852H495.387V495.844H496.296ZM503.154 495.844H504.078V500.898C504.078 501.419 503.955 501.885 503.709 502.295C503.466 502.703 503.122 503.024 502.677 503.26C502.232 503.494 501.711 503.611 501.112 503.611C500.513 503.611 499.992 503.494 499.547 503.26C499.102 503.024 498.757 502.703 498.511 502.295C498.267 501.885 498.146 501.419 498.146 500.898V495.844H499.07V500.823C499.07 501.196 499.152 501.528 499.316 501.818C499.48 502.106 499.713 502.334 500.016 502.5C500.322 502.664 500.687 502.746 501.112 502.746C501.537 502.746 501.902 502.664 502.208 502.5C502.513 502.334 502.747 502.106 502.908 501.818C503.072 501.528 503.154 501.196 503.154 500.823V495.844ZM505.924 503.477V495.844H510.53V496.664H506.848V499.243H510.292V500.063H506.848V502.657H510.59V503.477H505.924Z"
            fill="#00344D"
          />
          <path
            d="M433.32 551.731L433.118 552.769L433.892 554.525L438.658 558.721L440.778 559.565L442.458 558.892L443.65 556.554L445.139 547.171L449.249 546.714L452.764 546.999L455.051 545.939L457.16 542.655L461.223 542.233L462.414 539.6L464.511 541.082L465.512 545.939L467.537 548.527L468.121 551.823L470.504 554.81L473.721 556.942L474.316 558.892L475.841 560.169L475.722 562.381L476.342 562.803L476.83 564.513L478.474 565.653L478.76 566.793L477.771 568.732L475.162 569.154L473.196 571.012V572.836L475.412 575.801V577.397L467.168 586.963L466.215 588.64L466.096 591.593L465.285 594.215L464.285 595.253L461.687 593.816L459.448 594.147L459.114 595.64L456.493 597.59L453.919 598.468L452.323 600.885L449.118 595.754L445.997 595.96L443.292 597.191L443.066 598.331L444.424 600.384L444.329 603.143L441.946 605.754L441.541 607.293L439.801 608.73L440.23 611.763L437.442 615.309L437.013 617.988L435.417 617.749L431.593 615.092L430.759 613.952L430.496 611.455L429.019 609.334L412.232 608.342L411.112 607.202L411.053 606.37L411.708 603.109L411.625 598.137L415.949 596.997L418.332 598.936L419.25 599.038L421.763 601.9L422.633 601.98L423.408 600.338L422.454 597.009L422.276 593.999L425.457 590.886L426.41 588.913L425.219 581.342L424.48 578.435L423.193 577.215V575.812L426.458 568.846V562.119L425.683 560.807L425.23 557.056L423.467 551.469L431.152 552.096L433.32 551.731Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M433.165 577.689V571.584H436.85V572.24H433.905V574.303H436.659V574.959H433.905V577.034H436.898V577.689H433.165ZM438.183 577.689V571.584H440.317C440.743 571.584 441.093 571.657 441.37 571.804C441.646 571.949 441.852 572.145 441.987 572.392C442.122 572.636 442.19 572.907 442.19 573.206C442.19 573.468 442.143 573.685 442.049 573.855C441.958 574.026 441.837 574.162 441.686 574.261C441.537 574.36 441.375 574.434 441.2 574.482V574.541C441.387 574.553 441.574 574.619 441.763 574.738C441.952 574.857 442.11 575.028 442.237 575.251C442.365 575.473 442.428 575.746 442.428 576.068C442.428 576.374 442.359 576.649 442.219 576.893C442.08 577.138 441.861 577.332 441.561 577.475C441.26 577.618 440.87 577.689 440.389 577.689H438.183ZM438.922 577.034H440.389C440.872 577.034 441.215 576.94 441.417 576.753C441.622 576.565 441.725 576.336 441.725 576.068C441.725 575.861 441.672 575.67 441.567 575.495C441.461 575.318 441.311 575.177 441.116 575.072C440.922 574.965 440.691 574.911 440.425 574.911H438.922V577.034ZM438.922 574.267H440.293C440.516 574.267 440.717 574.223 440.896 574.136C441.077 574.048 441.22 573.925 441.325 573.766C441.432 573.607 441.486 573.42 441.486 573.206C441.486 572.937 441.393 572.71 441.206 572.523C441.019 572.334 440.723 572.24 440.317 572.24H438.922V574.267ZM448.795 574.637C448.795 575.281 448.678 575.837 448.446 576.306C448.213 576.775 447.894 577.137 447.489 577.391C447.083 577.646 446.62 577.773 446.1 577.773C445.579 577.773 445.116 577.646 444.71 577.391C444.305 577.137 443.986 576.775 443.753 576.306C443.521 575.837 443.404 575.281 443.404 574.637C443.404 573.993 443.521 573.436 443.753 572.967C443.986 572.498 444.305 572.136 444.71 571.882C445.116 571.627 445.579 571.5 446.1 571.5C446.62 571.5 447.083 571.627 447.489 571.882C447.894 572.136 448.213 572.498 448.446 572.967C448.678 573.436 448.795 573.993 448.795 574.637ZM448.079 574.637C448.079 574.108 447.991 573.662 447.814 573.298C447.639 572.934 447.401 572.659 447.101 572.472C446.803 572.285 446.469 572.192 446.1 572.192C445.73 572.192 445.395 572.285 445.095 572.472C444.797 572.659 444.559 572.934 444.382 573.298C444.207 573.662 444.12 574.108 444.12 574.637C444.12 575.165 444.207 575.611 444.382 575.975C444.559 576.339 444.797 576.614 445.095 576.801C445.395 576.988 445.73 577.081 446.1 577.081C446.469 577.081 446.803 576.988 447.101 576.801C447.401 576.614 447.639 576.339 447.814 575.975C447.991 575.611 448.079 575.165 448.079 574.637ZM454.88 571.584V577.689H454.164L450.837 572.895H450.777V577.689H450.038V571.584H450.753L454.093 576.39H454.152V571.584H454.88ZM455.834 571.584H456.681L458.374 574.434H458.446L460.139 571.584H460.986L458.78 575.173V577.689H458.041V575.173L455.834 571.584ZM462.682 571.584V577.689H461.942V571.584H462.682Z"
            fill="#00344D"
          />
          <path
            d="M467.56 548.527L471.135 547.968L473.946 545.687L475.567 543.692L477.854 543.179L480.308 543.943L484.883 544.103L488.612 543.156L492.353 540.967L491.436 535.836L493.247 534.468L495.761 533.704L498.513 533.031L501.027 533.111L507.496 535.038L517.79 541.172L518.457 543.042L517.671 548.481L519.112 549.496L524.331 549.997L535.733 547.443L539.414 547.694L541.189 548.515L547.778 555.049L553.592 562.608L554.366 564.375L551.781 573.885L545.669 571.41L544.74 573.508V575.789L544.049 576.621L542.762 577.693L539.426 583.234L535.578 584.306L533.636 585.663L532.206 587.008L531.074 589.859L529.883 590.999L519.458 599.801L514.919 602.914L513.584 603.29L511.63 605.913L509.617 606.905L508.068 608.592L508.545 609.573L510.165 610.713L508.914 612.401L509.391 613.347L508.854 614.487L507.103 616.619L506.424 615.958L506.483 617.668L512.56 624.099L512.929 626.106L510.07 630.667L509.307 633.403L507.973 634.954L508.223 639.389L506.067 646.093L506.245 653.573L503.219 658.362L500.967 659.24L500.872 660.198L499.276 661.338L497.822 665.101L496.333 666.241L497.524 667.381L496.452 667.78L495.26 669.194L495.32 669.844L494.129 670.277L494.236 672.284L491.853 673.139L490.662 674.564V675.704L492.091 677.004L492.496 678.749L489.613 680.413L488.315 680.14L487.504 679.319L486.313 680.254L485.551 681.987L484.657 682.591L484.466 684.267L485.265 684.347L485.979 682.352L486.289 685.214L485.86 685.852L485.348 685.088L484.633 685.248L485.324 686.89L483.561 687.198L483.632 688.064L481.512 688.395L479.76 687.711L480.368 685.693L481.643 685.556L480.13 683.72L479.177 685.111L477.794 685.658L475.328 685.134L474.554 683.823L475.471 683.025L475.721 682.842L475.352 681.804L473.732 682.272L472.385 681.554L469.419 684.119L468.716 682.979L464.344 679.775L459.888 674.861L456.099 671.668L452.036 666.07L450.094 660.175L450.821 653.22L450.356 650.825L444.399 647.77L438.716 648.408L437.775 646.196L436.786 645.843L436 643.802L437.37 641.008L438.383 640.894L442.457 641.761L443.172 640.381L442.267 637.474L440.229 635.193L439.36 633.278L437.728 627.999L437.549 623.689L438.252 619.447L437.013 617.988L437.465 615.262L440.253 611.716L439.824 608.684L441.564 607.247L441.969 605.708L444.352 603.097L444.447 600.337L443.089 598.285L443.315 597.145L446.02 595.913L449.141 595.708L452.346 600.839L453.943 598.467L456.516 597.589L459.137 595.64L459.471 594.146L461.711 593.815L464.308 595.252L465.309 594.214L466.119 591.592L466.238 588.639L467.191 586.963L475.435 577.396V575.8L473.219 572.836V571.011L475.185 569.153L477.794 568.731L478.783 566.793L478.497 565.652L476.853 564.512L476.365 562.802L475.745 562.38L475.864 560.168L474.339 558.891L473.744 556.941L470.527 554.809L468.144 551.822L467.56 548.527Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M458.292 613.653H457.368C457.313 613.387 457.218 613.154 457.081 612.953C456.947 612.751 456.783 612.582 456.589 612.446C456.398 612.307 456.185 612.202 455.952 612.133C455.718 612.063 455.475 612.028 455.222 612.028C454.759 612.028 454.341 612.145 453.966 612.379C453.593 612.612 453.296 612.956 453.075 613.411C452.856 613.866 452.747 614.423 452.747 615.084C452.747 615.745 452.856 616.303 453.075 616.758C453.296 617.212 453.593 617.556 453.966 617.79C454.341 618.023 454.759 618.14 455.222 618.14C455.475 618.14 455.718 618.105 455.952 618.036C456.185 617.966 456.398 617.863 456.589 617.726C456.783 617.587 456.947 617.417 457.081 617.216C457.218 617.012 457.313 616.779 457.368 616.515H458.292C458.223 616.905 458.096 617.254 457.912 617.563C457.728 617.871 457.5 618.133 457.226 618.349C456.953 618.563 456.646 618.725 456.306 618.837C455.968 618.949 455.607 619.005 455.222 619.005C454.571 619.005 453.992 618.846 453.485 618.528C452.978 618.21 452.579 617.758 452.289 617.171C451.998 616.585 451.853 615.889 451.853 615.084C451.853 614.279 451.998 613.584 452.289 612.997C452.579 612.411 452.978 611.959 453.485 611.641C453.992 611.323 454.571 611.164 455.222 611.164C455.607 611.164 455.968 611.22 456.306 611.332C456.646 611.443 456.953 611.607 457.226 611.823C457.5 612.037 457.728 612.298 457.912 612.606C458.096 612.912 458.223 613.261 458.292 613.653ZM459.786 618.9V611.268H462.365C462.961 611.268 463.45 611.37 463.833 611.574C464.215 611.775 464.499 612.052 464.683 612.405C464.866 612.758 464.958 613.159 464.958 613.609C464.958 614.058 464.866 614.457 464.683 614.805C464.499 615.153 464.217 615.426 463.837 615.625C463.456 615.821 462.971 615.919 462.379 615.919H460.293V615.084H462.35C462.757 615.084 463.085 615.025 463.334 614.905C463.584 614.786 463.766 614.617 463.878 614.399C463.992 614.177 464.049 613.914 464.049 613.609C464.049 613.303 463.992 613.036 463.878 612.807C463.763 612.579 463.581 612.402 463.33 612.278C463.079 612.151 462.747 612.088 462.335 612.088H460.71V618.9H459.786ZM463.378 615.472L465.256 618.9H464.183L462.335 615.472H463.378ZM472.938 615.084C472.938 615.889 472.793 616.585 472.502 617.171C472.211 617.758 471.813 618.21 471.306 618.528C470.799 618.846 470.22 619.005 469.569 619.005C468.918 619.005 468.339 618.846 467.833 618.528C467.326 618.21 466.927 617.758 466.636 617.171C466.346 616.585 466.2 615.889 466.2 615.084C466.2 614.279 466.346 613.584 466.636 612.997C466.927 612.411 467.326 611.959 467.833 611.641C468.339 611.323 468.918 611.164 469.569 611.164C470.22 611.164 470.799 611.323 471.306 611.641C471.813 611.959 472.211 612.411 472.502 612.997C472.793 613.584 472.938 614.279 472.938 615.084ZM472.044 615.084C472.044 614.423 471.933 613.866 471.712 613.411C471.493 612.956 471.196 612.612 470.821 612.379C470.449 612.145 470.031 612.028 469.569 612.028C469.107 612.028 468.688 612.145 468.313 612.379C467.941 612.612 467.644 612.956 467.423 613.411C467.204 613.866 467.095 614.423 467.095 615.084C467.095 615.745 467.204 616.303 467.423 616.758C467.644 617.212 467.941 617.556 468.313 617.79C468.688 618.023 469.107 618.14 469.569 618.14C470.031 618.14 470.449 618.023 470.821 617.79C471.196 617.556 471.493 617.212 471.712 616.758C471.933 616.303 472.044 615.745 472.044 615.084ZM478.666 613.176C478.621 612.799 478.44 612.505 478.122 612.297C477.804 612.088 477.414 611.984 476.952 611.984C476.614 611.984 476.318 612.038 476.065 612.148C475.814 612.257 475.617 612.407 475.476 612.599C475.337 612.79 475.267 613.007 475.267 613.251C475.267 613.455 475.316 613.63 475.413 613.776C475.512 613.92 475.639 614.041 475.793 614.138C475.947 614.232 476.108 614.31 476.277 614.373C476.446 614.432 476.601 614.481 476.743 614.518L477.518 614.727C477.717 614.779 477.938 614.851 478.181 614.943C478.427 615.035 478.662 615.16 478.886 615.319C479.112 615.476 479.298 615.677 479.445 615.923C479.591 616.169 479.665 616.471 479.665 616.828C479.665 617.241 479.557 617.613 479.34 617.946C479.127 618.279 478.814 618.544 478.401 618.74C477.991 618.936 477.493 619.035 476.907 619.035C476.36 619.035 475.887 618.946 475.487 618.77C475.09 618.594 474.776 618.348 474.548 618.032C474.322 617.717 474.194 617.35 474.164 616.933H475.118C475.143 617.221 475.24 617.459 475.409 617.648C475.58 617.835 475.796 617.974 476.057 618.066C476.321 618.155 476.604 618.2 476.907 618.2C477.26 618.2 477.576 618.143 477.857 618.028C478.138 617.912 478.36 617.75 478.524 617.544C478.688 617.335 478.77 617.092 478.77 616.813C478.77 616.56 478.699 616.354 478.558 616.195C478.416 616.036 478.23 615.907 477.999 615.807C477.768 615.708 477.518 615.621 477.25 615.546L476.311 615.278C475.714 615.107 475.242 614.862 474.895 614.544C474.547 614.226 474.373 613.81 474.373 613.296C474.373 612.868 474.488 612.496 474.719 612.178C474.953 611.857 475.266 611.609 475.658 611.432C476.053 611.253 476.494 611.164 476.981 611.164C477.473 611.164 477.911 611.252 478.293 611.428C478.676 611.602 478.979 611.841 479.203 612.144C479.429 612.447 479.548 612.791 479.56 613.176H478.666ZM485.358 613.176C485.313 612.799 485.132 612.505 484.814 612.297C484.496 612.088 484.106 611.984 483.644 611.984C483.306 611.984 483.01 612.038 482.757 612.148C482.506 612.257 482.31 612.407 482.168 612.599C482.029 612.79 481.959 613.007 481.959 613.251C481.959 613.455 482.008 613.63 482.105 613.776C482.204 613.92 482.331 614.041 482.485 614.138C482.639 614.232 482.8 614.31 482.969 614.373C483.138 614.432 483.293 614.481 483.435 614.518L484.21 614.727C484.409 614.779 484.63 614.851 484.874 614.943C485.119 615.035 485.354 615.16 485.578 615.319C485.804 615.476 485.99 615.677 486.137 615.923C486.283 616.169 486.357 616.471 486.357 616.828C486.357 617.241 486.249 617.613 486.033 617.946C485.819 618.279 485.506 618.544 485.093 618.74C484.683 618.936 484.185 619.035 483.599 619.035C483.052 619.035 482.579 618.946 482.179 618.77C481.782 618.594 481.469 618.348 481.24 618.032C481.014 617.717 480.886 617.35 480.856 616.933H481.81C481.835 617.221 481.932 617.459 482.101 617.648C482.272 617.835 482.488 617.974 482.749 618.066C483.013 618.155 483.296 618.2 483.599 618.2C483.952 618.2 484.269 618.143 484.549 618.028C484.83 617.912 485.052 617.75 485.216 617.544C485.38 617.335 485.462 617.092 485.462 616.813C485.462 616.56 485.392 616.354 485.25 616.195C485.108 616.036 484.922 615.907 484.691 615.807C484.46 615.708 484.21 615.621 483.942 615.546L483.003 615.278C482.406 615.107 481.934 614.862 481.587 614.544C481.239 614.226 481.065 613.81 481.065 613.296C481.065 612.868 481.18 612.496 481.411 612.178C481.645 611.857 481.958 611.609 482.351 611.432C482.746 611.253 483.187 611.164 483.674 611.164C484.165 611.164 484.603 611.252 484.985 611.428C485.368 611.602 485.671 611.841 485.895 612.144C486.121 612.447 486.24 612.791 486.252 613.176H485.358ZM491.036 614.674V615.494H487.697V614.674H491.036ZM492.703 618.9V611.268H495.282C495.878 611.268 496.368 611.37 496.75 611.574C497.133 611.775 497.416 612.052 497.6 612.405C497.784 612.758 497.876 613.159 497.876 613.609C497.876 614.058 497.784 614.457 497.6 614.805C497.416 615.153 497.134 615.426 496.754 615.625C496.374 615.821 495.888 615.919 495.297 615.919H493.21V615.084H495.267C495.675 615.084 496.003 615.025 496.251 614.905C496.502 614.786 496.683 614.617 496.795 614.399C496.909 614.177 496.967 613.914 496.967 613.609C496.967 613.303 496.909 613.036 496.795 612.807C496.681 612.579 496.498 612.402 496.247 612.278C495.996 612.151 495.665 612.088 495.252 612.088H493.627V618.9H492.703ZM496.296 615.472L498.174 618.9H497.101L495.252 615.472H496.296ZM500.34 611.268V618.9H499.416V611.268H500.34ZM502.506 611.268L504.772 617.693H504.861L507.127 611.268H508.096L505.294 618.9H504.34L501.537 611.268H502.506ZM509.285 618.9V611.268H513.891V612.088H510.209V614.667H513.653V615.487H510.209V618.081H513.951V618.9H509.285ZM515.557 618.9V611.268H518.136C518.732 611.268 519.221 611.37 519.604 611.574C519.987 611.775 520.27 612.052 520.454 612.405C520.638 612.758 520.729 613.159 520.729 613.609C520.729 614.058 520.638 614.457 520.454 614.805C520.27 615.153 519.988 615.426 519.608 615.625C519.228 615.821 518.742 615.919 518.151 615.919H516.064V615.084H518.121C518.528 615.084 518.856 615.025 519.105 614.905C519.356 614.786 519.537 614.617 519.649 614.399C519.763 614.177 519.82 613.914 519.82 613.609C519.82 613.303 519.763 613.036 519.649 612.807C519.534 612.579 519.352 612.402 519.101 612.278C518.85 612.151 518.518 612.088 518.106 612.088H516.481V618.9H515.557ZM519.149 615.472L521.028 618.9H519.954L518.106 615.472H519.149ZM526.443 613.176C526.399 612.799 526.217 612.505 525.899 612.297C525.581 612.088 525.191 611.984 524.729 611.984C524.391 611.984 524.096 612.038 523.842 612.148C523.591 612.257 523.395 612.407 523.253 612.599C523.114 612.79 523.045 613.007 523.045 613.251C523.045 613.455 523.093 613.63 523.19 613.776C523.289 613.92 523.416 614.041 523.57 614.138C523.724 614.232 523.886 614.31 524.055 614.373C524.224 614.432 524.379 614.481 524.52 614.518L525.296 614.727C525.494 614.779 525.715 614.851 525.959 614.943C526.205 615.035 526.44 615.16 526.663 615.319C526.889 615.476 527.076 615.677 527.222 615.923C527.369 616.169 527.442 616.471 527.442 616.828C527.442 617.241 527.334 617.613 527.118 617.946C526.904 618.279 526.591 618.544 526.179 618.74C525.769 618.936 525.271 619.035 524.684 619.035C524.138 619.035 523.665 618.946 523.265 618.77C522.867 618.594 522.554 618.348 522.325 618.032C522.099 617.717 521.971 617.35 521.942 616.933H522.896C522.92 617.221 523.017 617.459 523.186 617.648C523.358 617.835 523.574 617.974 523.835 618.066C524.098 618.155 524.381 618.2 524.684 618.2C525.037 618.2 525.354 618.143 525.635 618.028C525.915 617.912 526.138 617.75 526.302 617.544C526.466 617.335 526.548 617.092 526.548 616.813C526.548 616.56 526.477 616.354 526.335 616.195C526.194 616.036 526.007 615.907 525.776 615.807C525.545 615.708 525.296 615.621 525.027 615.546L524.088 615.278C523.492 615.107 523.02 614.862 522.672 614.544C522.324 614.226 522.15 613.81 522.15 613.296C522.15 612.868 522.266 612.496 522.497 612.178C522.73 611.857 523.043 611.609 523.436 611.432C523.831 611.253 524.272 611.164 524.759 611.164C525.251 611.164 525.688 611.252 526.071 611.428C526.453 611.602 526.756 611.841 526.98 612.144C527.206 612.447 527.325 612.791 527.338 613.176H526.443Z"
            fill="#00344D"
          />
          <path
            d="M422.287 700.733L423.478 701.303L424.575 701.086L425.623 700.927L426.016 701.246L421.751 702.101L421.167 701.428L422.359 700.733H422.287ZM470.313 692.102L471.361 694.485L470.456 695.42L469.181 695.67L468.919 694.257L469.586 694.143L470.003 693.116L470.313 692.102ZM408.884 679.48L408.741 677.37L406.608 673.539L407.406 671.681V670.347L406.703 669.583L406.441 667.907L407.001 667.165L406.894 666.287L409.896 664.075L411.302 660.78L410.516 657.941V655.193L411.958 648.569L410.683 646.357L410.766 645.502L412.077 644.361L419.332 644.544L420.202 643.518L421.036 640.736L418.379 640.918L417.998 640.405L420.19 634.59L419.559 630.588L419.904 629.55L422.787 629.391L426.838 630.428L428.256 632.104L428.947 634.51L432.223 636.95L435.25 637.908L438.454 640.884L437.442 640.998L436.06 643.826L436.846 645.867L437.847 646.22L438.776 648.432L444.459 647.793L450.416 650.849L450.893 653.244L450.166 660.199L452.108 666.048L456.171 671.646L459.971 674.839L464.463 679.776L468.835 682.98L469.538 684.12L469.026 686.583L469.967 687.085V689.935L469.371 690.448L468.883 689.684L468.8 690.346L470.217 691.68L469.502 693.732L468.621 693.949L468.74 695.089L467.549 696.4L467.835 696.594L466.584 699.308L460.352 698.589L453.514 698.51L440.754 699.137L426.397 701.052L425.778 700.528L423.61 700.938L422.502 700.391L421.453 700.801L420.321 700.699L420.917 701.622L421.239 702.113L417.283 703.618L416.092 701.679L414.698 700.938L413.673 700.722L412.482 699.513L412.935 698.475L412.827 698.338L412.196 698.909L411.6 698.475L410.873 697.141V696.412L411.481 696.047L410.79 690.859L411.981 685.99L411.231 683.368L408.848 679.411L408.884 679.48Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M418.13 673.113H417.355L419.597 667.008H420.36L422.602 673.113H421.827L420.003 667.973H419.955L418.13 673.113ZM418.417 670.728H421.541V671.384H418.417V670.728ZM423.553 673.113V667.008H424.293V670.037H424.364L427.107 667.008H428.073L425.509 669.762L428.073 673.113H427.179L425.056 670.275L424.293 671.134V673.113H423.553ZM430.139 673.113L428.47 667.008H429.221L430.497 671.98H430.557L431.856 667.008H432.691L433.991 671.98H434.051L435.327 667.008H436.078L434.408 673.113H433.645L432.298 668.248H432.25L430.902 673.113H430.139ZM436.774 673.113H435.999L438.241 667.008H439.004L441.246 673.113H440.471L438.646 667.973H438.599L436.774 673.113ZM437.06 670.728H440.185V671.384H437.06V670.728ZM442.936 667.008V673.113H442.197V667.008H442.936ZM444.419 673.113V667.008H446.554C446.979 667.008 447.33 667.081 447.606 667.228C447.882 667.373 448.088 667.569 448.223 667.815C448.358 668.06 448.426 668.331 448.426 668.629C448.426 668.892 448.379 669.108 448.286 669.279C448.194 669.45 448.073 669.585 447.922 669.685C447.773 669.784 447.611 669.858 447.436 669.905V669.965C447.623 669.977 447.811 670.043 448 670.162C448.188 670.281 448.346 670.452 448.474 670.675C448.601 670.897 448.664 671.169 448.664 671.491C448.664 671.798 448.595 672.073 448.456 672.317C448.317 672.562 448.097 672.756 447.797 672.899C447.497 673.042 447.106 673.113 446.625 673.113H444.419ZM445.158 672.457H446.625C447.108 672.457 447.451 672.364 447.654 672.177C447.858 671.988 447.961 671.76 447.961 671.491C447.961 671.285 447.908 671.094 447.803 670.919C447.697 670.742 447.547 670.601 447.353 670.496C447.158 670.388 446.927 670.335 446.661 670.335H445.158V672.457ZM445.158 669.691H446.53C446.752 669.691 446.953 669.647 447.132 669.56C447.313 669.472 447.456 669.349 447.561 669.19C447.669 669.031 447.722 668.844 447.722 668.629C447.722 668.361 447.629 668.133 447.442 667.947C447.255 667.758 446.959 667.663 446.554 667.663H445.158V669.691ZM455.031 670.06C455.031 670.704 454.915 671.261 454.682 671.73C454.45 672.199 454.131 672.561 453.725 672.815C453.32 673.07 452.857 673.197 452.336 673.197C451.815 673.197 451.352 673.07 450.947 672.815C450.541 672.561 450.222 672.199 449.99 671.73C449.757 671.261 449.641 670.704 449.641 670.06C449.641 669.416 449.757 668.86 449.99 668.391C450.222 667.922 450.541 667.56 450.947 667.306C451.352 667.051 451.815 666.924 452.336 666.924C452.857 666.924 453.32 667.051 453.725 667.306C454.131 667.56 454.45 667.922 454.682 668.391C454.915 668.86 455.031 669.416 455.031 670.06ZM454.315 670.06C454.315 669.532 454.227 669.086 454.05 668.722C453.875 668.358 453.638 668.083 453.338 667.896C453.039 667.709 452.706 667.616 452.336 667.616C451.966 667.616 451.631 667.709 451.331 667.896C451.033 668.083 450.795 668.358 450.619 668.722C450.444 669.086 450.356 669.532 450.356 670.06C450.356 670.589 450.444 671.035 450.619 671.399C450.795 671.763 451.033 672.038 451.331 672.225C451.631 672.412 451.966 672.505 452.336 672.505C452.706 672.505 453.039 672.412 453.338 672.225C453.638 672.038 453.875 671.763 454.05 671.399C454.227 671.035 454.315 670.589 454.315 670.06ZM456.274 667.008H457.157L459.232 672.076H459.303L461.378 667.008H462.261V673.113H461.569V668.474H461.509L459.601 673.113H458.933L457.025 668.474H456.966V673.113H456.274V667.008Z"
            fill="#00344D"
          />
          <path
            d="M365.326 541.435L368.579 535.734L369.663 536.019L369.877 538.619L370.759 538.676L372.344 540.956L373.166 541.344L374.643 540.968L380.6 534.822L387.748 530.421L395.111 521.961L398.018 520.923L400.568 518.529L404.511 517.662L407.418 518.517L408.741 520.364L408.586 520.969L411.851 528.391L415.294 532.211L419.559 535.358L423.038 537.091L425.54 536.259L428.173 533.853L431.521 534.252L433.332 535.563L435.023 538.003L436.096 544.411L433.379 551.731L431.247 552.142L423.562 551.515L425.325 557.102L425.778 560.853L426.529 562.118V568.754L423.217 575.801V577.203L424.503 578.423L425.242 581.331L426.433 588.902L425.48 590.874L422.299 593.987L422.478 596.997L423.431 600.327L422.657 601.968L421.787 601.889L419.273 599.027L418.356 598.924L415.973 596.986L411.648 598.126L411.255 596.461L408.812 594.933L405.584 594.626L399.829 595.64L399.114 594.762L398.126 594.569V593.953L396.791 593.109L395.504 593.007L393.527 594.147L390.679 592.55L389.774 591.41L389.559 589.688L387.319 585.367L387.736 582.916L386.152 582.197L385.449 579.256L384.722 579.107L382.447 580.362L381.589 579.518L382.185 577.671L381.696 576.109L382.673 575.778L383.03 574.638L381.47 572.529L379.873 568.378L378.181 566.326L373.595 565.003L373.13 564.387L373.642 561.708L374.381 560.762L374.095 559.621L376.299 556.794L378.312 555.494L379.206 554.262L380.695 550.329L380.266 549.428L375.822 547.49L373.38 547.398L370.533 545.871L365.97 546.019L365.862 541.891L365.326 541.435Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M386.462 563.801V557.695H390.147V558.351H387.201V560.414H389.956V561.07H387.201V563.145H390.195V563.801H386.462ZM396.321 557.695V563.801H395.606L392.279 559.007H392.219V563.801H391.48V557.695H392.195L395.534 562.501H395.594V557.695H396.321ZM401.808 557.695H402.547V561.738C402.547 562.155 402.449 562.528 402.252 562.856C402.057 563.182 401.782 563.439 401.426 563.628C401.07 563.815 400.653 563.908 400.174 563.908C399.695 563.908 399.277 563.815 398.922 563.628C398.566 563.439 398.29 563.182 398.093 562.856C397.898 562.528 397.801 562.155 397.801 561.738V557.695H398.54V561.678C398.54 561.976 398.606 562.242 398.737 562.474C398.868 562.705 399.055 562.887 399.297 563.02C399.542 563.151 399.834 563.216 400.174 563.216C400.514 563.216 400.806 563.151 401.05 563.02C401.295 562.887 401.482 562.705 401.611 562.474C401.742 562.242 401.808 561.976 401.808 561.678V557.695ZM408.197 559.603C408.132 559.402 408.045 559.222 407.938 559.063C407.833 558.902 407.706 558.765 407.559 558.652C407.414 558.539 407.249 558.452 407.064 558.393C406.88 558.333 406.677 558.303 406.456 558.303C406.095 558.303 405.766 558.397 405.469 558.583C405.173 558.77 404.938 559.046 404.763 559.409C404.588 559.773 404.5 560.219 404.5 560.748C404.5 561.277 404.589 561.723 404.766 562.087C404.943 562.45 405.182 562.726 405.484 562.912C405.786 563.099 406.126 563.193 406.504 563.193C406.854 563.193 407.162 563.118 407.428 562.969C407.696 562.818 407.905 562.605 408.054 562.331C408.205 562.055 408.281 561.73 408.281 561.356L408.507 561.404H406.671V560.748H408.996V561.404C408.996 561.907 408.889 562.344 408.674 562.716C408.462 563.087 408.168 563.375 407.792 563.58C407.418 563.783 406.989 563.884 406.504 563.884C405.963 563.884 405.488 563.757 405.079 563.503C404.671 563.248 404.353 562.887 404.125 562.417C403.898 561.948 403.785 561.392 403.785 560.748C403.785 560.265 403.85 559.831 403.979 559.445C404.11 559.058 404.295 558.728 404.533 558.455C404.772 558.183 405.054 557.974 405.38 557.829C405.706 557.684 406.065 557.612 406.456 557.612C406.778 557.612 407.078 557.66 407.357 557.758C407.637 557.853 407.886 557.989 408.105 558.166C408.326 558.341 408.509 558.551 408.656 558.795C408.804 559.038 408.905 559.307 408.961 559.603H408.197ZM414.27 557.695H415.009V561.738C415.009 562.155 414.911 562.528 414.714 562.856C414.519 563.182 414.244 563.439 413.888 563.628C413.532 563.815 413.115 563.908 412.636 563.908C412.157 563.908 411.739 563.815 411.384 563.628C411.028 563.439 410.752 563.182 410.555 562.856C410.36 562.528 410.263 562.155 410.263 561.738V557.695H411.002V561.678C411.002 561.976 411.068 562.242 411.199 562.474C411.33 562.705 411.517 562.887 411.759 563.02C412.004 563.151 412.296 563.216 412.636 563.216C412.976 563.216 413.268 563.151 413.512 563.02C413.757 562.887 413.944 562.705 414.073 562.474C414.204 562.242 414.27 561.976 414.27 561.678V557.695Z"
            fill="#00344D"
          />
          <path
            d="M365.325 541.436L365.849 541.892L365.956 546.019L370.519 545.871L373.426 547.479L375.869 547.57L380.313 549.508L380.742 550.409L379.252 554.343L378.359 555.574L376.345 556.874L374.105 559.702L374.391 560.842L373.653 561.788L373.14 564.468L373.605 565.083L378.192 566.406L379.884 568.458L381.48 572.609L383.041 574.718L382.684 575.858L381.707 576.189L382.195 577.751L381.599 579.598L382.457 580.442L384.709 579.153L385.436 579.302L386.139 582.243L387.723 582.962L387.306 585.413L389.546 589.734L389.761 591.456L390.666 592.596L393.513 594.193L395.491 593.052L396.778 593.155L398.112 593.999V594.614L399.101 594.808L393.859 597.442L392.239 598.924L390.726 601.456L384.387 603.075L377.978 601.649L370.46 602.972L368.339 604.112L367.231 608.16L364.396 613.428L361.203 613.736L355.829 611.546L353.899 612.459L350.277 616.848L347.787 617.795L344.928 617.555L343.605 616.096L344.797 614.762L347.084 610.315L347.489 607.305L349.598 601.957L352.577 596.769L353.029 589.928L354.554 585.767L353.089 581.468L351.326 573.156L351.421 571.594L350.075 570.305L347.537 559.394L347.454 559.063L349.443 558.185L353.721 558.938L355.424 557.923L357.616 555.061L357.688 551.948L359.165 547.251L361.834 544.617L363.669 543.636L365.325 541.436Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M361.282 579.996H360.604L362.566 574.654H363.233L365.195 579.996H364.517L362.92 575.499H362.879L361.282 579.996ZM361.533 577.909H364.266V578.483H361.533V577.909ZM370.264 574.654V579.996H369.638L366.726 575.801H366.674V579.996H366.027V574.654H366.653L369.575 578.859H369.627V574.654H370.264ZM371.777 579.996H371.099L373.061 574.654H373.729L375.69 579.996H375.012L373.416 575.499H373.374L371.777 579.996ZM372.028 577.909H374.762V578.483H372.028V577.909ZM376.522 574.654H377.295L379.11 579.088H379.173L380.989 574.654H381.761V579.996H381.155V575.937H381.103L379.434 579.996H378.849L377.18 575.937H377.128V579.996H376.522V574.654ZM383.058 579.996V574.654H384.926C385.298 574.654 385.605 574.718 385.846 574.847C386.088 574.974 386.268 575.145 386.386 575.361C386.505 575.574 386.564 575.812 386.564 576.073C386.564 576.302 386.523 576.492 386.441 576.641C386.361 576.791 386.255 576.909 386.123 576.996C385.993 577.083 385.851 577.147 385.698 577.189V577.241C385.861 577.252 386.026 577.309 386.191 577.414C386.356 577.518 386.494 577.667 386.606 577.862C386.717 578.057 386.773 578.295 386.773 578.577C386.773 578.845 386.712 579.086 386.59 579.3C386.468 579.513 386.276 579.683 386.013 579.808C385.751 579.933 385.409 579.996 384.988 579.996H383.058ZM383.705 579.422H384.988C385.411 579.422 385.711 579.34 385.888 579.177C386.067 579.012 386.157 578.812 386.157 578.577C386.157 578.396 386.111 578.229 386.019 578.076C385.926 577.921 385.795 577.798 385.625 577.706C385.454 577.612 385.253 577.565 385.02 577.565H383.705V579.422ZM383.705 577.001H384.905C385.1 577.001 385.275 576.963 385.432 576.887C385.59 576.81 385.715 576.702 385.807 576.563C385.901 576.424 385.948 576.261 385.948 576.073C385.948 575.838 385.866 575.639 385.703 575.475C385.54 575.31 385.28 575.227 384.926 575.227H383.705V577.001ZM387.836 579.996V574.654H389.641C390.058 574.654 390.401 574.725 390.669 574.867C390.936 575.008 391.135 575.202 391.263 575.449C391.392 575.696 391.456 575.977 391.456 576.292C391.456 576.607 391.392 576.886 391.263 577.129C391.135 577.373 390.937 577.564 390.671 577.703C390.405 577.84 390.065 577.909 389.651 577.909H388.19V577.325H389.63C389.916 577.325 390.145 577.283 390.319 577.2C390.495 577.116 390.622 576.998 390.7 576.845C390.78 576.69 390.82 576.506 390.82 576.292C390.82 576.078 390.78 575.891 390.7 575.731C390.62 575.571 390.492 575.447 390.316 575.361C390.141 575.272 389.909 575.227 389.62 575.227H388.483V579.996H387.836ZM390.35 577.596L391.665 579.996H390.914L389.62 577.596H390.35ZM392.754 579.996H392.075L394.037 574.654H394.705L396.667 579.996H395.988L394.392 575.499H394.35L392.754 579.996ZM393.004 577.909H395.738V578.483H393.004V577.909Z"
            fill="#00344D"
          />
          <path
            d="M351.683 694.677L351.433 693.97L350.623 694.084L345.857 691.12L344.427 686.126L342.783 683.994H340.4L332.609 686.89L331.417 686.593L331 684.381L331.501 682.717L327.557 681.075L326.961 680.128L327.045 675.18L329.309 672.136L330.214 669.798V668.35L328.677 668.533L327.676 667.643L329.261 662.581L334.61 653.642L337.91 653.835L338.566 653.265L339.459 650.426L341.294 649.525L341.02 647.462L342.902 646.242L344.034 644.554V642.342L343.284 640.586L342.378 639.925L340.091 638.979L336.588 639.537L335.397 639.218L336.314 642.034L334.884 643.003L328.832 645.478L324.674 644.976L321.409 645.535L319.027 650.21L316.513 650.802L315.572 650.118L313.82 650.027L313.391 651.11L313.701 653.744L310.329 655.523L308.399 656.161L304.825 655.888L303.36 658.168L300.608 658.875L298.356 658.111L297.164 656.218L294.651 654.759L293.757 655.329L291.898 658.818L287.967 660.688L284.845 660.209L275.934 664.884L274.814 664.462L272.05 664.918L270.858 663.664L267.653 661.84L264.02 661.03L260.564 659.137L258.063 656.743L257.395 657.564L256.538 656.914L254.834 657.518L254.405 656.948L252.463 657.906L255.275 663.162L257.55 669.787L257.145 670.687L258.277 672.421L258.694 674.541L263.531 682.261L263.757 683.902L264.877 684.529V684.723V685.978L273.813 697.813L275.231 698.52V699.375L278.531 700.914L278.209 701.382L279.401 702.237L279.544 702.978L282.594 704.791L282.82 704.346L283.189 704.734L282.927 705.007V705.395L286.037 707.858H286.609L286.442 706.98L285.906 706.741L287.788 706.216L286.883 707.014L287.276 707.835L286.966 708.143L287.049 708.725L289.813 710.663L295.854 713.354L296.08 711.073L295.139 710.492L294.484 709.067L294.889 709.203L295.234 710.218L296.176 710.469L296.033 709.671H296.521V710.469L297.141 710.663L297.45 711.541L296.712 712.886L297.021 713.377L296.616 714.859L297.093 715.189L303.264 716.695L303.491 714.152L304.265 713.491L304.718 717.869L314.654 717.071L313.892 714.334L315.083 710.914L315.858 709.66L315.727 708.063L313.451 706.752L314.023 706.695L315.441 707.003L316.632 708.804L317.347 707.516L316.692 706.615L316.799 704.175L315.798 702.636L316.167 701.792L316.37 702.932L317.192 703.559V703.993L318.074 706.273L317.954 709.808L321.195 706.991L320.504 706.273L320.623 704.061L322.899 703.377L323.494 702.659L324.317 704.494L324.459 705.965L323.888 707.105L324.602 708.611L324.662 710.446L326.259 710.743L327.545 712.464H328.117L327.891 712.841L328.153 713.331L330.738 712.784L330.965 713.171L330.226 713.912L332.049 714.813L342.128 713.776V713.228L341.651 712.647L341.568 711.769L341.449 711.381L342.247 710.401L342.962 709.739L342.342 712.02L342.605 712.464L344.987 714.471L346.179 713.331L350.384 712.898L349.789 710.081L349.682 709.648L349.229 708.36L347.859 707.505L347.632 706.364V706.148L347.978 704.939L347.346 702.374L346.858 701.747L347.275 701.336L348.18 702.362L349.67 707.151L350.122 706.49L349.348 700.527L351.373 696.661L351.683 694.575V694.677ZM329.297 715.281L319.503 716.421L316.167 716.307L315.905 715.509L317.526 712.635H317.704H318.24L318.407 711.153L320.79 708.656L320.933 708.303L321.445 707.288L321.981 707.071L321.278 706.193L321.064 704.711L321.719 704.312L322.911 704.095L323.983 705.623L323.387 707.14L324.317 708.987L324.054 710.777L325.996 711.279L326.771 712.328L329.285 715.269L329.297 715.281Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M271.377 683.094V675.462H274.046C274.577 675.462 275.016 675.553 275.361 675.737C275.706 675.919 275.964 676.163 276.133 676.471C276.301 676.777 276.386 677.116 276.386 677.489C276.386 677.817 276.328 678.088 276.211 678.301C276.097 678.515 275.945 678.684 275.756 678.808C275.57 678.932 275.367 679.024 275.149 679.084V679.158C275.382 679.173 275.617 679.255 275.853 679.404C276.089 679.553 276.287 679.767 276.446 680.045C276.605 680.324 276.684 680.664 276.684 681.066C276.684 681.449 276.597 681.793 276.423 682.099C276.249 682.404 275.975 682.647 275.6 682.825C275.224 683.004 274.736 683.094 274.135 683.094H271.377ZM272.302 682.274H274.135C274.739 682.274 275.167 682.157 275.421 681.924C275.677 681.688 275.805 681.402 275.805 681.066C275.805 680.808 275.739 680.57 275.607 680.351C275.475 680.13 275.288 679.953 275.044 679.822C274.801 679.688 274.513 679.621 274.18 679.621H272.302V682.274ZM272.302 678.816H274.016C274.294 678.816 274.545 678.761 274.769 678.652C274.995 678.542 275.174 678.388 275.305 678.189C275.439 677.991 275.506 677.757 275.506 677.489C275.506 677.153 275.39 676.869 275.156 676.635C274.923 676.399 274.552 676.281 274.046 676.281H272.302V678.816ZM278.516 683.094H277.547L280.349 675.462H281.303L284.106 683.094H283.137L280.856 676.669H280.796L278.516 683.094ZM278.873 680.112H282.779V680.932H278.873V680.112ZM283.86 675.462H284.918L287.035 679.024H287.124L289.241 675.462H290.299L287.542 679.948V683.094H286.617V679.948L283.86 675.462ZM291.495 683.094V675.462H296.101V676.281H292.419V678.86H295.862V679.68H292.419V682.274H296.16V683.094H291.495ZM297.767 683.094V675.462H298.691V682.274H302.239V683.094H297.767ZM307.844 677.37C307.799 676.992 307.617 676.699 307.299 676.49C306.981 676.281 306.591 676.177 306.129 676.177C305.791 676.177 305.496 676.232 305.242 676.341C304.991 676.45 304.795 676.601 304.654 676.792C304.514 676.983 304.445 677.201 304.445 677.444C304.445 677.648 304.493 677.823 304.59 677.97C304.69 678.114 304.816 678.234 304.97 678.331C305.124 678.426 305.286 678.504 305.455 678.566C305.624 678.625 305.779 678.674 305.921 678.711L306.696 678.92C306.894 678.972 307.116 679.044 307.359 679.136C307.605 679.228 307.84 679.353 308.063 679.512C308.289 679.669 308.476 679.87 308.622 680.116C308.769 680.362 308.842 680.664 308.842 681.022C308.842 681.434 308.734 681.807 308.518 682.14C308.304 682.473 307.991 682.737 307.579 682.934C307.169 683.13 306.671 683.228 306.085 683.228C305.538 683.228 305.065 683.14 304.665 682.963C304.267 682.787 303.954 682.541 303.726 682.225C303.499 681.91 303.372 681.543 303.342 681.126H304.296C304.321 681.414 304.417 681.653 304.586 681.842C304.758 682.028 304.974 682.167 305.235 682.259C305.498 682.348 305.781 682.393 306.085 682.393C306.437 682.393 306.754 682.336 307.035 682.222C307.316 682.105 307.538 681.943 307.702 681.737C307.866 681.529 307.948 681.285 307.948 681.007C307.948 680.753 307.877 680.547 307.735 680.388C307.594 680.229 307.407 680.1 307.176 680.001C306.945 679.901 306.696 679.814 306.427 679.74L305.488 679.471C304.892 679.3 304.42 679.055 304.072 678.737C303.724 678.419 303.55 678.003 303.55 677.489C303.55 677.062 303.666 676.689 303.897 676.371C304.131 676.05 304.444 675.802 304.836 675.626C305.231 675.447 305.672 675.357 306.159 675.357C306.651 675.357 307.088 675.445 307.471 675.622C307.853 675.796 308.157 676.034 308.38 676.337C308.606 676.64 308.725 676.985 308.738 677.37H307.844ZM310.675 683.094H309.706L312.508 675.462H313.462L316.265 683.094H315.296L313.015 676.669H312.956L310.675 683.094ZM311.033 680.112H314.938V680.932H311.033V680.112Z"
            fill="#00344D"
          />
          <path
            d="M383.256 700.674L381.517 702.259V703.137L380.778 702.863L381.04 701.244L382.756 700.309L383.232 700.674H383.256ZM379.515 698.576L377.466 697.436L376.811 697.607L376.155 697.778L375.905 696.991L376.93 696.091L376.561 695.327L376.93 694.586L376.846 693.388L376.167 692.465L375.083 692.271L374.821 692.453L373.975 690.515L373.653 690.321L373.82 689.797L372.796 688.816L372.474 689.227L371.283 689.398L371.056 690.333L371.735 691.473L372.331 692.613L372.82 694.894L372.248 694.631L371.723 695.521L372.998 699.488L372.831 700.937L374.225 705.497L373.939 705.748L374.857 706.273L377.311 705.782L377.788 705.269L377.943 704.608L380.027 705.167V702.624L380.826 700.845L379.444 698.565L379.515 698.576ZM374.988 686.878L375.476 687.402L378.074 687.505L378.3 686.467L377.811 686.114L375.798 686.456L374.988 686.878ZM376.489 684.119L376.918 685.407L377.537 685.624L377.192 683.457L376.489 684.119ZM385.067 695.224L383.352 691.963L382.16 691.165L380.218 690.241L379.896 690.105L378.896 690.846L379.67 690.948L381.231 692.237L381.398 692.476L381.124 693.001L381.743 694.061L381.886 696.25L383.423 697.619L384.507 697.812L385.305 696.205L385.067 695.224ZM392.12 702.202L389.642 699.215L388.081 701.073L389.023 701.974L389.988 701.7L390.44 702.738H391.346L391.608 703.445L393.002 702.875L394.289 704.106L396.505 702.407L395.766 701.78L392.12 702.202ZM368.399 694.665L367.065 695.27L366.731 696.775L368.09 697.231L369.805 698.462L370.997 701.062L370.651 697.231L370.222 697.06L370.532 695.361L368.364 694.665H368.399ZM390 697.584L387.212 695.692L385.365 693.012V692.704L384.793 690.766L384.221 691.256L383.745 690.846L384.257 690.082V688.383L384.114 688.303L383.435 690.413L380.754 689.614L380.123 689.5L379.074 688.269L378.991 686.536L378.562 686.205L378.479 685.681L378.169 685.487L377.99 684.746L378.586 683.845L377.394 682.454L376.429 683.058L376.024 684.073L376.799 685.829L374.345 686.707L373.856 687.117L372.748 687.551H372.128L370.937 688.429L370.389 689.136L370.282 687.414L369.591 688.258L369.329 688.839L370.52 690.72L371.175 693.514L369.615 694.027L368.983 694.266L367.339 692.431L366.493 690.264L364.694 687.539L362.907 686.958L363.574 685.19L362.764 682.659L363.955 681.736L364.372 681.188L363.741 680.424L361.585 680.151L359.428 678.885L359.094 680.698L358.034 681.348L357.641 680.47L356.128 680.31L355.723 679.923L354.96 680.139H354.043L353.304 679.147L353.078 678.988L352.423 679.455L352.649 680.595L352.482 680.972L353.03 681.325L354.543 682.773L354.4 684.518L355.592 689.808L359.428 693.582V694.928L357.248 696.661L357.129 697.322L359.297 704.802L359.952 708.587L362.824 711.415L362.478 711.791L353.852 712.624L351.184 711.768L351.076 708.678L350.79 705.782L350.957 705.258V705.064L350.409 701.974L350.183 701.119L352.494 696.934L352.268 693.89L351.47 694.061L350.659 694.175L345.894 691.211L344.464 686.217L342.82 684.084H340.437L332.645 686.981L331.454 686.684L331.037 684.472L331.537 682.807L327.594 681.165L326.998 680.219L327.081 675.271L329.345 672.226L330.251 669.946V668.498L328.714 668.68L327.713 667.791L329.297 662.728L334.647 653.789L337.947 653.983L338.602 653.413L339.496 650.574L341.331 649.673L341.057 647.609L342.939 646.389L344.071 644.702V642.49L343.32 640.734L342.415 640.073L340.127 639.126L336.625 639.685L335.433 639.366L334.754 638.226L335.004 637.724L339.198 635.66L339.424 629.617L340.258 627.93L342.701 626.31L343.761 624.315L344.738 620.689L343.439 616.653L343.713 616.254L345.036 617.713L347.895 617.953L344.619 632.867L346.418 633.368L350.552 632.604L353.078 633.494L353.602 635.386L352.983 640.654L351.684 643.801L351.994 645.363L354.186 646.845L356.235 650.734L358.809 652.615L361.358 653.082L369.364 652.923L374.964 654.2L379.908 652.98H382.446L387.819 654.268L390.881 653.128L391.536 653.185L392.323 655.146L392.394 658.316L389.535 663.093L385.472 668.03L383.84 672.261L383.649 673.503L384.364 674.769L386.092 676.377L388.236 676.684L391.965 676.012L393.288 675.282L396.612 675.145L400.52 676.536L402.676 676.057L406.179 677.654L408.979 679.695L411.361 683.674L412.112 686.296L410.921 691.165L411.612 696.353L411.004 696.718V697.448L411.731 698.782L410.277 699.66L409.276 698.839L409.074 697.698L407.62 697.391L406.965 697.094L406.655 697.619L404.999 698.964L404.308 698.69L403.999 698.28H403.546L402.7 698.725L400.913 696.034L399.4 697.174L398.292 696.763L396.385 696.193L395.611 695.053L394.813 695.27L393.931 694.289L393.193 694.871L392.966 695.771L391.906 696.148L392.311 697.379L392.633 698.519L392.919 699.203L393.848 699.888L394.765 699.614L395.444 699.705L396.469 699.352L396.266 701.347L394.158 701.541L392.442 702.145L391.56 700.777L391.441 700.401L390.19 699.067L390.011 697.995L390.143 697.744L390 697.584ZM415.639 702.499L414.817 702.054H414.304L413.256 701.643L412.779 701.233L412.279 701.757L411.898 701.609L412.315 700.994L411.266 699.295L410.194 699.899L409.002 698.873L408.574 698.485L408.371 697.904H406.715L406.405 698.223L404.94 699.215H403.355H402.807L402.295 698.953L401.544 698.234L400.913 697.881L400.806 696.957L399.328 697.345H398.137V696.866L396.648 696.478L395.563 695.954L393.967 695.851L393.395 696.125L393.121 696.786V697.687H395.17L395.277 697.778L396.671 698.998L396.945 699.762L397.374 701.324L398.375 701.678L398.566 701.222L398.971 701.541H400.246L400.317 701.792L398.125 702.635L397.613 702.806L396.791 705.543L403.308 706.421L408.288 705.372L415.353 705.212L415.126 703.821L415.746 702.499H415.639ZM357.653 681.838L358.594 681.644L359.69 680.744L359.786 679.467L361.322 680.493L363.229 681.211L362.037 682.545L362.55 684.654L362.871 685.019V685.681L362.156 686.752L362.419 687.482L363.61 687.836L365.111 689.375L367.577 694.346L366.469 695.042L365.969 695.999L366.148 697.037L369.901 699.146L370.615 702.453L371.664 703.958L371.521 705.543L372.093 707.379L373.856 708.667L372.522 710.252L371.33 710.662L370.306 710.092L369.591 710.56L361.99 708.975L361.025 706.079L361.656 705.372H360.941L359.321 700.937L358.356 698.77L358.475 696.421L360.417 694.643L360.214 693.103L358.058 691.211L356.045 689.899L355.139 685.27L354.794 684.609V682.534L353.876 681.302L355.354 680.459L356.402 681.177H357.2L357.558 681.815L357.653 681.838Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M338.252 671.143V663.51H340.831C341.427 663.51 341.917 663.612 342.299 663.816C342.682 664.017 342.965 664.294 343.149 664.647C343.333 665 343.425 665.401 343.425 665.851C343.425 666.3 343.333 666.699 343.149 667.047C342.965 667.395 342.683 667.668 342.303 667.867C341.923 668.063 341.437 668.161 340.846 668.161H338.759V667.326H340.816C341.224 667.326 341.552 667.267 341.8 667.148C342.051 667.028 342.232 666.859 342.344 666.641C342.458 666.42 342.516 666.156 342.516 665.851C342.516 665.545 342.458 665.278 342.344 665.05C342.23 664.821 342.047 664.645 341.796 664.52C341.545 664.394 341.214 664.33 340.801 664.33H339.177V671.143H338.252ZM341.845 667.714L343.723 671.143H342.65L340.801 667.714H341.845ZM345.889 663.51V671.143H344.965V663.51H345.889ZM348.055 663.51L350.321 669.935H350.411L352.676 663.51H353.645L350.843 671.143H349.889L347.086 663.51H348.055ZM354.834 671.143V663.51H359.44V664.33H355.758V666.909H359.202V667.729H355.758V670.323H359.5V671.143H354.834ZM361.106 671.143V663.51H363.685C364.281 663.51 364.771 663.612 365.153 663.816C365.536 664.017 365.819 664.294 366.003 664.647C366.187 665 366.279 665.401 366.279 665.851C366.279 666.3 366.187 666.699 366.003 667.047C365.819 667.395 365.537 667.668 365.157 667.867C364.777 668.063 364.291 668.161 363.7 668.161H361.613V667.326H363.67C364.077 667.326 364.405 667.267 364.654 667.148C364.905 667.028 365.086 666.859 365.198 666.641C365.312 666.42 365.369 666.156 365.369 665.851C365.369 665.545 365.312 665.278 365.198 665.05C365.084 664.821 364.901 664.645 364.65 664.52C364.399 664.394 364.067 664.33 363.655 664.33H362.03V671.143H361.106ZM364.698 667.714L366.577 671.143H365.503L363.655 667.714H364.698ZM371.992 665.418C371.948 665.041 371.766 664.748 371.448 664.539C371.13 664.33 370.74 664.226 370.278 664.226C369.94 664.226 369.645 664.281 369.391 664.39C369.14 664.499 368.944 664.65 368.802 664.841C368.663 665.032 368.594 665.25 368.594 665.493C368.594 665.697 368.642 665.872 368.739 666.018C368.838 666.163 368.965 666.283 369.119 666.38C369.273 666.474 369.435 666.553 369.604 666.615C369.773 666.674 369.928 666.723 370.07 666.76L370.845 666.969C371.043 667.021 371.265 667.093 371.508 667.185C371.754 667.277 371.989 667.402 372.212 667.561C372.438 667.718 372.625 667.919 372.771 668.165C372.918 668.411 372.991 668.713 372.991 669.071C372.991 669.483 372.883 669.856 372.667 670.189C372.453 670.521 372.14 670.786 371.728 670.982C371.318 671.179 370.82 671.277 370.233 671.277C369.687 671.277 369.214 671.189 368.814 671.012C368.416 670.836 368.103 670.59 367.875 670.274C367.648 669.959 367.52 669.592 367.491 669.175H368.445C368.47 669.463 368.566 669.702 368.735 669.89C368.907 670.077 369.123 670.216 369.384 670.308C369.647 670.397 369.93 670.442 370.233 670.442C370.586 670.442 370.903 670.385 371.184 670.271C371.465 670.154 371.687 669.992 371.851 669.786C372.015 669.577 372.097 669.334 372.097 669.056C372.097 668.802 372.026 668.596 371.884 668.437C371.743 668.278 371.556 668.149 371.325 668.049C371.094 667.95 370.845 667.863 370.576 667.789L369.637 667.52C369.041 667.349 368.569 667.104 368.221 666.786C367.873 666.468 367.699 666.052 367.699 665.538C367.699 665.11 367.815 664.738 368.046 664.42C368.279 664.099 368.593 663.851 368.985 663.674C369.38 663.495 369.821 663.406 370.308 663.406C370.8 663.406 371.237 663.494 371.62 663.671C372.002 663.845 372.306 664.083 372.529 664.386C372.755 664.689 372.874 665.033 372.887 665.418H371.992Z"
            fill="#00344D"
          />
          <path
            d="M390.715 601.387L393.097 603.314L399.46 605.343L400.651 606.996L401.211 608.536L401.664 618.193L400.317 619.128L402.116 621.91L401.783 624.248L402.212 628.181L401.699 630.462L400.639 631.488L399.233 634.909L397.065 636.824L394.563 641.237L390.786 652.924L387.724 654.064L382.339 652.776H379.801L374.857 653.984L369.341 652.707L361.335 652.867L358.785 652.399L356.235 650.518L354.186 646.641L351.994 645.159L351.684 643.597L352.983 640.45L353.602 635.171L353.066 633.278L350.54 632.4L346.418 633.164L344.619 632.662L347.896 617.737L350.278 616.848L353.853 612.481L355.783 611.569L361.156 613.758L364.349 613.45L367.172 608.194L368.28 604.146L370.401 603.006L377.919 601.683L384.329 603.108L390.715 601.387Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M364.911 622.317V629.949H363.987V622.317H364.911ZM366.764 622.317H367.867L370.461 628.652H370.55L373.144 622.317H374.247V629.949H373.383V624.151H373.308L370.923 629.949H370.088L367.703 624.151H367.629V629.949H366.764V622.317ZM382.54 626.133C382.54 626.938 382.394 627.634 382.104 628.22C381.813 628.806 381.414 629.259 380.908 629.577C380.401 629.895 379.822 630.054 379.171 630.054C378.52 630.054 377.941 629.895 377.434 629.577C376.927 629.259 376.529 628.806 376.238 628.22C375.947 627.634 375.802 626.938 375.802 626.133C375.802 625.328 375.947 624.633 376.238 624.046C376.529 623.46 376.927 623.008 377.434 622.69C377.941 622.372 378.52 622.213 379.171 622.213C379.822 622.213 380.401 622.372 380.908 622.69C381.414 623.008 381.813 623.46 382.104 624.046C382.394 624.633 382.54 625.328 382.54 626.133ZM381.645 626.133C381.645 625.472 381.535 624.915 381.314 624.46C381.095 624.005 380.798 623.661 380.423 623.428C380.05 623.194 379.633 623.077 379.171 623.077C378.709 623.077 378.29 623.194 377.915 623.428C377.542 623.661 377.246 624.005 377.024 624.46C376.806 624.915 376.696 625.472 376.696 626.133C376.696 626.794 376.806 627.352 377.024 627.806C377.246 628.261 377.542 628.605 377.915 628.839C378.29 629.072 378.709 629.189 379.171 629.189C379.633 629.189 380.05 629.072 380.423 628.839C380.798 628.605 381.095 628.261 381.314 627.806C381.535 627.352 381.645 626.794 381.645 626.133Z"
            fill="#00344D"
          />
          <path
            d="M399.126 594.738L399.841 595.616L405.595 594.602L408.824 594.909L411.266 596.437L411.659 598.102L411.743 603.073L411.087 606.334L411.147 607.167L412.267 608.307L429.054 609.287L430.531 611.408L430.793 613.905L431.627 615.045L435.452 617.702L437.048 617.941L438.335 619.412L437.632 623.654L437.811 627.964L439.443 633.243L440.313 635.158L442.35 637.439L443.255 640.346L442.541 641.726L438.466 640.859L435.261 637.884L432.235 636.926L428.911 634.566L428.22 632.16L426.802 630.529L422.751 629.492L419.868 629.651L419.535 630.689L420.166 634.691L417.974 640.506L418.355 641.019L421.012 640.837L420.178 643.619L419.308 644.645L412.064 644.462L410.754 645.603L410.67 646.458L411.945 648.67L410.504 655.294V658.031L411.29 660.87L409.848 664.097L406.846 666.309L406.953 667.187L406.393 667.916L406.655 669.593L407.358 670.356V671.69L406.56 673.538L408.693 677.38L408.848 679.489L406.036 677.449L402.533 675.841L400.389 676.331L396.517 674.997L393.193 675.134L391.87 675.864L388.141 676.525L386.02 676.137L384.293 674.53L383.59 673.275L383.78 672.021L385.413 667.802L389.487 662.865L392.335 658.088V654.918L391.548 652.957L390.905 652.9L394.587 641.213L397.088 636.8L399.257 634.885L400.663 631.464L401.723 630.438L402.235 628.158L401.806 624.224L402.14 621.887L400.317 619.127L401.783 618.249L401.33 608.592L400.77 607.053L399.579 605.399L393.169 603.313L390.786 601.386L392.299 598.854L393.919 597.372L399.126 594.738Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M405.906 624.002H405.131L407.373 617.896H408.136L410.378 624.002H409.603L407.778 618.862H407.73L405.906 624.002ZM406.192 621.617H409.316V622.273H406.192V621.617ZM411.329 624.002V617.896H413.463C413.889 617.896 414.24 617.97 414.516 618.117C414.792 618.262 414.998 618.458 415.133 618.704C415.268 618.949 415.336 619.22 415.336 619.518C415.336 619.78 415.289 619.997 415.196 620.168C415.104 620.339 414.983 620.474 414.832 620.573C414.683 620.673 414.521 620.746 414.346 620.794V620.854C414.533 620.866 414.721 620.931 414.909 621.05C415.098 621.17 415.256 621.341 415.383 621.563C415.511 621.786 415.574 622.058 415.574 622.38C415.574 622.686 415.505 622.961 415.366 623.206C415.226 623.45 415.007 623.644 414.707 623.787C414.407 623.93 414.016 624.002 413.535 624.002H411.329ZM412.068 623.346H413.535C414.018 623.346 414.361 623.253 414.564 623.066C414.768 622.877 414.871 622.648 414.871 622.38C414.871 622.173 414.818 621.983 414.713 621.808C414.607 621.631 414.457 621.49 414.262 621.384C414.068 621.277 413.837 621.223 413.571 621.223H412.068V623.346ZM412.068 620.579H413.44C413.662 620.579 413.863 620.536 414.042 620.448C414.223 620.361 414.366 620.238 414.471 620.079C414.578 619.92 414.632 619.733 414.632 619.518C414.632 619.25 414.539 619.022 414.352 618.835C414.165 618.647 413.869 618.552 413.463 618.552H412.068V620.579ZM417.528 617.896V624.002H416.789V617.896H417.528ZM419.261 624.002H418.486L420.728 617.896H421.491L423.733 624.002H422.958L421.134 618.862H421.086L419.261 624.002ZM419.548 621.617H422.672V622.273H419.548V621.617Z"
            fill="#00344D"
          />
          <path
            d="M353.149 581.399L351.386 573.086L351.481 571.524L350.135 570.236L347.597 559.324L345.357 561.605L340.473 561.171L335.981 562.118L326.224 567.956L317.467 571.49L312.701 576.655L311.939 576.712L308.865 572.22L307.673 571.741L305.684 571.388L303.563 573.189L302.503 575.469L302.324 578.172L302.8 579.027L304.54 579.95L305.183 585.446L307.566 589.54L309.949 592.299L312.153 594.043L314.81 594.967L315.155 596.962L314.321 600.656L312.475 602.834L310.533 604.727L306.863 607.007L304.135 610.508L300.823 612.788L298.666 613.472L292.435 614.612L289.898 613.974L290.732 611.922L288.825 610.086L291.208 605.525L290.648 604.579L285.99 601.899L283.607 598.673L278.043 595.685L274.266 594.26L272.312 592.732L266.212 594.841L264.008 597.555L261.9 597.099L259.195 594.819L257.551 594.488L253.774 595.252L250.2 594.431L249.009 594.784L248.258 595.127L248.186 596.267L249.247 598.057L248.627 599.265L243.743 602.937L241.765 603.017V600.2L240.978 597.293L241.86 594.043L241.681 592.413L239.704 590.509L233.234 587.316L225.014 606.403L227.968 611.511L229.624 612.515L230.315 610.69L231.876 609.265L241.121 604.453L242.623 604.202L244.827 602.743L246.173 602.127L246.602 602.709V602.903L244.219 604.043L243.028 605.867L242.944 606.164L241.955 605.559L239.275 606.7L235.486 609.561L235.081 610.417L232.698 609.903L231.447 610.838L230.506 614.419L230.816 616.175L233.949 621.305L237.738 624.886L239.072 624.281L242.646 622.754L246.221 623.221L247.102 619.618L248.472 617.167V616.733L248.949 616.391L249.402 616.528L249.128 616.688L248.842 618.854L247.448 621.408L248.639 623.837L250.915 624.555L252.857 624.247L254.739 620.621L256.645 620.735L256.872 620.45L260.446 622.206L261.78 622.97L262.007 623.517L260.589 623.13L260.911 624.008L261.03 625.513L259.445 625.114L260.637 624.35L260.244 622.822L258.909 622.001L255.18 621.67L254.465 621.83L254.572 623.689L253.917 624.977L251.129 627.257L252.321 625.456L250.188 625.627L247.686 625L242.396 624.236L240.013 624.452L239.87 625.41L237.94 626.642L236.439 628.546L239.739 633.107L243.314 636.082L250.462 639.081L256.526 639.412V638.671L255.109 637.086L253.977 633.779L253.667 633.266L253.75 632.422L254.31 632.286L254.084 633.221L255.275 635.729L256.264 635.045H256.693L256.61 635.296L255.478 636.527L255.788 637.097L258.945 638.374L259.624 638.135L261.59 632.662L262.591 630.997L263.782 630.29L263.019 629.914L266.832 630.051L267.404 630.222L268.655 629.697L269.262 628.249L270.144 627.816L271.478 628.01L272.61 629.047L273.337 628.295L273.444 628.557L273.301 629.412H272.241L270.597 628.341L269.405 630.256L267.523 631.157L265.367 631.02L265.629 632.001L264.437 630.86L262.865 631.271L262.209 634.691L262.531 636.196L263.222 637.428L263.758 638.249L267.761 639.492L267.404 640.404L265.557 639.127L264.783 639.537V640.335L264.699 640.586L264.116 640.735L264.497 639.058L264.127 638.922L263.615 638.534L263.079 638.009L262.543 638.557L261.661 639.127L261.232 639.731L260.291 639.868L258.957 640.518L260.041 641.042L262.424 640.928L258.85 642.069L258.373 642.787L257.182 640.951H256.467H256.133L253.119 641.122L251.725 641.84L251.642 641.396L250.82 641.316L250.331 640.963L249.533 641.213L248.544 640.723L248.603 643.505L250.879 652.205L250.593 654.098L253.178 656.754L255.621 655.751L258.778 655.557L257.718 654.018L257.611 652.741L257.789 652.467L258.385 649.753H258.73L258.552 650.438L258.73 650.905L258.111 653.972L259.159 654.599L259.04 656.344L258.087 656.697L260.589 659.092L264.044 660.984L267.618 661.794L270.823 663.618L272.015 664.873L274.779 664.416L275.899 664.838L284.81 660.163L287.932 660.642L291.863 658.772L293.627 655.272L294.52 654.702L297.034 656.161L298.226 658.054L300.477 658.818L303.229 658.111L304.695 655.831L308.269 656.104L310.199 655.466L313.571 653.687L313.344 651.053L313.773 649.913L315.525 650.004L316.466 650.688L318.98 650.095L321.363 645.421L324.627 644.862L328.785 645.364L334.837 642.867L336.267 641.897L335.35 639.081L334.671 637.941L334.921 637.439L339.115 635.376L339.341 629.333L340.175 627.645L342.617 626.026L343.678 624.031L344.655 620.405L343.356 616.368L343.63 615.969L344.821 614.635L347.109 610.189L347.514 607.19L349.611 601.842L352.589 596.654L353.042 589.813L354.555 585.651L353.149 581.387V581.399Z"
            fill="#0AA83F"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M287.256 635.65H284.901V628.018H287.36C288.101 628.018 288.734 628.171 289.261 628.477C289.788 628.78 290.191 629.216 290.472 629.785C290.753 630.351 290.893 631.029 290.893 631.819C290.893 632.614 290.752 633.299 290.468 633.873C290.185 634.444 289.773 634.884 289.231 635.192C288.69 635.498 288.031 635.65 287.256 635.65ZM285.825 634.831H287.196C287.827 634.831 288.35 634.709 288.765 634.465C289.18 634.222 289.49 633.875 289.693 633.426C289.897 632.976 289.999 632.441 289.999 631.819C289.999 631.203 289.898 630.673 289.697 630.228C289.496 629.781 289.195 629.438 288.795 629.2C288.395 628.959 287.897 628.838 287.301 628.838H285.825V634.831ZM292.444 635.65V628.018H297.05V628.838H293.368V631.417H296.811V632.237H293.368V634.831H297.109V635.65H292.444ZM298.715 635.65V628.018H299.64V634.831H303.187V635.65H298.715ZM303.187 628.838V628.018H308.911V628.838H306.511V635.65H305.586V628.838H303.187ZM309.758 635.65H308.79L311.592 628.018H312.546L315.348 635.65H314.379L312.099 629.226H312.039L309.758 635.65ZM310.116 632.669H314.022V633.489H310.116V632.669Z"
            fill="#00344D"
          />
          <path
            d="M634.869 348.707L640.338 345.686L647.307 346.575L659.924 341.045L667.597 342.288H672.363L676.616 343.097L683.645 342.413H698.49L706.079 341.877L712.572 353.485L714.312 355.674L719.852 356.905L722.33 358.376L728.597 369.573L728.049 372.047L728.454 376.425L731.623 379.778L736.555 381.454L738.938 385.832L739.248 387.896L738.057 392.023L730.908 405.067L731.361 411.658L730.837 414.029L723.545 419.981L713.263 433.116L707.211 439.364L702.684 443.036L697.751 448.486L696.774 450.287L699.777 457.961L703.244 463.32L706.472 466.113L709.713 463.833L713.085 459.272L715.039 458.839L716.73 459.329L718.541 460.606L721.52 464.198L726.667 468.576L729.228 471.541L730.42 473.821L729.729 480.081L730.61 482.053L731.063 486.09L733.374 491.357L733.315 493.136L734.768 494.14L728.883 500.388L727.584 502.6L726.524 505.929L726.977 512.679L728.073 516.465L729.657 518.882L729.443 520.353L728.251 521.185L723.486 520.786L722.676 521.31L720.221 521.379L720.007 523.249L717.958 524.104L716.123 526.305L713.847 526.795L712.549 531.595L710.082 532.473L708.45 535.574L708.522 536.144L709.642 536.087L710.19 536.589L710.297 538.607L711.345 538.733L711.572 539.748L710.38 540.238L709.642 541.549L710.762 543.282L710.666 544.422L708.379 545.688L708.117 549.359L706.377 551.001L705.698 553.179L703.542 554.068L701.433 553.122L700.718 553.738L699.241 553.909L698.693 554.639L699.241 555.642L699.026 557.614L698.502 558.185L694.034 558.96L693.534 559.211L693.295 560.773L691.663 560.568L688.089 558.287L685.408 559.427L684.61 558.629L681.036 557.877L679.296 556.417L678.606 556.474L677.152 558.082L674.769 557.991L675.055 548.037L672.672 545.574L670.004 545.449L667.192 547.889L663.808 547.341L661.592 546.372L659.889 542.518L658.483 540.021L657.029 539.098L655.635 539.018L654.074 536.612L653.931 535.78L655.909 530.318L652.74 528.22L650.965 527.992L650.25 528.836L648.129 526.419L646.938 526.327L645.151 524.492L644.233 524.412L643.805 522.679L642.315 521.96L641.839 522.485L640.087 522.074L637.883 520.273L638.503 518.072L638.026 515.689L636.06 514.23L635.155 519.657L635.25 522.952L633.594 529.794L632.546 530.934L630.556 531.584L630.151 532.576L629.389 532.701L628.269 531.561L609.576 533.294L606.43 529.805L607.169 527.81L606.156 525.461L605.93 524.115L606.013 523.192L604.953 522.827L595.183 531.264L594.421 532.541L591.514 534.503L590.179 536.601L584.675 541.88L583.079 541.059L580.458 540.945L578.551 540.694L577.598 539.998L576.526 542.427L576.883 543.328L575.978 544.468L575.525 546.52L575.954 548.801L575.62 550.021L574.906 550.443L573.714 553.658L572.082 559.838L571.486 560.283L570.688 559.838L569.115 560.26L567.924 558.755L567.4 559.279L569.663 549.941V539.953L570.057 538.721L569.33 537.889L571.844 524.777L575.787 517.753L579.886 514.047L583.567 511.835L584.663 510.205L584.318 503.455L587.153 496.739L587.856 493.056L587.189 491.027L587.499 489.887L586.105 488.336L586.272 487.595L576.288 478.884L570.998 472.442L564.874 466.855L555.962 464.836L546.217 464.289L537.317 465.372L530.025 468.371L527.762 467.721L532.277 460.88L533.719 459.295L547.098 451.074L547.229 449.717L546.038 446.662L546.681 445.92L546.264 442.637L543.881 439.775L541.844 438.224L542.714 434.963L544.298 432.523L545.823 431.543H548.051L550.112 432.569L551.304 433.789L553.115 433.527L553.508 433.994L558.881 435.077L562.146 434.142L565.219 429.946L569.806 430.231L574.703 429.616L579.957 428.475L582.852 427.119L592.002 418.396L600.473 414.109L606.12 407.587L608.575 402.81L611.541 401.168L622.883 398.773L625.147 398.899L639.611 392.228L641.732 388.717L641.481 382.4H640.981L640.624 379.835L641.279 378.318L640.087 371.477L637.347 367.076L636.442 360.234L637.049 355.582L636.799 353.131L634.869 348.707Z"
            fill="#D62B3C"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M613.062 454.158V453.339H618.786V454.158H616.386V460.971H615.461V454.158H613.062ZM619.633 460.971H618.665L621.467 453.339H622.421L625.223 460.971H624.254L621.974 454.546H621.914L619.633 460.971ZM619.991 457.989H623.897V458.809H619.991V457.989ZM626.412 460.971V453.339H628.991C629.587 453.339 630.077 453.44 630.459 453.644C630.842 453.845 631.125 454.122 631.309 454.475C631.493 454.828 631.585 455.229 631.585 455.679C631.585 456.129 631.493 456.527 631.309 456.875C631.125 457.223 630.843 457.496 630.463 457.695C630.083 457.891 629.597 457.989 629.006 457.989H626.919V457.155H628.976C629.384 457.155 629.712 457.095 629.96 456.976C630.211 456.856 630.392 456.688 630.504 456.469C630.618 456.248 630.676 455.984 630.676 455.679C630.676 455.373 630.618 455.106 630.504 454.878C630.39 454.649 630.207 454.473 629.956 454.348C629.705 454.222 629.374 454.158 628.961 454.158H627.336V460.971H626.412ZM630.005 457.542L631.883 460.971H630.81L628.961 457.542H630.005ZM633.438 460.971H632.469L635.271 453.339H636.225L639.028 460.971H638.059L635.778 454.546H635.719L633.438 460.971ZM633.796 457.989H637.701V458.809H633.796V457.989ZM640.217 460.971V453.339H642.885C643.417 453.339 643.855 453.43 644.2 453.614C644.546 453.796 644.803 454.04 644.972 454.348C645.141 454.654 645.225 454.993 645.225 455.366C645.225 455.694 645.167 455.965 645.05 456.178C644.936 456.392 644.784 456.561 644.595 456.685C644.409 456.809 644.207 456.901 643.988 456.961V457.035C644.222 457.05 644.456 457.132 644.692 457.281C644.928 457.43 645.126 457.644 645.285 457.922C645.444 458.201 645.523 458.541 645.523 458.943C645.523 459.326 645.436 459.67 645.263 459.976C645.089 460.281 644.814 460.524 644.439 460.702C644.064 460.881 643.576 460.971 642.974 460.971H640.217ZM641.141 460.151H642.974C643.578 460.151 644.007 460.034 644.26 459.801C644.516 459.565 644.644 459.279 644.644 458.943C644.644 458.685 644.578 458.447 644.446 458.228C644.315 458.007 644.127 457.83 643.884 457.699C643.64 457.565 643.352 457.497 643.019 457.497H641.141V460.151ZM641.141 456.693H642.855C643.133 456.693 643.384 456.638 643.608 456.529C643.834 456.419 644.013 456.265 644.145 456.066C644.279 455.868 644.346 455.634 644.346 455.366C644.346 455.03 644.229 454.746 643.995 454.512C643.762 454.276 643.392 454.158 642.885 454.158H641.141V456.693ZM647.355 460.971H646.386L649.189 453.339H650.143L652.945 460.971H651.976L649.695 454.546H649.636L647.355 460.971ZM647.713 457.989H651.618V458.809H647.713V457.989Z"
            fill="#00344D"
          />
          <path
            d="M395.193 362.868L402.485 362.15L406.297 362.515L408.108 363.484L409.454 362.515L411.611 359.094L412.874 358.479L414.148 358.969L415.9 362.515L417.02 362.868L418.426 361.968L418.342 364.75L417.842 365.457L416.65 365.536L416.019 366.232L413.422 373.62V380.028L414.029 382.525L413.374 390.507L410.991 396.516L409.18 405.58L408.239 405.991L406.952 409.867L405.761 411.737L401.257 417.005L392.918 421.155L387.401 422.364L383.934 423.732L370.674 425.728L369.006 426.252L360.118 426.081L357.938 426.32L356.246 425.785L353.851 420.186L354.399 418.624L353.506 384.179L353.935 368.603L354.34 368.17L357.533 367.794L370.638 367.258L372.735 367.976L383.684 377.212L384.804 376.938L395.193 362.868Z"
            fill="#64CCFF"
            stroke="#00344D"
            stroke-width="1.04942"
            stroke-miterlimit="10"
          />
          <path
            d="M372.313 402.08V394.448H376.889V395.268H373.237V397.847H376.546V398.666H373.237V402.08H372.313ZM384.614 396.833H383.689C383.635 396.567 383.539 396.334 383.402 396.132C383.268 395.931 383.104 395.762 382.911 395.626C382.719 395.486 382.507 395.382 382.273 395.312C382.04 395.243 381.796 395.208 381.543 395.208C381.081 395.208 380.662 395.325 380.287 395.558C379.914 395.792 379.617 396.136 379.396 396.591C379.178 397.045 379.068 397.603 379.068 398.264C379.068 398.925 379.178 399.483 379.396 399.937C379.617 400.392 379.914 400.736 380.287 400.97C380.662 401.203 381.081 401.32 381.543 401.32C381.796 401.32 382.04 401.285 382.273 401.215C382.507 401.146 382.719 401.043 382.911 400.906C383.104 400.767 383.268 400.597 383.402 400.396C383.539 400.192 383.635 399.958 383.689 399.695H384.614C384.544 400.085 384.417 400.434 384.233 400.742C384.05 401.05 383.821 401.312 383.548 401.529C383.275 401.742 382.968 401.905 382.627 402.017C382.289 402.129 381.928 402.184 381.543 402.184C380.892 402.184 380.313 402.025 379.806 401.707C379.299 401.389 378.901 400.937 378.61 400.351C378.319 399.765 378.174 399.069 378.174 398.264C378.174 397.459 378.319 396.763 378.61 396.177C378.901 395.591 379.299 395.139 379.806 394.821C380.313 394.503 380.892 394.344 381.543 394.344C381.928 394.344 382.289 394.399 382.627 394.511C382.968 394.623 383.275 394.787 383.548 395.003C383.821 395.217 384.05 395.478 384.233 395.786C384.417 396.091 384.544 396.44 384.614 396.833ZM385.69 395.268V394.448H391.414V395.268H389.014V402.08H388.09V395.268H385.69Z"
            fill="#00344D"
          />
        </svg>
      </div>

      <div className="first">
                {/*<div className="second">
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
                </div>*/}
        </div> 

      {/* TABLE CONTAINING VOTES IN EACH STATES */}

      <div className="table">
        <h3>state results</h3>
        <hr/>
        <table>
          <tr>
            <th>States</th>
            <th>APC</th>
            <th>LP</th>
            <th>PDP</th>
          </tr>
          {Object.keys(stateResult)?.map((state, index) => (
            <tr key={index}>
              <td>{state?.state_name}</td>
              <td>{state?.candidate_vote}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>

      <footer className="foot">
        <div className="big-footer">
          <div className="footer">
            <img src={pic1} alt="" />
            <div className="letter">
              isale Eko avenue, dolphin estate, ikoyi, lagos, <br /> nigeria
            </div>
            <footer className="copy">&copy; Copyright 2022</footer>
          </div>
          <div className="faq">
            <div className="link1">
              <li class="title">about</li>
              <li>
                <a href="#/">our story</a>
              </li>
              <li>
                <a href="#/">blog</a>
              </li>
              <li>
                <a href="#/">about hernalytics</a>
              </li>
              <li>
                <a href="#/">videos</a>
              </li>
            </div>
            <div className="link1">
              <li class="title">support</li>
              <li>
                <a href="#/">FAQs</a>
              </li>
              <li>
                <a href="#/">privacy policy</a>
              </li>
              <li>
                <a href="#/">terms of services</a>
              </li>
            </div>
            <div className="link1">
              <li class="title">Let's chat!</li>
              <li class="sub-title">hernalytics@gmail.com</li>
              <li class="sub-title">+234 801 234 5678</li>
              <div className="social">
                <div className="insta">
                  <img src={Vector4} alt="" />
                </div>
                <div className="whats">
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
  );
};
export default FrontPage;
