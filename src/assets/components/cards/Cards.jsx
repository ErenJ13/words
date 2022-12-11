

import React from 'react';


export default (props) => {

    const handleClick = () => props.onClick(props.id);
    const clickButton = () => props.onClick(props.id);
  
  
    return (


        < div onClick={handleClick} className={"card " + (props.isChecked ? "checked" : "")} >
                
                <div className="cardName"  style = {{backgroundColor: props.color}}>{props.name}</div>
                <div onClick={clickButton} className={props.isChecked ? "showTranslate" : "cardTranslate"}> {props.translate}</div>
     
        </div>
    )
}
