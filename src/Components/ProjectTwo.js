import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';


const ProjectTwo=()=>{

    const [textData,setTextData]=useState('');

    const [preData,setPreData]=useState('');

    const clearData=()=>{
        setTextData('');
    }


    const handleData=(e)=>{
        setTextData(e.target.value);
    }


    const previeData=()=>{
        setPreData(textData);
    }

    return(
        <>
        <Container className='my-5'>
        <h6 className="text-center">Text and Word Counting Project</h6>
            <div className='text-center'>
            <h1 className='text-success'>Project Two</h1>
            <textarea cols='30' rows="10" className="w-100" onChange={handleData} value={textData}>{textData}</textarea>
            
            </div>
            <Button variant="dark" onClick={clearData} className='my-3'>Clear Data</Button>
            <p>{preData}</p>
            <Button variant='success' onClick={previeData}>Preview Data</Button>

            <p className='text-center text-danger'>{textData.length} Character are present inside this textarea</p>
       
            <p className='text-center text-success'>{textData.split(" ").length} Words are present inside textarea</p>
        </Container>
        </>
    );
}

export default ProjectTwo;