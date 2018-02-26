import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBBkzSCi4dlZQm2c8Npcj-LCiH44b_VZNc';

// Create a new component that produces some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // YouTube API Request (causes component to rerender)
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

// Insert the component 's generated HTML and insert into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
