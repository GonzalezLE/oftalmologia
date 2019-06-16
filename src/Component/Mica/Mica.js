import React,{Component } from 'react';
import firebase from 'firebase';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import Header from '../default/Header';
import Menu from '../default/Menu';
 
class Mica extends Component{
    constructor(){
        super();
        this.state={
            dato:'',
            micas:[],
            estadoForm:'none',
            id:'',
            nombre:''            
        }
        this.handleInput=this.handleInput.bind(this);
        this.Guarda=this.Guarda.bind(this);
        this.elimina=this.elimina.bind(this);
        this.modifica=this.modifica.bind(this);
        this.actualiza=this.actualiza.bind(this);
        //this.verUser=this.verUser.bind(this);  
    }
    componentDidMount(){
        const itemref=firebase.database().ref('Mica');
        itemref.on('value',(snapshot)=>{
            let items=snapshot.val();
            //console.log(items);
            let newState=[];
            for(let item in items){
                newState.push({
                    id:item,
                    nombre:items[item].nombre                  
                });
            }
            this.setState({
                micas:newState
            })
            //console.log(this.state.micas);
            //console.log(this.state.micas.length);
        });
    }
    fecha(){
        var fh=new Date();
        return fh.getFullYear()+"/"+(fh.getMont()+1)+"/"+fh.getDate();
    }
    Guarda(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                if(this.state.dato!==""&&this.state.precio!==""){
                    console.log('en proceso....');
                    const mica={
                        nombre:this.state.dato
                        
                    };
                    firebase.database().ref("Mica").push(mica)
                    .then(res=>{
                        toast.success("Datos guardados", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                }
                
            }else{
                console.log('no login');
            }
        })
    }
    
    handleInput(e){
        const {value,name}=e.target;
        this.setState({
          [name]:value
        });
        //console.log(this.state);
      }
    elimina(id){
        const itemref=firebase.database().ref(`Mica/${id}`);
        itemref.remove();
    }
    modifica(id,nombre){
        this.setState({
            estadoForm:'',
            id:id,
            nombre:nombre
        })
    }
    actualiza(){
        var db=firebase.database();
        db.ref('Mica/'+this.state.id).update({
            nombre:this.state.nombre
        });
    }
    render(){
        
        return(
            <div>
                <Header/>
                <Menu/>
                <div className="content-wrapper">
                <br/>
                <div className="content">

                    <div className="row">
                    <div className="col-md-6">
                        {/* Horizontal Form */}
                        
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Agregar material</h3>
                            </div>
            
                            <form className="form-horizontal">
                                <div className="box-body">
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Material</label>
                                    <div className="col-sm-10">
                                        <input value={this.state.dato} onChange={this.handleInput} id="inputEmail3" name="dato"   type="text" className="form-control" />
                                    </div>
                                </div>
                                </div>
                                {/* /.box-body */}
                                <div className="box-footer">
                                    <button onClick={this.Guarda} className="btn btn-primary">Guardar</button>
                                
                                </div>
                                {/* /.box-footer */}
                            </form>
                        </div>
                    </div>
                </div>  
                </div>
            <div style={{display:this.state.estadoForm}}> 
                <div className="col-md-6" >
                    <div className="box box-success box-solid">
                        <div className="box-header with-border">
                            <h3 className="box-title">Modificar Material</h3>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                        </div>
                    </div>
                    <div className="box-body">
                        <form>
                            <div className="form-group">
                                <label>Material</label>
                                <input type="text"  onChange={this.handleInput} name="nombre" value={this.state.nombre} className="form-control"/>
                                <br/>
                                <button className="btn btn-primary" onClick={this.actualiza}>
                                    Modificar <span class="glyphicon glyphicon-pencil"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>   
                    
                

                    <div className="box-body">
                    <table  className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"> Material</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.micas.map((item)=>{
                                return(
                                    <tr key={item.id}>
                                        <td>{item.nombre}</td>
                                        <td><button className="btn btn-primary" onClick={()=>this.modifica(item.id,item.nombre)}><span class="glyphicon glyphicon-pencil"></span></button> </td>
                                        <td><button className="btn btn-primary" onClick={()=>this.elimina(item.id)}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    
                                )
                            })
                        }

                        </tbody>    
                    </table></div>
                </div>

                

                <ToastContainer/>


            </div>
        );
    }
}
export default Mica;