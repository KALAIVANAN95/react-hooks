import React, { useState } from "react";
import { Container } from "react-bootstrap";

const ProjectFour=()=>{

    let currentTime=new Date().toLocaleTimeString();

    const [time,setTime]=useState(currentTime);

    const changeTime=()=>{
        // let newTime=new Date().toLocaleTimeString();
        // setTime(newTime);
    }
    // setInterval(changeTime,1000);

    return(
        <>
        <Container>
        <h6 className="text-center">Digital Clock Project</h6>
            <div className="text-center my-5">
            <h1>{time}</h1>
            </div>
        </Container>
        <hr/>
        </>
    );
}


export default ProjectFour;