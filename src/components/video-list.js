import React from 'react';
import VideoListItem from './video-list_item';

const VideoList = (props) => {
  // Even thought this is an array React knows to render each in a list
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
