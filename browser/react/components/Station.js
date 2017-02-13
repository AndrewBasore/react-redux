import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';

export default function (props) {
  console.log('Station.js props:', props);
  const genreName = props.genreName;
  const songs = props.songs;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;

  return (
    <div>
      <h3>{ genreName } Station</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  );
}
