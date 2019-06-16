import React,{Component} from 'react';
//import './../../materialize/css/materialize.min.css';
//import './../../materialize/js/materialize.min.js';
//import {M} from './../../materialize/js/materialize.min.js'
class Navegacion extends Component{
    /*constructor(){
        super();
       /* M.AutoInit();
        this.state={
           // M
        }
}*/
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </div>
        )
    }
}

export default Navegacion;