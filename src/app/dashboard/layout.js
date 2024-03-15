'use client'
import SideNav from '../ui/dashboard/sidenav';



export default function Layout({children}){
	return(
		<div className = "flex-grow p-3 md:overflow-y-auto md:p12 bg-emerald-400">
		<SideNav/>
		<div className="m-3 mx-10 bg-yellow-300">
		{children}
		</div>
		</div>
		)
}

