import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

// export default class PlayerContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().player;
//     this.toggle = this.toggle.bind(this);
//   }

//   componentDidMount() {

//     AUDIO.addEventListener('ended', this.next);
//     AUDIO.addEventListener('timeupdate', () => {
//       store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
//     });

//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().player);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   next() {
//     store.dispatch(next());
//   }

//   prev() {
//     store.dispatch(previous());
//   }

//   toggle() {
//     store.dispatch(
//       toggleSong(this.state.currentSong, this.state.currentSongList)
//     );
//   }

//   render() {
//     return <Player
//       {...this.state}
//       next={this.next}
//       prev={this.prev}
//       toggle={this.toggle}
//     />;
//   }

// }


const mapStateToProps = function(state, ownProps){
  const {currentSong, currentSongList, isPlaying, progress} = state.player;


  return {
    currentSong,
    currentSongList,
    isPlaying,
    progress
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
  console.log("state is: ", ownProps);
  return {
    toggle: function(song, list){
      dispatch(toggleSong(song, list));
    },
    prev: function(){
      dispatch(previous());
    },
    next: function(){
      dispatch(next());
    }
  };
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(

    class extends Component{

      componentDidMount(){
        AUDIO.addEventListener('ended', this.next);
        AUDIO.addEventListener('timeupdate', () => {
          store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
        });
      }

      render(){
        return <Player {...this.props}/>
      }

    }

);
export default PlayerContainer;
