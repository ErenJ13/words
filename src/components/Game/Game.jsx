
import { useState } from 'react';

export default function Game({item}) {
 
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => {
  setChecked(!isChecked);
  }

return(
  <>

  <div className="cardGame">
    {isChecked ? item.translate : item.name }
    <div className='button'><button onClick={handleClick}>Перевод</button> </div>
  </div>


  </>
)
}



