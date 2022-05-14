export const API_URL='https://rickandmortyapi.com/api'


export default function fromApiResponse(apiResponse){
        const {next , prev}=apiResponse.info
        const {results}=apiResponse
    if(Array.isArray(results)){
        const img=results.map(img=> {
            const {image , name , id , species , status}=img
            const location=img.location.name
            return {image , name , id , species , status , location}
        })
        return {img, next , prev}
    }
}