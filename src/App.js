
function Food({name,picture}){
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} />
    </div>
  );
}
const foodLike = [
  {name: 'Kimchi'},
  {name: 'Samgyeopsal'},
  {name: 'Bibimbap'},
  {name: 'Doncasu'},
  {name: 'Kimbap'},
];

function renderFood(dish){
   return <Food name={dish.name} picture={dish.image} />;
}
function App() {
  return (
  <div>
    {foodLike.map(renderFood)}
  </div> 
  );
  
}

export default App;
