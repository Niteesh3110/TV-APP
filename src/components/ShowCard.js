import React from 'react';
import parse from 'html-react-parser';
import ErrorImage from '../assests/error.png';
import { Link } from 'react-router-dom';

const showCard = ({ shows }) => {
	try{
		console.log(shows)
		const showName = shows.show.name;
		const showImageLink = shows.show.image.medium;
		const showType = shows.show.type;
		const showID = shows.show.id;

		return(
				<div className="card" style={{width: '100%', height: "100%"}}>
				  <img src={showImageLink} className="card-img-top" alt="showImage"/>
				  <div className="card-body">
				    <h5 className="card-title">{showName}</h5>
				    <p className="card-text">Type: {showType}</p>
				    <Link to={`/summary/${showID}`} className="btn btn-primary">Summary</Link>
				  </div>
				</div>
			);

	} catch (error) {
		return(
			<div className="card" style={{width: '100%', height: "100%"}}>
				<div className="card-body">
					<img src={ErrorImage} className="card-img-top" alt="showImage"/>
				    <h5 className="card-title">Something went wrong. . .</h5>
				    <Link className="btn btn-primary">Summary</Link>
				</div>
				</div>
			)
	}
}

export default showCard;