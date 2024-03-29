//import TimelineItem from '../../ui/dashboard/timeline_item.js';
import TimelineItem from '../ui/dashboard/timeline_item.js';
import JavascriptIcon from '@mui/icons-material/Javascript'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import {angkor} from '../fonts'
import {caveat} from '../fonts';
import clsx from 'clsx';


const skillLists = [ "Javascript" ,"Html" , "TailwindCSS", "NodeJS","CSS" ];
const title_theme = `${caveat.className} pb-2 mt-3 p-2 text-rose-500 text-3xl underline hover:decoration-dotted hover:underline-offset-4 underline-offset-1 duration-300`;

function personal_history(){
	return(
		<div className = "pt-10 ps-10">
		<div className="">
		<h1 className={title_theme}>Experiences</h1>
			<TimelineItem />
			<h1 className={title_theme}>Skills</h1>
			<div className="flex flex-row w-60 ">
			{skillLists.map((skill)=>{
				return(
					<div >
					<p className = {clsx("hover:translate-y-1 duration-300 p-1 m-2 ",
						"text-sm text-gray-100 rounded-md text-  bg-gray-400 bg-opacity-70")}>

					{skill}
					</p>
					</div>
					)
			})}
			
			</div>
			</div>
			
		</div>

		
		)


}



export default personal_history;