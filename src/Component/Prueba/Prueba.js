import React,{Component} from 'react';
import firebase from 'firebase';

class Prueba extends Component{
    constructor(){
        super();
        this.state={
            arreglo:[]
        }
        this.leer=this.leer.bind(this);
        this.leer();
        this.pu=this.pu.bind(this);
    }
    leer(){
        const tem=[];
        var starCountRef = firebase.database().ref('Corte');
        starCountRef.on('child_added', function(snapshot) {
            
            tem.push(snapshot.val().nombre);
            console.log(snapshot.val());

            
           // console.log("se ha añadido ",snapshot.val().nombre);
            
        });
        this.setState({
                arreglo:tem
            });
    }
    pu(){
        console.log(this.state.arreglo)
    }

    render(){
        return(
            <div>
                <h1>hola esta parte es de Prueba</h1>
                <button onClick={this.pu}> xxx</button>
            </div>
        );
    }
}
export default Prueba;
