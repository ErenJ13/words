
import React from 'react';
import '../Cards/card.css'
import { useState } from 'react';

function Card(props) {
    const [isChecked, setChecked] = useState(false);
    const handleClick = () => {
     setChecked(!isChecked);
    }
    return(
        <div className='card'>{isChecked ? props.translate : props.name }
        
        <div className='button'><button onClick={handleClick}>Перевод</button> </div>
        
        </div>
        
    )

}
export default Card;
