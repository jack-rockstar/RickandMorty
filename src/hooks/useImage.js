import { useContext, useEffect, useState } from 'react'
import getImage from '../services/getImage'
import ImgContext from '../Context/ImgContext'



export function useImage({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
   const [next , setNext] = useState(null)
   const [prev, setPrev] = useState(null)
  const { img, setImg } = useContext(ImgContext)

  //recuperamos la keyword del local
  const keywordAll = keyword || localStorage.getItem('lastKeyword') || 'Jerry'

  
  useEffect(function () {
    setLoading(true)
    getImage({ keyword: `name=${keywordAll}` }).then(image => {
      const { img, next , prev} = image
      setNext(next)
      setPrev(prev)
      setImg(img)
      setLoading(false)
      if (keyword) localStorage.setItem('lastKeyword', keyword)
    }).catch(error => {
      console.log(error)  
      setLoading(false)
      setImg([])
    })
  }, [keyword, setImg, keywordAll])


  return { loading , img , next , prev}
}