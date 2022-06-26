import React from "react";
import { Language } from "../index";

const ProjectEight = ()=> {

    return(
        <>
        <div className="text-center">
        <h3 >This is ContextApi example</h3>
        <Language.Consumer>
            {
                ((fname)=>{
                    return(
                        <>
                        
                        <h1>My Fav Language is {fname}</h1>
                        </>
                    );
                })
            }
        </Language.Consumer>
        
        </div>
        </>
    );
}

export default ProjectEight;