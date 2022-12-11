
import React from 'react';
import { useState } from 'react';

function WordAdd (words){
  const [isEditMode, setIsEditMode] = useState(false);
  const handleClick = () => {
   setIsEditMode(!isEditMode);
  }
    return (
    <>
     
     {/* { isEditMode ?<td>  <input type="text"/></td> :  words.id } */}
      { isEditMode ?<td>  <input type="text"/> </td> : words.theme}
      { isEditMode ?<td>  <input type="text"/></td>  : words.eng}
      { isEditMode ? <td> <input type="text"/> </td> : words.rus}
     
     
      {isEditMode ?
         <td>
            <button>Сохранить</button>
            <button className='del' onClick={handleClick}></button>
         </td> 
            : <button className='pen' onClick={handleClick}></button>
       }
      
   </>
        // <tbody>
          
     
    
        //     <tr>  
         
        //         <td className="card-text">{props.theme}</td>
        //         <td className="card-text">{props.eng}</td>
        //         <td className="card-text">{props.rus}</td>
        //         <td><button className='pen'></button> <button className='del'></button> </td>

        //         </tr>
            
      
        
        // </tbody>
    )
}
export default WordAdd;