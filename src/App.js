import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = () =>{
    const movies = axios.get('https://yts-proxy.now.sh/list_movies.json');
  }
  componentDidMount (){
      this.getMovies();
  }
  render () {
    const { isLodading } = this.state;
    return <div>{isLoading ? 'Lodading...' : 'We are ready'}</div>;
  }
}
export default App;
