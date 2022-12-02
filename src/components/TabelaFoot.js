import React from "react";
const TabelaFoot = (props) => (
  <tfoot>
    <tr>
      <td colSpan="4">Quantidade de livros na tabela:29 { props.qdLivros }</td>
    </tr>
  </tfoot>
);
export default TabelaFoot;