import React from 'react';
import Propuesta from './Propuesta.jsx'

export default ({propuestas, onEdit}) => {
  return (
    <div>
      <h1>Propuestas ya creadas</h1>

      <ul>{propuestas.map(propuesta =>
        <li>
          <Propuesta propuesta={propuesta} onEdit={onEdit.bind(null, propuesta.id)}/>
        </li>
     )}</ul>

    </div>
  );
}
