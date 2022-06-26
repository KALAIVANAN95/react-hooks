
import React,{useState} from 'react';
import {Button,Container} from 'react-bootstrap';

const Counter=()=>{

    const [numbers,setNumbers]=useState(0);


    const increment=()=>{

        setNumbers(numbers+1);
    }
    return(
        <>
        <Container className="m-5 mb-5">
        <div className="text-center" style={{backgroundColor:'purple'}}>
            <h2 className='text-light'>Sample increment</h2>
            <h1 className="text-dark">{numbers}</h1>
        <Button variant="warning" onClick={increment}>Click Me</Button>
        </div>
        </Container>
        <hr className='text-white' style={{height:'2px'}}/>
        
        </>
    );
}

export default Counter;