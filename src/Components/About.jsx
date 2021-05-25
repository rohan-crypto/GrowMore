import React from 'react';
import Common from '../Common';
import web from "../Images/About.jpg";

const About = () =>{
    return(
        <>
            <Common name="Know more about us by Contacting " imgsrc= {web} visit= "/contact" 
                btname= "Contact Now"/>
        </>
    );
};

export default About;
