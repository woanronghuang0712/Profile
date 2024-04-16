'use client'
import axios from 'axios';
import {useState, useEffect,useCallback,useRef,forwardRef} from 'react';
import {movies_option} from '../../ui/movie_option/nav-movie.js';
import {line_movies} from '../../ui/movie_option/data-line-movie.js';
import {sortMovies,postMovieDataProcessing} from './boxing_moviesHelper.jsx'

import {CardImage,FormWebsiteOption,DisplayMovies,DisplayOrderOption} from '../../ui/movie_option/displayLineMovie.js';

import {Modal} from 'bootstrap';





function boxing_movies(){

	
	let [movies,setMovies] = useState();
	let [orderOption,setOrderOption] = useState('0');
	let [isSending,setIsSending] = useState(false);
	let [modalIsDispaly,setModalIsDisplay] = useState(false);
	const choice = '0'

	const modalRef = useRef();


	
	/*
	useEffect(()=>{
			handleMovieClick({choice,isSending})
			//let new_movie = postMovieDataProcessing({line_movies,choice});
	    	//setMovies(new_movie)
	},[])*/

	
	useEffect(()=>{
		if(movies){
			sortMovies({movies,setMovies,orderOption})
		}
	},[orderOption])


	


	const handleMovieClick = useCallback(
	async ({choice,isSending})=>{
	    const server_url = "http://localhost:8080/";
	    const scrape_url = movies_option[choice].url;


	    console.log(`The movie choice is ${choice}`)
	    console.log(`Request to scrape url: ${scrape_url}`)

	    setIsSending(true)
	    const response_promose = await axios.post(server_url,
	    	{
	    		movie_idx:movies_option[choice].idx,
	    		movieUrl: scrape_url
			})
	    	.then( (response_promise)=>{
			    setMovies(
			    	postMovieDataProcessing({response_promise,choice})
			    )
			}
			    
			)
		setIsSending(false)
		},
	[movies,isSending])



	return(
		<>
		<FormWebsiteOption 
			handleMovieClick = {handleMovieClick}
			isSending = {isSending}
			/>
		<DisplayOrderOption orderOption = {orderOption} 
							setOrderOption = {setOrderOption}/>

		
		<DisplayMovies movies = {movies}/>
		</>


		)
}


export default boxing_movies;