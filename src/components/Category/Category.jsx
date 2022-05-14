import React from "react";
import { Link, useLocation } from 'wouter'
import './index.css'

const popularImgs = ['rick', 'summer', 'beth', 'birdperson']

export default function Category({name}) {
    return (
        <div className="content" >
            <h3  className='App-title'>{name}</h3>
            <ul >
                {popularImgs.map((popularImg) => (
                    <li className="li"   key={popularImg}>
                        <Link  to={`/search/${popularImg}`}>Imgs de {popularImg}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}