import React from 'react';
import Propuesta from './Propuesta.jsx';
import Propuestas from './Propuestas.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propuestas: [
        {
          titulo: "Revisión de números"
        },
        {
          titulo: "Asignaciones"
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <Propuestas propuestas={this.state.propuestas}/>
        <Propuesta />
      </div>
    );
  }
}
