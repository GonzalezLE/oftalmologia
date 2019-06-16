import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
          <aside className="main-sidebar">
  {/* sidebar: style can be found in sidebar.less */}
  <section className="sidebar">
  <br/><br/><br/>
    
    {/* /.search form */}
    {/* sidebar menu: : style can be found in sidebar.less */}
    <ul className="sidebar-menu" data-widget="tree">
     
      
      <li><a href="/cotizar"><i className="glyphicon glyphicon-usd" /> <span>Cotizar</span></a></li>
      
      <li>
        <a href="pages/calendar.html">
          <i className="fa fa-calendar" /> <span>Citas</span>
          <span className="pull-right-container">
            <small className="label pull-right bg-red">3</small>
            <small className="label pull-right bg-blue">17</small>
          </span>
        </a>
      </li>
      <li>
        <a href="pages/mailbox/mailbox.html">
          <i className="fa fa-envelope" /> <span>Mensajes</span>
          <span className="pull-right-container">
            <small className="label pull-right bg-yellow">12</small>
            <small className="label pull-right bg-green">16</small>
            <small className="label pull-right bg-red">5</small>
          </span>
        </a>
      </li>

      <li className="active treeview menu-open">
        <a href="fake_url">
          <i className="glyphicon glyphicon-cog" /> <span>Configuracion</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li><a href="/Material"><i className="fa fa-circle-o" /> Material</a></li>
          <li ><a href="/tratamiento"><i className="fa fa-circle-o" /> Tratamiento</a></li>
          <li ><a href="/terminado"><i className="fa fa-circle-o" /> Terminmado</a></li>
          <li ><a href="/armazon"><i className="fa fa-circle-o" /> Armazon</a></li>
          <li ><a href="/precios"><i className="fa fa-circle-o"/> Precios</a></li>
        </ul>
      </li>

      
    <li><a href="https://adminlte.io/docs"><i className="fa fa-book" /> <span>Documentacion</span></a></li>
    </ul>
  </section>
  {/* /.sidebar */}
</aside>

            </div>
        );
    }
}

export default Menu;
