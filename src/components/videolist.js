import React from "react";
import VideoItem from "./videoitem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderlist = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divded list">{renderlist}</div>;
};

export default VideoList;
