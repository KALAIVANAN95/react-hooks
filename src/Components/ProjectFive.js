import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";

const ProjectFive=()=>{

    const [darkmode,setDarkmode]=useState({
        color:'#000',
        backgroundColor:'#fff'
    });

    const changeColors=()=>{
        if(darkmode.color==='#000'){
            setDarkmode({
                color:'#fff',
                backgroundColor:'#000'
            }); 
            setText("Light mode")
        }
        
        else{
            setDarkmode({
                color:'#000',
                backgroundColor:'#fff'
            } ); 
            setText("Dark mode")
        } 

       
    }


    const[text,setText]=useState("Dark mode");

    return(
        <>
        
        <Container fluid className="text-center">
            <Button variant="dark" onClick={changeColors} >{text}</Button>
            <div className="text-center my-5" style={darkmode}>
                <h5>Dark and White Mode Project</h5>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque, rem ducimus totam unde sint nobis aperiam consequuntur praesentium possimus!</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque, rem ducimus totam unde sint nobis aperiam consequuntur praesentium possimus!</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque, rem ducimus totam unde sint nobis aperiam consequuntur praesentium possimus!</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque, rem ducimus totam unde sint nobis aperiam consequuntur praesentium possimus!</p>

            </div>
        </Container>
        </>
    );
}

export default ProjectFive;