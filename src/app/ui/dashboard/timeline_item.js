'use client'
import Link from 'next/Link';
import {clsx} from 'clsx';
import {caveat} from '../../fonts';
import {useEffect} from 'react';


const skillLists = [ "Javascript" ,"HTML" , "Bootstrap", "React","CSS" ];
const title_theme = `${caveat.className} text-rose-400`



export function SkillItems(){
	return(
	<div className="pb-5">
	<h2 className={title_theme}><u>Skills</u></h2>
	<div className="flex flex-row w-60 ">

	{skillLists.map((skill)=>{
		return(
		<div >
		<button type="button" 
				className="btn btn-outline-secondary btn-sm m-2" >
		{skill}
		</button>
		</div>
		)
	})}

	</div>
	</div>
	)
}



export function TimelineItem({events}){
	useEffect(()=>{
		console.log(events)
	},[])
	return(
	<>
	<h2 className={title_theme}><u>Experiences</u></h2>
	<div className="container h-auto p-1 pe-3">
	{events.map((e)=>{
	return (

	<div className="relative pl-8 sm:pl-32 py-6 group pb-10">
	<div className={`${caveat.className} capitalize text-2xl text-indigo-500 mb-1 sm:mb-0`}>{e.subtitle}</div>

	<div className={clsx(
	"flex flex-col sm:flex-row",  //mobile is row
	"items-start mb-1 group-last:before:hidden before:absolute", 
	"before:left-2 sm:before:left-0", 
	"before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] ", 
	"before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute", 
	"after:left-2 sm:after:left-0", 
	"after:w-2 after:h-2 after:bg-indigo-600 ", 
	"after:border-4 after:box-content after:border-slate-50 after:rounded-full", 
	"sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5",
	)}>
	<time className={clsx("sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center", 
	"text-sm font-semibold uppercase w-20 h-6", 
	"mb-3 sm:mb-0", 
	"text-emerald-600 bg-emerald-100 rounded-full")}>{e.date}</time>
	<div className="text-xl font-bold text-slate-900">{e.title}</div>
	</div>

	<div className="text-slate-500 translate-x-[-1.25rem]">
	<ul className="list-disc">{
		e.content.map((e)=>{
			return(<li key={e}>{e}</li>)
		})
	}
	</ul>
	</div>
	</div>




	)})
	}
	</div>
	</>
       )
}


