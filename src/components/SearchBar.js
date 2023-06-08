import React, { useState } from 'react';

const SearchBar = ({ onSearchResult }) => {
	const [searchInput, setSearchInput] = useState("");


	const handleInputChange = (e) => {
		setSearchInput(e.target.value.toString())
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSearchResult(searchInput);
	};

	return(
		<div>
			<form className="d-flex" onSubmit={handleFormSubmit}>
				<input 
				className="form-control me-2"
				aria-label="Search"
				type="search" 
				value={searchInput} 
				onChange={handleInputChange} 
				placeholder="Search"
				/>
				<button type="submit" className="btn btn-outline-success">Search</button>
			</form>
		</div>
		);
};

export default SearchBar;