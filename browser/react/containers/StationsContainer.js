import { connect } from 'react-redux';
import Stations from '../components/Stations';

const groupSongsByGenre = function(songList){
	var stations = {};

	songList.forEach( song =>{
		const genre = song.genre;
		stations[genre] = stations[genre] || [];
		stations[genre].push(song);
	})
	return stations;
}

const mapStateToProps = function(state){
	return {
		stations: groupSongsByGenre(state.songs)
	};
}

const mapDispatchToProps = function(dispatch){
	return {

	};
}

const StationsContainer = connect(
                                  mapStateToProps,
                                  mapDispatchToProps
                                  ) (Stations);

export default StationsContainer;
