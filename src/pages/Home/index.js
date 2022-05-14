import  React, { useCallback }  from 'react'
import ListOfImg from 'components/ListImg/ListImg'
import { useImage } from 'hooks/useImage'
import 'components/img.css'
import Forms from 'components/Forms/Forms'
import LazyTrending from 'components/TrendingSearches'
import { Link , useLocation } from 'wouter'

const title = {
    fontFamiliy: 'sans-serif',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#000'
}

export default function Home() {
    const [path, pushLocation] = useLocation()
    const { loading, img } = useImage()

    const handleSubmit=useCallback(({data})=>{
        pushLocation(`/search/${data.keyword}&status=${data.estado}&species=${data.especie}`)
    } , [pushLocation])
   
   
    return (
        <>
            <Forms onSubmit={handleSubmit}/>
            <h3 style={title} className='App-title'>Ultima busqueda</h3>
            <ListOfImg imgs={img}/>
            <hr></hr>
            <LazyTrending />
        </>
    )
}