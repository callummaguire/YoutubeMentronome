import React from "react";
import YouTube from "./youtube";

// const VideoDetail = ({ video }) => {
// if (!video) {
//   return <div>Loading....</div>;
// }

// const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
// return (
//   <div>
//     <div className="ui embed">
//       <iframe id="youtubeId" title="video-player" src={videoSrc} />
//     </div>
//     <div className="ui segment">
//       <h4 className="ui-header">{video.snippet.title}</h4>
//       <p>{video.snippet.description}</p>
//     </div>
//   </div>
// );
// };

// export default VideoDetail;

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      video: props.video,
      url: `https://www.youtube.com/embed/${this.props.video.id.videoId}`
    };
  }
  componentDidMount() {
    console.log(this.props);
    console.log(this.state);

    console.log(document.getElementById("youtubeId"));
  }

  propsTest = () => {};

  state = {};
  render() {
    let video = this.state;
    if (!video) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <div className="ui embed">
          <YouTube videoId={this.props.video.id.videoId} />
        </div>
        <div className="ui segment">
          <h4 className="ui-header">{this.state.video.snippet.title}</h4>
          <p>{this.state.video.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
