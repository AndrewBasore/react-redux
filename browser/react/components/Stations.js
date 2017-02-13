import React from 'react';
import { Link } from 'react-router';

export default function( { stations } ) {
	console.log("Stations is recieving props.stations: " , stations);
	const genres = Object.keys(stations);


	const DUMMY_STATIONS_DATA = [
	  { name: '90s Hip Hop' },
	  { name: 'Death Metal' },
	  { name: 'Classical' }
	];

	return (
		<div>
	      <h3>Stations</h3>
	      <div className="list-group">
	      {
	        genres.map((genre, index )=> {
	          return (
	            <div className="list-group-item" key={index}>
	              <Link to={`/stations/${genre}`}>{genre}</Link>
	            </div>
	          );
	        })
	      }
	      </div>
	    </div>
	);
}
