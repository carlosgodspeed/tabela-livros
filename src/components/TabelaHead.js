import React from "react"
const TabelaHead = (props) => (
  <thead>
    <tr>
        <th colSpan="4">Tabela De Livros</th>
    </tr>
    <tr>
      <th>Codigo do livro</th>
      <th>Titulo do livro
        <div className="container-setinhas">
          <div onClick={ ( ) => props.ordenarCrescente( ) }>&#129093; </div>
          <div onclick={ ( ) => props.ordenarDecrescente( ) }>&#129095;</div>
        </div>
      </th>
      <th>Autores</th>
      <th></th>
    </tr>
  </thead>
)
export default TabelaHead;