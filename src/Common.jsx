import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./Images/Home.png";

const Common = (props) =>{
    return(
        <>
            <section id="header" className= "d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
    {/* padding in large screen = 0, order in small screen =2, order in large screen =1 */}
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name}<strong className= "brand-name"> Grow More </strong></h1>
                                <h2 className= "my-3">
                                    We are a team of talented developers making websites you desire.
                                </h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className= "btn-get-started"> {props.btname} </NavLink>
                                    {/* <button type="button" class="btn btn-outline-primary rounded-pill">Get Started</button> */}
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} alt="home img" className="img-fluid animated"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;
