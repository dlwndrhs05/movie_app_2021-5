
import React from "react";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount (){
    setTimeout (() =>   {
      this.setState({ isLoading: false });
    },6000);
  }
  render () {
    const { isLodading } = this.state;
    return <div>{isLoading ? 'Lodading...' : 'We are ready'}</div>;
  }
}
export default App;
