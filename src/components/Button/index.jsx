import React, { useContext, useEffect, useState } from 'react';
import ImgContext from 'Context/ImgContext';
import { getNextImage } from 'services/getImage';
import '../img.css'


const div = {
    margin: '10px 0px',
    height: '40px',
    display: 'grid',


}

const divs = {
    margin: '10px 0px',
    height: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',

}
const hijo = {
    justifySelf: 'center',
    alignSelf: 'center',
    width: '100%'


}
const button = {
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '15px',
    transition: 'all 0.3s ease',
}


export default function Button({ url, name }) {

    const { img, setImg } = useContext(ImgContext)
    const [nextImg, setNextImg] = useState(url);
    const [prevImg, setPrevImg] = useState(null);

    const nextImage = () => {
        getNextImage(nextImg).then(image => {
            const { img, next, prev } = image
            setNextImg(next)
            setPrevImg(prev)
            setImg(img)
        })
    }
    const prevImage = () => {
        getNextImage(prevImg).then(image => {
            const { img, next, prev } = image
            setImg(img)
            setNextImg(next)
            setPrevImg(prev)
        })
    }



    return (
        <div style={prevImg == null ? div : divs}>
            <div style={hijo}>
                {prevImg == null ? null : <button className='btn' style={button} onClick={prevImage}>Regresar</button>}
            </div>
            <div style={hijo}>
                <button className='btn' style={button} onClick={nextImage}>{name}</button>

            </div>

        </div>
    )

}