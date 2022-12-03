import React from "react";
const TabelaFoot = (props) => (
  <tfoot>
    <tr>
      <td colSpan="4">Remova livros da tabela { props.qdLivros }</td>
    </tr>
  </tfoot>
);
export default TabelaFoot;