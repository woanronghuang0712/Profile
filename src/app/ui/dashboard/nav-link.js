import Link from 'next/link';
import { IdentificationIcon,HomeIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx'

const link = [
	{name:'Home',href:'/dashboard',icon:HomeIcon},
	{name:'Experience',href:'/personal_history',icon:IdentificationIcon},
	{name: 'Projects',href:'/project/boxing_movies'}
	];


export default function NavLinks(){
	return(
		<div>
		<ul className="nav nav-pills justify-content-end">
		{
			link.map((link_e)=>{
				return(
					<li className = "nav-item" key = {link_e.name}   >
					<a className="btn btn-light m-1" href = {link_e.href}>
					{link_e.name}
					</a>
					</li>
				)
			})
		}
		 </ul>
		 </div>

		)
}

