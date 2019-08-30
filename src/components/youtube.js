import React from "react";
import YouTube from "react-youtube";

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Youtube;
