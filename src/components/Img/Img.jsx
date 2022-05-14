import React from 'react';
import { Link, useLocation } from 'wouter'
import Details from 'components/Detail/Details';
import '../img.css'



export default function Img({ image, name, id, species ,status , location}) {
    const [path, pushLocation] = useLocation()
    if (path.includes('/img/')) {
        const containerItems={
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
            gridGap:'1em',
            margin:'15px',
            border:'5px solid #000'
        } 
        const style = {
        padding:'5px 5px 0px 5px'
        }
        return (
            <div className='container'>
                <h2>{name}</h2>
                <div className='containerItems' style={containerItems}>
                    <article style={style}>
                        <img loading='lazy' id={id} src={image}></img>
                    </article>
                    <article style={style}>
                        <Details image={image} name={name} id={id} species={species} location={location} status={status}></Details>
                    </article>
                    
                </div>
            </div>
        );

    } else {
        return (
            <Link to={`/img/${id}`}>
                <article className='location-listing'>
                    <h2 className='location-title'>{name}</h2>
                    <div className='location-image'>
                        <img loading='lazy' id={id} src={image}></img>
                    </div>
                </article>
            </Link>
        );
    }
}