import Link from 'next/link';
import { IdentificationIcon,HomeIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx'
//import {usePathname} from 'next/navigation';
//import clsx from 'clsx';


const link = [
	{name:'Home',href:'/dashboard',icon:HomeIcon},
	{name:'Experience',href:'/personal_history',icon:IdentificationIcon},

	];

//menu text for large screen
const large_menu_text = {
	'md:flex':true,
	'md:mx-auto':true,
	'md:items-center':true,
	'md:w-auto':true,
	'md:space-x-10':true,
	}

//basic menu text
const menu_text = [
	'hidden',
	'text-2xl',
	'absolute' ,
	'top-1/2' ,
	'left-1/2' ,
	'transform' ,
	'translate-y-3' ,
	'-translate-x-80'
]

const button_style=[
	'flex flex-col justify-center items-center min-w-28 min-h-12 bg-rose-400 opacity-80', 
	'text-gray-200',
	'hover:bg-violet-500 hover:opacity-90 duration-300',
	'active:text-violet-700 focus:ring'
	]

export default function NavLinks(){
	return(
		
	<nav class="relative px-4 py-4 flex justify-center items-center">
		<div class="md:hidden">
				<button class="navbar-burger flex items-center text-blue-600 p-3">
					<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
		</div>
		<ul className={clsx(menu_text,large_menu_text)}>
			{
				link.map((link)=>{
					const LinkIcon=link.icon;
					return(

						<li key = {link.name}>
						<div className={clsx(button_style)} id={link.name}>
						<Link
						  className={`-translate-y-1 text-lg`}
						  href={link.href}
						>
						<p>{link.name}</p>
						</Link>
						</div>
						</li>
						)
				})
			}

		</ul>
	</nav>
		









		)
}

