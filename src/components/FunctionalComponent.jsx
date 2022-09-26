import React from "react";

function FunctionalComponent() {
    return(
    <div className="fc">
        <h2>This is created using FC</h2>
        <p className="para1">This is done using external CSS</p>
        <p style={{ color: "blue" }}>
          This is done using inline CSS
        </p>
        </div>
    )
    
}



export default FunctionalComponent;