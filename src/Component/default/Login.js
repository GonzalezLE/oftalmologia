import React, { Component } from 'react';
import firebase from 'firebase';


class Login extends Component {
    constructor(){
        super();
        this.state={
            correo:"",
            password:""
        }
        this.handleInput=this.handleInput.bind(this);
        this.open_session=this.open_session.bind(this);
        
    }
    
    handleInput(e){  
        const {value,name}=e.target;
        this.setState({
          [name]:value
        });
        
        //console.log(this.state);
    }
    open_session(){       
        
            firebase.auth().signInWithEmailAndPassword(this.state.correo,this.state.password)
            .then(function(res){
                //console.log(res);
                console.log('si registro');
                window.location.href="/home";
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
                <p className="login-box-msg">iniciar sesion</p>
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
                    <a href="#" className="btn btn-block btn-primary  btn-flat" onClick={this.open_session}>
                    Iniciar sesión
                    </a>
                </div>
                {/* /.social-auth-links */}
                <a href="/register" className="text-center">Registrate</a>
                </div>

            </div>
          
           </div>
        );
    }
}

export default Login;

