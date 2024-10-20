import React from "react";
import './SidebarOption.css'

function SidebarOption({text ,Icon}){
    return(
        <div className="SidebarOption">
            
            <Icon />            
         
            <span className="text">{text}</span>
            
           </div>
    )
}


export default SidebarOption;