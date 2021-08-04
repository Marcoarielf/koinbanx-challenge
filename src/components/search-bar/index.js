import {useState} from 'react';
import './styles.css';
import Logo from './../../images/koinbanx_logo.png'
import Enviar from './../../images/check.png'
import Borrar from './../../images/borrar.png'

export default function SearchBar() {

    let query = '?q={';
    const [activo, setActivo] = useState(false);
    const [ordered, setOrdered] = useState([]);

    //filtros
    const [id, setID] = useState([]);
    const [cuit, setCuit] = useState([]);
    const [nombreComercio, setNombreComercio] = useState([]);

    function handlerActivo(e){
        setActivo(activo ? false : true);
    }
    function handlerID(e){
        // console.log(e.target.value);
        setID(e.target.value);
    }
    function handlerCuit(e){
        // console.log(e.target.value);
        setCuit(e.target.value);
    }
    function handlerNombre(e){
        // console.log(e.target.value);
        setNombreComercio(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if( id.length !== 0) query += `"id": {"$regex" : ".${id}*"}`
        if( cuit.length !== 0) query += `"cuit": {"$regex" : ".${cuit}*"}`
        if( nombreComercio.length !== 0) query += `"comercio": {"$regex" : ".${nombreComercio}*"}`
        if( activo ) query += `"activo": ${activo},`
        if( ordered.length !== 0 ) {
            if(ordered === 'comercio'){
                query += `&h={"$orderby": {"comercio": 1}}`
            }else{
                query += `&h={"$orderby": {"cuit": 1}}`
            }
        }
        // limpiarInputs();
        if(query !== '?q={') {
            console.log(query.replace(/\s+/g, ''))
        }
        limpiarFiltros()
    }

    function limpiarFiltros(){
        query = '';

        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = "")
          );
        // console.log('entra');
        setActivo(false);
        setOrdered([]);
        setID([]);
        setCuit([]);
        setNombreComercio([]);
        // console.log(id);
    }
    
  return (
    <div className="container-searchbar">
        <a rel="noreferrer" href="https://www.koibanx.com/" target="_blank">
          <img src={Logo} alt="koinbanx logo"/>
        </a>
      <div className="ordenar">
        <form onSubmit={handleSubmit}>

            {/* <label>
                <input className="searchbar" type="text" onChange={handleChange} placeholder="buscar..." />
            </label> */}

            <br />
            <h2>Ordenar por</h2>
            <div className="checkboxes">
                <div>
                    <input type="radio" name="orden" value={ordered} onClick={() => setOrdered('comercio')}/> Comercio
                </div>
                <div>
                    <input type="radio" id="cuit" name="orden" value={ordered} onClick={() => setOrdered('cuit')} /> CUIT
                </div>
            </div>
            <br /> <br />
            <div className="filtros">
                    <h2>Filtros</h2>

                    <label><p>ID</p></label>
                    <input type="text" id="id" placeholder="281298" onChange={handlerID} />
                    
                    <label><p>CUIT</p></label>
                    <input type="text" maxLength="13" placeholder="20-3892392-1" onChange={handlerCuit} />
                    {/* <span className='info'>Incluir guiones</span> */}
                    

                    <label><p>Nombre comercio</p></label>
                        <input type="text" placeholder="Havana" onChange={handlerNombre}/>
                    

                    <div className="activo">
                        <input
                            name="activo"
                            type="checkbox"
                            onClick={() => handlerActivo()} 
                        /> <p>Activo</p>
                    </div>
            </div>
                <div className="actionButtons">
                        <div className="limpiar" onClick={limpiarFiltros}>
                            <img src={Borrar} alt="borrar" />
                        </div>
                        <div className="enviar">
                            <button><img src={Enviar} alt="enviar" /></button>
                        </div>
                </div>
        </form>

      </div>
    </div>
  );
}
