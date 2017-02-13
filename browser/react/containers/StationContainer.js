import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function(state, ownProps){
  //console.log('ownProps:', ownProps);
  console.log('state.songs', state.songs);
  const filteredSongs = state.songs.filter(function(song){
    console.log('song.genre', song.genre, 'ownProps.params.genre', ownProps.params.genreName);
    return song.genre === ownProps.params.genreName}).map(convertSong);
  console.log('filteredSongs:', filteredSongs);
  return {
    genreName: ownProps.params.genreName,
    songs: filteredSongs,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list));
    }
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
