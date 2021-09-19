
function Food({name,picture}){
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} />
    </div>
  );
}
const foodLike = [
  {
    id:1,
    name: 'Kimchi'
  },
  {
    id:2,
    name: 'Samgyeopsal'
  },
  {
    id:3,
    name: 'Bibimbap'
  },
  { 
    id:4,
    name: 'Doncasu'}
  ,
  { 
    id:5,
    name: 'Kimbap'
  },
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
