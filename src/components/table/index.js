import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router,  Link } from "react-router-dom";
import './styles.css';
import Loading from './../../images/loading.gif'
import Pagination from './../pagination'

export default function Table() {

    // const [indexPage, setIndexPage] = useState(1);
    const [ data, setData ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const rowsPerPage = 3;
    
    const API = 
     {
        data: [
            {
                id: 1,
                comercio: 'Juan',
                cuit: 2024020323,
                concepto1: 2,
                concepto2: 2,
                concepto3: 2,
                concepto4: 2,
                concepto5: 2,
                concepto6: 2,
                balanceActual: 2030,
                activo: 1,
                ultimaVenta: 232
            },
            {
                id: 2,
                comercio: 'Pancho 33',
                cuit: 2024020323,
                concepto1: 2,
                concepto2: 2,
                concepto3: 2,
                concepto4: 2,
                concepto5: 2,
                concepto6: 2,
                balanceActual: 2030,
                activo: 1,
                ultimaVenta: 232
            },
            {
                id: 3,
                comercio: 'Pancheria',
                cuit: 2024020323,
                concepto1: 2,
                concepto2: 2,
                concepto3: 2,
                concepto4: 2,
                concepto5: 2,
                concepto6: 2,
                balanceActual: 2030,
                activo: 0,
                ultimaVenta: 232
            },
            {
                id: 4,
                comercio: 'Pizzeria',
                cuit: 2024020323,
                concepto1: 2,
                concepto2: 2,
                concepto3: 2,
                concepto4: 2,
                concepto5: 2,
                concepto6: 2,
                balanceActual: 2030,
                activo: 1,
                ultimaVenta: 232
            },
            {
                id: 4,
                comercio: 'Manolo',
                cuit: 2024020323,
                concepto1: 2,
                concepto2: 2,
                concepto3: 2,
                concepto4: 2,
                concepto5: 2,
                concepto6: 2,
                balanceActual: 2030,
                activo: 1,
                ultimaVenta: 232
            },
            {
                id: 4,
                comercio: 'Montecatini',
                cuit: 2024020323,
                concepto1: 2,
                concepto2: 2,
                concepto3: 2,
                concepto4: 2,
                concepto5: 2,
                concepto6: 2,
                balanceActual: 2030,
                activo: 0,
                ultimaVenta: 232
            },
        ],
        page: 1,
        pages: 100,
        rowsperPage: 10,
        total: 1000
     }

     //SIMULACION Respuesta API
     useEffect(() => {
         const fetch = Promise.resolve(API);

         setTimeout(() => {
             fetch.then((value) => {
                 setData(value.data);
             });
          }, 2000);
     },[])

     // pagination

     const indexOfLastPage = currentPage * rowsPerPage;
     const indexOfFirstPage = indexOfLastPage - rowsPerPage;
     const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);

    if(data.length === 0){
        return(
            <div>
                <p>Estamos buscando entre más de 1M de comercios...</p>
                <img className="gif" src={Loading} alt="loading" />
            </div> 
        )
    }else{
        return (
            <React.Fragment>
            <table>
                <thead>
                    <tr>
                    {Object.keys(API.data[0]).map( (res, i) => {
                        return(
                        <th key={i}>{res}</th>
                        )
                    })}
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map( (_, i) => {
                        return(
                            <tr key={i}>
                                {Object.values(currentPosts[i]).map( (res, index) => {
                                return(
                                    <td key={index} id={index}>{res}</td>
                                )
                            })}
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            <Pagination pages={API.pages} rowsPerPage={API.rowsPerPage} total={API.total} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </React.Fragment>
        );
        }
    }
