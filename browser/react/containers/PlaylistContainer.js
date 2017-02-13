import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  const selectedPlaylist = state.playlists.selected;
  const {currentSong, currentSongList, isPlaying, progress} = state.player;

  return {
    selectedPlaylist,
    currentSong,
    currentSongList,
    isPlaying,
    progress
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    toggleOne: function(song, list) {
      store.dispatch(toggleSong(song,list));
    }
  }
}

const PlaylistContainer = connect(
                            mapStateToProps,
                            mapDispatchToProps
                            )(Playlist);

export default PlaylistContainer;
