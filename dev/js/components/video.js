import React, { Component } from 'react';
import YouTube from 'react-youtube/dist/YouTube'

class Video extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
 }
export default Video;
 