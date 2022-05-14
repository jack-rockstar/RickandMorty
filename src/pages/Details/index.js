import React from 'react';
import Img from '../../components/Img/Img';
import  useGlobaImg  from '../../hooks/useGlobaImg';



export default function Detail({params}){
    const imgs=useGlobaImg()
    const img=imgs.find(singleImg=> singleImg.id==params.id)
    return(
        <>
        <hr></hr>
        <Img  {...img}></Img>
        </>
    )
}