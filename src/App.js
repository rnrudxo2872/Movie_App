import React,{Component} from 'react'
import './App.css'
import axios from 'axios'
import Movie from './movie'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:true,
      movies:[]
    }
  }

  async componentDidMount(){
    const {
      data:{
        data:{
         movies
        }
    }
  } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating'); // 평점순
    this.setState({movies, loading : false});
  }
  
  render(){
    console.log("now rendering");
    const {movies, loading} = this.state;
    return(
      <div className="App">
      
      {loading ? <div className="load_container">
        <img src="logo.svg" alt="Loading..."></img>
        Now Loading ...
      </div> : 
      <div className="movies">
      {movies.map(movie => (
        <Movie 
        key={movie.id} 
        id={movie.id} 
        title={movie.title} 
        year={movie.year} 
        summary={movie.summary} 
        rating={movie.rating} 
        cover={movie.medium_cover_image}
        genres={movie.genres}
        />
      )
      )}
      </div>
      }
    </div>
    )
  }
    
}

export default App;
