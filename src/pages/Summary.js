import React , { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { searchShowById } from '../api.js';
import parse from 'html-react-parser';
import "../styles/Summary.css"
import BookingForm from '../components/BookingForm.js'


const Summary = () => {

	const { showID } = useParams();
	const [ showData, setShowData ] = useState([]);
	const [ bookingForm, setBookingForm ] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try{
				const data = await searchShowById(showID);
				setShowData(data);
			} catch (error){
				console.log(error);
			}
		};
		fetchData();
	}, [showID]);

	if(showData.length === 0){
		return <div className="d-flex justify-content-center">
			Loading. . .
		</div>
	}

	const handleBooking = () => {
		setBookingForm(true)
	};

	if(bookingForm){
		return <BookingForm shows={ showData }/>
	}

	const showName = showData.name;
	const showImage = showData.image?.medium;
	const showSummary = parse(`${showData.summary}`);
	const showType = showData.type;
	const showLanguage = showData.language;

	return(
		<div className="d-flex justify-content-center">
			<div className="card text-center justify-content-center" style={{width: "60%", height: "40rem", margin: "20px", background: "#212529"}}>
				<div>
					<img src={showImage} className="card-img-top" alt="..." id="show_image"/>
				</div>
				<div className="card-body" style={{padding: "10px", color: "white"}}>
				    <h5 className="card-title">{showName}</h5>
				    <p className="card-text">Type: {showType} <br/> Language: {showLanguage}</p>
				    <div className="card-text" id="summary">{showSummary}</div>
			    <div id="buttons">
			    	<button onClick = {handleBooking} className="btn btn-primary">Book</button>
				    <a href="/" className="btn btn-primary">Go Back</a>
			    </div>
			  </div>
			</div>
		</div>
		)
};

export default Summary;
