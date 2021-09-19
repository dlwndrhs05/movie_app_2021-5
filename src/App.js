
function Food(props){
  console.log(props);
  return <h3>I love potato</h3>;
}

function App() {
  return (
  <div>
    hello react
    <Food fav="kimchi" something={true} papapapa={['hello',1,2,3,4,true]}/>
  </div> );
  
}

export default App;
