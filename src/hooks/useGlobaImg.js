import { useContext } from "react";
import  ImgContext  from "../Context/ImgContext"; 

export default function useGlobalImage(){
    const {img}=useContext(ImgContext)
    return img
}