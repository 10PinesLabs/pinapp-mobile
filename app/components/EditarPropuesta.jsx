import React from 'react';

export default class EditarPropuesta extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
  };

  render() {
      return (
        <div>
          <h1>Proponer tema</h1>

          <form onSubmit={this.onFormSubmit}>
            <p><label htmlFor="titulo">Título:</label> <input id="titulo" value={this.props.propuesta.titulo}></input></p>
            <p><label htmlFor="detalle">Description:</label> <textarea id="detalle" placeholder="breve descripción del tema">{this.props.propuesta.descripcion}</textarea></p>
            <p><input type="submit" value="proponer"></input></p>
          </form>

        </div>
      );
  }
}
