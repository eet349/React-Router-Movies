import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
	return (
		<div className='movie-list'>
			{movies.map((movie) => (
				<MovieDetails key={movie.id} movie={movie} />
			))}
		</div>
	);
}

function MovieDetails({ movie }) {
	const history = useHistory();

	return (
		<div
			className='movie-card'
			onClick={(e) => history.push(`/movies/${movie.id}`)}
		>
			<MovieCard movie={movie} />
		</div>
	);
}
