 import React  from "react";
 import "./FloatingDiv.css"



const FloatingDiv = ({image, txt1,txt2}) => {

   

    return(

        <div className="floating-div">
            <img src={image}  alt=""></img>
            <span>
                {/* Web */}{txt1}
                <br />
                {/* Developer */}
                {txt2}
            </span>
            
        </div>
    );

}

export default FloatingDiv;