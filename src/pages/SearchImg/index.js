import React, {useCallback, useEffect, useRef } from 'react'
import ListOfImg from "components/ListImg/ListImg";
import Button from 'components/Button';
import { useImage } from "hooks/useImage";

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, img , next} = useImage({ keyword })

    return (
        <>
            {
                loading
                    ? <i>Cargando 🔃</i>
                    :<>
                    <ListOfImg imgs={img} />
                    {/* <div id='visor' ref={externalRef}></div> */}
                    {next==null ? null:<Button url={next} name={'Ver mas'}></Button>}
                    </> 
            }

        </>
    )
}