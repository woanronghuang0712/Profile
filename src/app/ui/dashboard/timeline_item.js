import Link from 'next/Link';
import {clsx} from 'clsx';
import {caveat} from '../../fonts';

const events = [
	{subtitle:"To infinity and beyond!" ,date:"Sep, 2023" ,title:"Taiwan Space Agency (TASA), Taiwan" ,content:"Managed satellite division operations and collaborated on engineering aspects at Taiwan NASA, integrating engineering principles into satellite orbit planning for optimal mission outcomes."	},
	{subtitle:"Mathematics is God's symbol of nature." ,date:"Aug, 2022" ,title:"Graduated from National Yang Ming University, Taiwan" ,content:"Specialized in Neural Networks, authored an exceptional thesis that integrates statistical models with neural network theory."	},
	
	]


function TimelineItem(){
	return(
		<div className="container h-auto p-2">
	{events.map((e)=>{
	return (
		
			<div className="relative pl-8 sm:pl-32 py-6 group pb-10">
					<div className={`${caveat.className} capitalize text-2xl text-indigo-500 mb-1 sm:mb-0`}>{e.subtitle}</div>
			
				<div class={clsx(
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
			    	<div class="text-xl font-bold text-slate-900">{e.title}</div>
		    	</div>

		        <div class="text-slate-500">{e.content}</div>
	   	 	</div>
	   	 	
		    
    		
    		
    )})
	}
	</div>
	
       )
}


export default TimelineItem;