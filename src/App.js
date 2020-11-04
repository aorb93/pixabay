import React, { Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
      //Leer State de la pagina actual
      let pagina = this.state.pagina;

      //Si la pagina es uno ya no ir a hacia atras
      if(pagina === 1) return null;
  
      //Restar uno a la pagina actual
      pagina -= 1;
  
      //Agregar el cambio al State
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      });
  }
  paginaSiguiente = () => {
    //Leer State de la pagina actual
    let pagina = this.state.pagina;

    //Sumar uno a la pagina actual
    pagina += 1;

    //Agregar el cambio al State
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    const termino = this.state.termino
    const pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=18819458-79e0da0dabaad2ebabbcc22f2&q=${termino}&per_page=20&page=${pagina}`;

    fetch(url).then(respuesta => respuesta.json()).then(resultado => this.setState({imagenes: resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  } 
}

export default App;