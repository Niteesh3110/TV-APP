import React, { useState, useEffect } from 'react';
import searchShow from '../api.js';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import '../styles/home.css'
import '../font.css';



const Home = () => {
	const [searchTerm, setSearchTerm] = useState([]);

	const handleSearch = async (searchInput) => {
		try {
			const data = await searchShow(searchInput);
			setSearchTerm(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => { document.body.style.backgroundColor = '#222831' }, [])

	return(
		<div className="home-container" id="main">
			<nav className="navbar bg-body-tertiary" data-bs-theme="dark">
			  <div className="container-fluid">
			    <a href="/" className="navbar-brand">TV-SHOWS</a>
			    <SearchBar onSearchResult={handleSearch}/>
			  </div>
			</nav>
			<div>
				<div className = 'row' id="cardsView">
					{searchTerm.map((items, index) => (
						<div className = "col-sm-6 col-md-4 col-lg-3 col-xl-3" style={{paddingBottom: '10px'}} key={index}>
							<div className = 'card' id="cards">
								<ShowCard key={index} shows={items}/>
							</div>
						</div>
						))}
				</div>
			</div>
		</div>
		);
};

export default Home;