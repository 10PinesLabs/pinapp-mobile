import React from 'react';

export default ({propuestas}) => {
  return (
    <div>
      <h1>Propuestas ya creadas</h1>

      <ul>{propuestas.map(propuesta =>
       <li>
         {propuesta.titulo}
       </li>
     )}</ul>

    </div>
  );
}
