import React from 'react';

export default class Propuesta extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    console.log("holahola");
  };

  render() {
      return (
        <div>
          <h1>Proponer tema</h1>

          <form onSubmit={this.onFormSubmit}>
            <p><label htmlFor="titulo">Título:</label> <input id="titulo"></input></p>
            <p><label htmlFor="root">Root:</label> <input id="root"></input></p>
            <p><label htmlFor="detalle">Description:</label> <textarea id="detalle" placeholder="breve descripción del tema"></textarea></p>
            <p><input type="submit" value="proponer"></input></p>
          </form>

        </div>
      );
  }
}
