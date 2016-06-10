import React from 'react';

export default ({propuesta, onEdit}) => {
  return (
    <span>
      {propuesta.titulo} -
      <a href='#' onClick={onEdit}> Edit propuesta {propuesta.id} </a>
    </span>
  );
}
