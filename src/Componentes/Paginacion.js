import React from 'react';

const Paginacion = (props) => {
    return(
        <div className="py-3">
            <button id="btnAnterior" onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button id="btnSiguiente" onClick={props.paginaSiguiente} type="button" className="btn btn-info mr-1">&rarr; Siguiente</button>
        </div>
    );
}

export default Paginacion