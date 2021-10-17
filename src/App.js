import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount (){
   axios.get('https://yts-proxy.now.sh/list_movies.json');
  }
  render () {
    const { isLodading } = this.state;
    return <div>{isLoading ? 'Lodading...' : 'We are ready'}</div>;
  }
}
export default App;
