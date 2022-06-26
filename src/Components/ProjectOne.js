import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";


let bgcolorbg='green';

let colorsText='orange';

let data="Project One Started"

const ProjectOne =()=>{

    const [bgcolor,setBgcolor]=useState(bgcolorbg);
    const[text,setText]=useState(data)

    const[colors,setColors]=useState(colorsText);
    const changebgcolor =()=>
    {
        setBgcolor('cyan');
        setText('Project one completed :smile');
        setColors('red');
    }

    const normalData=()=>{
        setBgcolor(bgcolorbg);
        setText(colorsText);
        setColors(data);
    }
    return(
        <>
        <Container>
            <h6 className="text-center">BackgrounColor,Text and data Changed Project</h6>
        <div className="text-center">
        <div style={{backgroundColor:bgcolor,color:colors}}>
            <h1 >{text}</h1>
        </div>
        <Button variant="dark" onClick={changebgcolor} onDoubleClick={normalData}>Click Me</Button>
        </div>
        </Container>
        </>
    );
}


export default ProjectOne;