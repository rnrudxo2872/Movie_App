import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import './Detail.css'

let API_key = ""//키 보안

class Detail extends Component{
  constructor(props){
    super(props);
    console.log(props.location.state.title);
    this.state={
      movie_trailer: null
    }  
    var title = props.location.state.title;

    this.SearchTrailer(title);
  }
  
  SearchTrailer = (term) =>{
    term += " trailer"
    YTSearch({key: API_key, term}, (videos =>{
      console.log(videos[0].snippet.title);

      this.setState({
        movie_trailer: videos[0].id.videoId
      })
    }))
  }

  componentDidMount(){
    console.log("did it!");
  }
  render(){
    const url = `https://youtube.com/embed/${this.state.movie_trailer}`;
    return (
      <div className="detail_container">
      <div className="trailer_">
        <iframe className="video__" title={this.state.movie_trailer} src={url}></iframe>
      </div>
      <input type="button" />
    </div> 
    );
  }  
}

export default Detail;