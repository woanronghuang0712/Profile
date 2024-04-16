
import {line_movies} from '../../ui/movie_option/data-line-movie.js';






export function sortMovies({movies,setMovies,orderOption}){
	let new_movies = [...movies];
		switch(orderOption){
		case '0':
			break;
		case '1': // sort by release time
			new_movies.sort((a,b)=>{
				return new Date(b.open_time)-new Date(a.open_time)
			})
			setMovies(new_movies)
			break;
		case '2': // sort by scores
			new_movies.sort((a,b)=>{
				return (b.score)-(a.score)
			})
			setMovies(new_movies)
			break;
		case '3': // sort by running tim
			new_movies.sort((a,b)=>{
				return (b.duration)-(a.duration)
			})
			setMovies(new_movies)
			break;
		default:
			alert('not valid choice')
			break;
		}

}

export function postMovieDataProcessing({response_promise,choice}){

	let response_data = response_promise.data['movies_data'];
	//let response_data = line_movies
	let proceeded_movie = new Array();
	switch(choice){
	//Case: Line Movie
	// - title : chn_title
	// - score : score
	case '0':
		proceeded_movie = response_data.map((e)=>{
			let new_title = e.chn_title.length>14? e.chn_title.slice(0,12).concat('...'):e.chn_title
			

			let raw_duration = e.movie_duration
			let duration_hr = Number(raw_duration.split('hr')[0])
			let duration_min = Number(raw_duration.split('hr')[1].split('min')[0])
			let movie_duration = duration_hr*60+duration_min;
			return({'title':new_title,
				'score':e.score,
				'fig_url':e.fig_url,
				'open_time':e.onDate,
				'duration': movie_duration})
		})
		break;
	//Case: Rotten Tomatoes Movie
	// - title : title
	// - score : critic_score
	case '1':
		proceeded_movie = response_data.map((e)=>{
			return({'title':e.title,'score':(e.audience_score/10)})
		})
		break;
	default:
		console.log('No valid choice')

	}
	return(proceeded_movie)	
}








