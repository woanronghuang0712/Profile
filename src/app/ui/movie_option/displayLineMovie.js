'use client'
import {useState} from 'react'
import {movies_option} from './nav-movie.js'
import clsx from 'clsx'
import {StarIcon, AdjustmentsHorizontalIcon} from '@heroicons/react/24/solid'




function CardImage({img_url,open_time,duration}){

const [isHover, setIsHover] = useState(false);

const imgStyle = {
	"opacity": isHover? "0.2": "1" ,
	"display": "block" ,
	"width": "100%" ,
	"maxHeight": "400px",
	"overflow": "hidden",
	"height": "auto" ,
	"transition": ".5s ease" ,
	"backfaceVisibility": "hidden"
	}
const infoStyle = {
	"transition": ".5s ease",
	"opacity": isHover? "0.95":"0"  ,
	"position": "absolute",
	"top": "50%",
	"left": "50%",
	"transform": "translate(-50%, -50%)",
	"msTransform": "translate(-50%, -50%)",
	"textAlign": "center"
	}

	
	
	return(
	<div className={clsx("overflow-hidden",{"bg-gray-400":isHover})}
			onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
	>
	<div className = "card-img-top"
		style = {{
			"position": "relative",
			"width": "100%"
		}}>
	
	<img 
		style={imgStyle}
		src={img_url}
		alt=""
		width={250} height={250}
	/>
	</div>
	<div style={infoStyle}
		 className = 'text-sm text-bold text-white font-bold'>
		  <p>{open_time}</p>
		  <hr className="border-2 text-white"/>
		  <p>{String(duration).concat(' min')}</p>
	</div>
	</div>
		)
}

export function DisplayOrderOption({orderOption,setOrderOption}){
		return(

		// display sorting option
		<div className="input-group m-3">
		{/*
		<div class="dropdown p-1">
			<button class="btn btn-outline-secondary h-9" type="button" data-bs-toggle="dropdown">
			<AdjustmentsHorizontalIcon style={{"width":"15px","height":"15px"}}/>
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			<li><a class="dropdown-item" href="#">Action</a></li>
			<li><a class="dropdown-item" href="#">Another action</a></li>
			<li><a class="dropdown-item" href="#">Something else here</a></li>
			</ul>
		</div>*/}

		<div className="input-group-append p-1">
		<select className="form-select border border-black" 
				id="sortingSelect"
				value={orderOption} 
				onChange={(e)=>{
				setOrderOption(e.target.value)
			}}>
		    <option defaultValue>Sort by</option>
		    <option value={'1'}>Release Time</option>
		    <option value={'2'}>Scores</option>
		    <option value={'3'}>Running Time</option>
		</select>
		</div>
		</div>

		
 
  



		)
	}

export function FormWebsiteOption({handleMovieClick,isSending}){
	let [choice,setChoice] = useState();


	return(
	<div className="bg-white p-4">
	<div className="input-group mb-3 justify-center ">
		<div className="p-1">
		<select className="form-select" 
			value={choice}
			onChange={(e)=>{
				e.preventDefault();
				setChoice(e.target.value)
			}
			}>
			
		  <option key="default_option" >Open this select menu</option>
		  {movies_option.map((m,i)=>{
			return(<option value={m.idx} key={m.choice}>{m.choice}</option>)
			})}
		</select>
		</div>
		
		<div className = "input-group-append p-1">
		<button className ="btn btn-outline-secondary"
			disabled={isSending}
			onClick = {()=> {   
				if(!choice){
					alert('Please choose a website')
				}else{
					handleMovieClick({choice,isSending})
				}}
			}
			> 
			{isSending?  <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
:'Show Movies' }
		</button>
		</div>
	</div>

</div>

	)
}



// Show movie data by list
//function DisplayMovies({movies}){
export function DisplayMovies({movies}){
	if(movies){
		return(
		<div className = 'container'>
		<div className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
		{movies.map((e)=>{
			let has_score = Number(e.score)!==0;
			return(
			<div className="col" key={`movies-${e.title}`}>

			<div className = "card h-100" id={`modal-${e.title}`}>

			<CardImage img_url={e.fig_url } open_time={e.open_time} duration={e.duration}/> 


        	<div className = "card-body">
			<h5 className="card-title text-center h-25">{e.title}</h5>

			
			<div className = "card-text d-flex flex-row justify-content-center pt-1">
			<div className = "p-2">
			<StarIcon className = "text-orange-400" style={{"width":"15px","height":"15px"}}/>
			</div>
			<span className={clsx(["pt-1 font-bold ",{"text-black":has_score},{"text-gray-400":!has_score}])}>{!has_score? 'NA':e.score}</span>
			<span className="p-1 pt-2 text-gray-400 text-xs "> /10</span>
			</div>
			
			</div>

			</div>


			</div>
		)})}
		</div></div>
		)
	
	}else{
		<p> Please choose a movie searching website</p>
	}
}




	