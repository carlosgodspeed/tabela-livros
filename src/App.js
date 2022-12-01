import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead"
import TabelaBody from "./components/TabelaBody"
import TabelaFoot from "./components/TabelaFoot"
class App extends Component {
  state = {
    livros:[
      {
        id: 1,
        titulo: "Livro",
        autor: "carlos henrique"
      },
      {
        id: 1,
        titulo: "Livro",
        autor: "carlos henrique"
      },
      {
        id: 1,
        titulo: "Livro",
        autor: "carlos henrique"
      },
      {
        id: 1,
        titulo: "Livro",
        autor: "carlos henrique"
      },
      {
        id: 1,
        titulo: "Livro",
        autor: "carlos henrique"
      },
    ]
  };
render() {
  return (
    <table className="Tabela">
      <TabelaHead />
      <TabelaBody livros={ this.state.livros } />
      <TabelaFoot />
    </table>
  );
}
}
export default App;