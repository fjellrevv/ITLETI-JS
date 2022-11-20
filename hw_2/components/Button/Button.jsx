import React from "react";

export const Button = ({ children, onClick, type }) => {

    console.log(onClick);
    return ( 
      <button type = {type} onClick={onClick}>{children}</button>
    )
    
};
