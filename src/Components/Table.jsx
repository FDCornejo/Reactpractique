import React from 'react';

function Table(dato) {
  console.log(dato.info)  
  return (
      
    <tr>
      <th scope="row">{dato.info.num}</th>
      <td>{dato.info.name}</td>
      <td>{dato.info.year}</td>
    </tr>


    )
}
export default Table;