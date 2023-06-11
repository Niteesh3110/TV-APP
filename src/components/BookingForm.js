import React from 'react';
import '../styles/BookingForm.css';
import { Link } from 'react-router-dom';


const BookingForm = ({ shows }) => {

	const showName = shows.name
	const showImage = shows.image.medium;
	const showType = shows.type;



	return(
		<div className = "d-flex justify-content-center align-items-center">
			<div className = "card text-bg-dark" id="show-card">
				<div class="card mb-3" style={{maxWidth: "540px", border: "none", background: "#212529", color: "white"}}>
					<div class="row g-0">
					    <div class="col-md-4">
						    <img src={showImage} class="img-fluid rounded-start" alt="..."/>
					    </div>
					    <div class="col-md-8">
						      <div class="card-body">
						        <h5 class="card-title">{showName}</h5>
						        <p class="card-text">{showType}</p>
						      </div>
					    </div>
					</div>
				</div>
				<form id="booking-form">
					<div className="row g-3" style={{paddingBottom: "20px"}}>
					  <div className="col-6">
					    <input type="text" className="form-control text-bg-light" placeholder="First name" aria-label="First name" required/>
					  </div>
					  <div className="col-6">
					    <input type="text" className="form-control text-bg-light" placeholder="Last name" aria-label="Last name" required/>
					  </div>
  					  <div className="col-6">
					    <input type="text" className="form-control text-bg-light" placeholder="Phone Number" aria-label="Phone number" required/>
					  </div>
					</div>
					<div className="col-12">
						<input type="text" className="form-control text-bg-light" id="inputAddress" placeholder={showName} disabled/>
					</div>
					<div id="book-btn">
						<Link className="btn btn-primary" to={'/bookingconfirmed'}>Confirm</Link>
					</div>
				</form>
			</div>
		</div>
		);
};

export default BookingForm;