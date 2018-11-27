import React from "react";
import SearchBar from "./searchbar";
import youtube from "../apis/youtube";
import VideoList from "./videolist";
import VideoDetail from "./videodetail";
import Metronome from "./metronome";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    //   .then(response => {
    //     console.log(response.data.results);
    //   });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  // componentDidMount() {
  //   this.onSearchSubmit("Guitar");
  // }

  onConditionRender = () => {
    if (this.state.selectedVideo != null) {
      return (
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              <Metronome />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Results found: {this.state.videos.length}
        {this.onConditionRender()}
      </div>
    );
  }
}

export default App;
