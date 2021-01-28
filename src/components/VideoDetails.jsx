import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <p className="errorpg">No Video Found</p>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;




  return (
    <React.Fragment>
      <div className="dep margin">
        <iframe
          id='iframe'
          src={videoSrc}
          title="video Player"
          className="w-100"
        >
        </iframe>

        <div >
          <div id='like'>
            <FormControlLabel 
              control={<Checkbox icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checkedH" />}
            />
          </div>
          <div className="p-2 dep">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div><br /><br />
        </div>

        

      </div>
    </React.Fragment>
  );
};
export default VideoDetails;