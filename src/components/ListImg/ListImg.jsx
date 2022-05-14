import React from 'react';
import Img from 'components/Img/Img';
import '../img.css'
import { Link, useLocation } from 'wouter';


const style = {
    width: '500px',
    height: '500px',
    border: '2px solid black',
    borderRadius: '50%',
}
const stylePadre = {
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}


export default function ListOfImg({ imgs }) {
    const [path, pushLocation] = useLocation();
    let linea = path.includes('/search/') ? <hr></hr> : null
    let titulo = path.includes('/search/') ? 'No hay imagenes disponibles' : null
    if (!Array.isArray(imgs) || imgs.length == 0) {
        return (
            <div className='grid-container' style={stylePadre}>
                <article className='location-listing'>
                    <h2>{titulo}</h2>
                    <div >
                        <img style={style} className='error'></img>
                    </div>
                </article>
            </div>

        )
    }
    return (
        <>
            {linea}
            <div className='grid-container'>
                {
                    imgs.map(img => (
                        <Img key={img.id == null ? console.log(img) : img.id} {...img} />
                    ))
                }
            </div>
        </>

    )
}