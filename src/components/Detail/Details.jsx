import React from 'react'
import '../img.css'


const style = {
    color: '#000',
    fontSize: '1.2em',
    fontWeight: 'bold',
    textAlign: 'left'
}
const h1 = {
    margin: '10xp',
    fontSize: '1.5em',
    fontWeight: 'bold',
}
const a = {
    fontWeight: 'bold',
    textDecoration: 'none',
    color:'#ffff'
}
export default function Details({ image, name, id, species, status, location }) {


    return (
        <>
            <h1 style={h1}>DETALLES</h1>
            <div style={style}>
                <label>IDENTIFICADOR:</label><p className='p'>{id}</p>
                <label>ESTADO:</label><p className='p'>{status}</p>
                <label>ESPECIE:</label><p className='p'>{species}</p>
                <label>TIPO:</label><p className='p'>{name}</p>
                <label>UBICACION:</label><p className='p'>{location}</p>
                <label>URL:</label><p className='p'><a  style={a} href={image} target="_blank">VER IMAGEN</a></p>
            </div>
        </>
    )
}
