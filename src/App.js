import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Mica from './Component/Mica/Mica';
import Login from './Component/default/Login';
import Register from './Component/default/Register';
import Home from './Component/default/Home';
import Tratamiento from './Component/Tratamiento/Tratamientos';
import Precios from './Component/Precios/Precios';
import Armazon from './Component/Armazon/Armazon';
import Corte from './Component/Corte/Corte';
import Receta from './Component/Receta/Receta';
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/material" component={Mica}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Home}/>
        <Route path="/tratamiento" component={Tratamiento}/>
        <Route path="/precios" component={Precios}/>
        <Route path="/armazon" component={Armazon}/>
        <Route path="/terminado" component={Corte}/>
        <Route path="/cotizar" component={Receta} />
      </div>
    );
  }
}
//precios
export default App;
