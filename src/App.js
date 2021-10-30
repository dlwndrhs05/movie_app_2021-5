import React from "react";
import axios from "axios";
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () =>{
    const {
      data:{
        data:{movies},
      },
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log({ movies, isLoading: false });
  }
  componentDidMount (){
      this.getMovies();
  }
  render () {
    const { isLodading,movies } = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
    <span class="loader__text">'Lodading...'</span>
    </div>
    ) : (
      <div className="movies">
        { movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
          ))}
          </div>
        )}
        </section>
  }
}
export default App;
