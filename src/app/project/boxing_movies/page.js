'use client'
import axios from 'axios';
async function handleMovieClick(){
	const response = await fetch("http://localhost:3000/api/getMovieList",{
		method:"GET",
		headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
		}
	})
	const data = await response.json();
	if(!res.ok){
		throw new Error('Fail to fetch data')
	}

}


function boxing_movies(){
	return(
		<div>
		<button 
			className = "border-4 border-blue-400 m-20"
			onClick = {handleMovieClick}
			> 
			Movies on Theaters
		</button>
		</div>


		)
}


export default boxing_movies;