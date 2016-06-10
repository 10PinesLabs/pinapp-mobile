import React from 'react';
import EditarPropuesta from './EditarPropuesta.jsx';
import Propuestas from './Propuestas.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propuestaActual: 1,
      propuestas: [
        {
          id: 1,
          titulo: "Revisión de números",
          descripcion: "Una cosa"
        },
        {
          id: 2,
          titulo: "Asignaciones",
          descripcion: "Otra cosa"
        }
      ]
    }
  }


  updateTopic(id, newTopic) {
    this.setState(
      {
        propuestas: this.state.propuestas.map(propuesta => {
          if(propuesta.id === id) {
            return newTopic;
          }
          return propuesta;
        })
      }
    );
  }

  propuestaActual() {
    return this.state.propuestas.find((propuesta) => {
      return propuesta.id == this.state.propuestaActual;
    });
  }

  render() {
    return (
      <div id="main-container">
        <Propuestas propuestas={this.state.propuestas} onEdit={this.updatePropuestaActual}/>
        <EditarPropuesta propuesta={this.propuestaActual()}/>
      </div>
    );
  }



  updatePropuestaActual = (id, e) => {
    e.stopPropagation();
    this.setState({
      propuestaActual: id,
      propuestas: this.state.propuestas
    })
  }
}
