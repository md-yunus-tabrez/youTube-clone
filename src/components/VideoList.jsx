import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderList = videos.map((video) => {
    return <VideoItem video={video} onSelectVideo={onSelectVideo} />;
  });

  return (
    <React.Fragment>
      <div>{renderList}</div>
    </React.Fragment>
  );
};
export default VideoList;