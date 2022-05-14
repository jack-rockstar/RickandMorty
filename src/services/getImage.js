import fromApiResponse from "./setting"
import { API_URL } from "./setting"

export default async function getImage({ keyword='' , page=1}={}){
    const url=`${API_URL}/character/?page=${page}&${keyword}`
    const res= await fetch(url)
    const response=await res.json()
    // const {results}=response
    return fromApiResponse(response)
}

//fetch next image
export async function getNextImage(next){
    const res= await fetch(next)
    const response=await res.json()
    return fromApiResponse(response)
}