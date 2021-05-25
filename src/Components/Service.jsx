import React from 'react';
// import web from "../Images/web-dev.png";
import Card from "../Card";
import Sdata from "../Sdata";

const Service = () =>{
    return(
        <>
            <div className= "my-5">
                <h1 className= "text-center"> Our Services </h1>
            </div>
            <div className= "container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
    {/* gutter y-axis from top and bottom margin between cards= 4px */}
                        <div className="row gy-4">
                        {
                            Sdata.map((val, index) => {
                              return <Card
                                    key = {index}
                                    imgsrc= {val.imgsrc}
                                    title= {val.title}
                                    link= {val.link}
                                    text= {val.text}
                              />  
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
