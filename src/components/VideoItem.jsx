import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <React.Fragment>
      <div
        className="col-md-12"
        onClick={() => {
          onSelectVideo(video);
        }}
      >

        <div className="row p-3">
          <div className="col-md-6 " >
            <img
              height="95px"
              width="175px"
              alt={video.snippet.title}
              src={video.snippet.thumbnails.high.url}
            />
          </div>
          <div className="col-md-6 ">
            <strong>{video.snippet.title}</strong>
          </div>
        </div>
      </div>

    </React.Fragment >
  );
};
export default VideoItem;