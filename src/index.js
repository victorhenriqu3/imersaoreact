import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Pages/Home/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastrovideo from "./Pages/Cadastro/Video/index";
import CadastroCategoria from "./Pages/Cadastro/Categoria/index";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={Cadastrovideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
