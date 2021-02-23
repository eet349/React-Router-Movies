import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SavedList(props) {
	return (
		<div className='saved-list'>
			<h3>Saved Movies:</h3>
			<nav>
				{props?.list?.map((movie) => (
					<NavLink
						to={`/movies/${movie.id}`}
						className='saved-movie'
						key={movie.id}
					>
						{movie.title}
					</NavLink>
				))}
			</nav>
			<Link to='/'>
				<div className='home-button'>Home</div>
			</Link>
		</div>
	);
}
