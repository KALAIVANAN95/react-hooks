import React,{useState} from 'react';

const ProjectSeven =()=>{

const Data=[{

name:'KALAI',
place:'Chennai'
},
{
  name:'VANAN',
  place:'Bangalore'
}
]

const [text,setText]=useState(Data);


const updateData=()=>{

setText([{
  name:'KALA',
place:'Chennai'
},
{
  name:'Vinai',
  place:'Jaipur'
}
])

}


  return(
    <>

    <h2>This is array and useState</h2>

   {
    text.map((Values)=>{

        return(

          <>
          <h3>{`The Name of the Person ${Values.name}`}</h3>
          <h3>{`The Name of the Place ${Values.place}`}</h3>

          </>
        );
      })
    }

<button variant="warning" onClick={updateData}>Click Me</button>

    </>
  );
}


export default ProjectSeven;