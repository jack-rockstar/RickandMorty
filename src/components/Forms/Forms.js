import React , {useState} from 'react'
import { Link, useLocation } from 'wouter'


const style = {
    width:'80%',
    padding:'10px',
    margin:'auto',
    borderRadius:'10px',
    background:'#5555',
    color:'#fff',
    border:'2px solid #E23E2E',
}
const styleInput={
    width:'50%',
    height:'31px',
    borderRadius:'10px 0px 0px 10px',
    border:'2px solid #fff',
    outline:'none'
}
const styleSelect={
    width:'22%',
    height:'36px',
    borderRadius:'0px 0px 0px 0px',
    border:'none',
    background:'#E23E2E',
    outline:'none',
    color:'#fff',
    fontSize:'13px',
    fontWeight:'bold',
    padding:'0px',
    margin:'0px',
    fontFamily:'sans-serif'

}

 function Forms({onSubmit}) {
    const [keyword, setKeyword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()


        let estado=document.getElementById('estado').value
        let especie=document.getElementById('especie').value
        let data={
            keyword:keyword,
            estado:estado,
            especie:especie
        }
        // //navegar otra ruta
        // pushLocation(`/search/${data.keyword}&status=${data.estado}&species=${data.especie}`)
        onSubmit({data})

    }
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={style}>
                    <input style={styleInput}  placeholder='ESCRIBIR EL NOMBRE...' type="text" onChange={handleChange} value={keyword}></input>
                    <select id='estado'  style={styleSelect}>
                        <option value="">ESTADO</option>
                        <option value="alive">VIVO</option>
                        <option value="dead">MUERTO</option>
                        <option value="unknown">DESCONOCIDO</option>
                    </select>
                    <select id='especie' style={styleSelect}>
                        <option value="">ESPECIE</option>
                        <option value="human">HUMANO</option>
                        <option value="unknown">DESCONOCIDO</option>
                        <option value="alien">ALIENIGENA</option>
                    </select>
                </div>
            </form>
            <br></br>
            <hr></hr>
        </>
    )

}

export default React.memo(Forms)