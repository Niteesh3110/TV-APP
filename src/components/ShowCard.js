import React from 'react';
import ErrorImage from '../assests/error.png';
import { Link } from 'react-router-dom';

const showCard = ({ shows }) => {
	try{
		const showName = shows.show.name;
		const showImageLink = shows.show.image.medium;
		const showType = shows.show.type;
		const showID = shows.show.id;

		return(
				<div className="card text-bg-dark" style={{width: '100%', height: "100%"}}>
				  <img src={showImageLink} className="card-img-top" alt="showImage" style={{width: "100%", height: "200px"}}/>
				  <div className="card-body text-bg-dark ">
				    <h5 className="card-title">{showName}</h5>
				    <p className="card-text">Type: {showType}</p>
				    <div className="card-footer text-bg-dark d-flex justify-content-center" style={{border: "none"}}>
					    <Link to={`/summary/${showID}`} className="btn btn-primary">Summary</Link>
					</div>
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