import React, { useState } from 'react';

const ProjectSix = () => {

const Datas=[{

    id:2,
    name:'KALAI',
    place:'Chennai',
    role:'Developer'
},
{
    id:3,
    name:'Raja',
    place:'Villupuram',
    role:'Teacher'
}

]

    const [data,setData]=useState('Datas');

    return (
        <>
        
        <h1>This is useState using Array</h1>
        <p>{data}</p>

        {
            Datas.map((values)=>{
                return(
                    <>
                    <h1>{`The staff id is : ${values.id}`}</h1>
                    <h1>{`The staff name is : ${values.name}`}</h1>
                    <h1>{`The staff role is : ${values.role}`}</h1>
                    </>
                );
               
            })
        }
        </>
    );
}

export default ProjectSix;