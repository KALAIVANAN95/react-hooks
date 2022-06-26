import React, { useContext } from "react";
import { Language } from "../index";
import { FrontEnd } from "../index";


const ProjectNine = () => {

    const lang = useContext(Language);
const front = useContext (FrontEnd);

    return (
        <>

        <h1>{front} is used for Website structring and {lang} is JS framework</h1>
        
        
        </>
    );
}

export default ProjectNine;