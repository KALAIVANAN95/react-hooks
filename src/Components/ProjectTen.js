import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ProjectTen = () => {

    const [DataTwo,setDataTwo]=useState('Good Morning');

    const changsData = () => {
        setDataTwo('Good Afternoon');
    }

    useEffect(()=>{
        console.log('This is UseEffect')
    })

    return (
        <>
        <div className="text-center">
            <h1>UseEffect example</h1>        
        <h2>Hello! {DataTwo}</h2>
        <Button variant="warning" onClick={changsData}>Click Me</Button>
        </div>

        </>
    );
}

export default ProjectTen;