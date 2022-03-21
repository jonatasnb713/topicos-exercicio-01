import { useState } from "react";

import "./App.css";

function Lista({ lista, setLista }) {
  return (
    <div className="lista-compras-container">
      <ul className="lista-items">
        {lista.map(item => (
          <li key={item}>
            {item}{" "}
            <button
              class="btn btn-outline-danger btn-sm"
              onClick={() => setLista(lista.filter(exItem => exItem != item))}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Botao({ lista, setLista, setValori }) {
  const uWuOnichan = event => {
    const ITEM = document.getElementById("item").value;

    event.preventDefault();

    if (ITEM != "") {
      const novoitem = ITEM;
      setLista([...lista, novoitem]);
      setValori("");
    } else window.alert("escreve algo ai");
  };

  return (
    <button className="btn btn-primary" onClick={uWuOnichan}>
      Adicionar
    </button>
  );
}

function App() {
  const [lista, setLista] = useState(["Batata", "Pão"]);
  const [valori, setValori] = useState([""]);

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <Lista lista={lista} setLista={setLista} />
      <form className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input
              type="text"
              className="form-control"
              id="item"
              value={valori}
              onChange={evento => setValori(evento.target.value)}
            />
          </div>
          <Botao lista={lista} setLista={setLista} setValori={setValori} />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
