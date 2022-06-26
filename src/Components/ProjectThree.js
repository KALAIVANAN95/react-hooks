import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';


const ProjectThree=()=>{

    const [number,setNumber]=useState(0);

    const incrementNumber=()=>{
        if(number<10){
            setNumber(number+1);
        }
       
        else{
            alert('Hey! You have reached Last digit');
        }
       
    }

    const decrementNumber=()=>
    {
        if(number>0){
            setNumber(number-1);
        }
        else{
            alert('Hey! You have reached 0');
        }

       
        
    }
    return(
        <>
        
        <Container>
        <h6 className="text-center">Increment and Decrement Number Project</h6>
            <div className='text-center my-5'>
            <h1>{number}</h1>
            <Button variant='warning' className='mx-3 my-5' onClick={incrementNumber}>Increment</Button>
            <Button variant='danger' onClick={decrementNumber}>Decrement</Button>
            </div>
        </Container>

        </>
    );
}

export default ProjectThree;