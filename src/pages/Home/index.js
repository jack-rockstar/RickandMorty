import  React  from 'react'
import ListOfImg from 'components/ListImg/ListImg'
import { useImage } from 'hooks/useImage'
import 'components/img.css'
import Forms from 'components/Forms/Forms'
import LazyTrending from 'components/TrendingSearches'


const title = {
    fontFamiliy: 'sans-serif',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#000'
}

export default function Home() {
    
    const { loading, img } = useImage()
   
   
    return (
        <>
            <Forms/>
            <h3 style={title} className='App-title'>Ultima busqueda</h3>
            <ListOfImg imgs={img}/>
            <hr></hr>
            <LazyTrending />
        </>
    )
}