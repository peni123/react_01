import React, { Component } from 'react';
import YouTube from 'react-youtube/dist/YouTube';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeVideo} from '../actions/change-video';

class Video extends React.Component {
  render() {
    const opts = {
      height: '290',
      width: '500',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 0,
        modestbranding: 1,
        controls: 0,
      },

    };
 
    return (
      <YouTube
        videoId={this.props.videos.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
 }

 function matchDispatchToProps(dispatch) {
  return bindActionCreators({changeVideo: changeVideo}, dispatch)
}

function mapStateToProps(state) {
    return {
        videos: state.videos,
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(Video);


 