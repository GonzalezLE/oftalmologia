import React, { Component } from 'react';
import firebase from 'firebase';


class Register extends Component {
    constructor(){
        super();
        this.state={
            correo:"",
            password:""
        }
        this.handleInput=this.handleInput.bind(this);
        this.restristro=this.restristro.bind(this);
        this.verificacion=this.verificacion.bind(this);
    }
    restristro(){
        //console.log(this.state);
        const core=this.state.correo;
        const pass=this.state.password; 
        firebase.auth().createUserWithEmailAndPassword(core, pass)
            .then(function(user){
                //console.log(user);
                alert('Tu cuenta ha sido registrada con exito');
                //var user = firebase.auth().currentUser;
                user.sendEmailVerification().then(function() {
                    console.log('verificando.....');
                }).catch(function(error) {
                    console.log(error);
                });
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage);
                //alert('tu cuenta ya esxiste');
                console.log(error);
            });
        
    }
    handleInput(e){
        const {value,name}=e.target;
        this.setState({
          [name]:value
        });
        
        //          console.log(this.state);
      }
      verificacion(){
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
        console.log('verificando.....');
        }).catch(function(error) {
        console.log(error);
        });
    }
    

    open_session(){       
        // Código extraido de la documentación oficial de Firebase
            firebase.auth().signInWithEmailAndPassword(this.state.correo,this.state.password)
            .then(function(res){
                //console.log(res);
                console.log('si registro');
                window.location.href="/menu";
            })
            .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                       <div className="login-box">
                <div className="login-logo">
                <b>Optica</b>
                </div>
                {/* /.login-logo */}
                <div className="login-box-body">
                <p className="login-box-msg">Crear sesión</p>
                <form action="../../index2.html" method="post">
                    <div className="form-group has-feedback">
                    <input onChange={this.handleInput} value={this.state.correo} type="email" className="form-control" placeholder="Email" name="correo"   id="last_name" />
                    <span className="glyphicon glyphicon-envelope form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                    <input name="password" onChange={this.handleInput} value={this.state.password} type="password" className="form-control" placeholder="Password" />
                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
                    <div className="row">
                    {/* /.col */}
                    </div>
                </form>
                <div className="social-auth-links text-center">
                    <a href="no link" className="btn btn-block btn-primary  btn-flat" onClick={this.restristro}>
                        Crear Cuenta
                    </a>
                </div>
                    <a href="/" className="text-center">Iniciar</a>
               
                </div>
                
            </div>
          
            </div>
        );
    }
}

export default Register;
