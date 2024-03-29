export async function GET(request, response) {
  console.log("requested");
  return NextResponse.json({ my: "data" });
}


/*
'use server'
import {NextApiRequest,NextApiResponse} from 'next'



const getMovieList = async(req:NextApiRequest,res:NextApiResponse)=>{
	const response = await fetch('https://example.com/');
	const html = await response.text();

	console.log(html)
	res.status(200).json({html})
}


export default getMovieList

*/