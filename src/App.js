import React from "react";
import "./App.css";
import Comments from "./components/Comments";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  }

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  }

  onTermSubmit = async (search) => {
    const res = await youtube.get("/search", {
      params: {
        q: search,
      },
    })
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  }

  componentDidMount() {
    this.onTermSubmit('')
  }
  render() {

    return (
      <React.Fragment>

        <header className="wrap">
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </header>
        <br /><br />


        <div className='row col-md-12'>
          <div className='col-md-8'>
            <VideoDetails video={this.state.selectedVideo} />

            <Comments/>
          </div>
        
          <div className="col-md-4" >
            <VideoList
              videos={this.state.videos}
              onSelectVideo={this.onSelectVideo}
            />
          </div>
        </div>
        
        

      </React.Fragment >
    );
  }

}

export default App;
