'use client'
import {TimelineItem , SkillItems} from '../ui/dashboard/timeline_item.js';
import JavascriptIcon from '@mui/icons-material/Javascript'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import {angkor} from '../fonts'
import {caveat} from '../fonts';
import clsx from 'clsx';
import {experiences_data} from '../data/experiences.js';




const title_theme = `${caveat.className} text-rose-400`

function personal_history(){

	



	return(
	<div className = "pt-10 ps-10">
	
	<TimelineItem events = {experiences_data}/>
	<SkillItems />

	</div>
		)
}



export default personal_history;