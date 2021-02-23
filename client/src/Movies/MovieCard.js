import React from 'react';

export default function MovieCard({
	movie: { title, metascore, director, stars },
}) {
	const renderActorsList = () => {
		return (
			<>
				<h3>Actors</h3>
				{stars.map((star) => (
					<div key={star} className='movie-star'>
						{star}
					</div>
				))}
			</>
		);
	};
	return (
		<>
			<h2>{title}</h2>
			<div className='movie-director'>
				Director: <em>{director}</em>
			</div>
			<div className='movie-metascore'>
				Metascore: <strong>{metascore}</strong>
			</div>
			{stars && renderActorsList()}
		</>
	);
}
