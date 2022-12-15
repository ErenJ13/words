

export default function Game({item}) {
  const {name, translate} = item;
  console.log(item);


return(
  <>

  <div className="cardGame">
    <p>{name}</p>
    <p>{translate}</p>
  </div>


  </>
)
}

