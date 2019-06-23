import React,{Component} from 'react';
import firebase from 'firebase';


import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Menu from '../default/Menu';
import Header from '../default/Header';

class Precio extends Component{  
    constructor(){
        super();
        this.state={
            material:"",
            materiales:[],
            tratamiento:"",
            tratamientos:[],
            precio:0,
            terminados:[],
            terminado:"",
            esfera1:0/*Rangos*/,
            esfera2:0,
            clindro1:0,
            clindro2:0,
            eje1:0,
            eje2:0,//dnp /altura /add
            dnp1:0,
            dnp2:0,
            altura1:0,
            altura2:0,
            add1:0,
            add2:0
        }
        this.handleInput=this.handleInput.bind(this);
        this.Guardar=this.Guardar.bind(this);
        this.cancelar=this.cancelar.bind(this);
    }
    Guardar(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                if(this.state.dato!==""&&this.state.precio!==""){
                    const Material={
                        material:this.state.material,
                        tratamiento:this.state.tratamiento,
                        terminado:this.state.terminado,
                        precio:this.state.precio,
                        esfera:{
                            rango1:this.state.esfera1,
                            rango2:this.state.esfera2
                        },
                        cilindro:{
                            rango1:this.state.clindro1,
                            rango2:this.state.clindro2
                        },
                        datos:{
                            dnp:{
                                rango1:this.state.dnp1,
                                rango2:this.state.dnp2
                            },
                            altura:{
                                rango1:this.state.altura1,
                                rango2:this.state.altura2
                            },
                            add:{
                                rango1:this.state.add1,
                                rango2:this.state.add2
                            }
                        }
                    }
                    console.log('en proceso....');
                                            /*var material=this.state.material+":{"+
                                                "tratamiento:"+this.state.tratamiento+
                                                ",terminado:"+this.state.terminado+
                                                ",esfera:{"+
                                                    "rango1:"+this.state.esfera1+
                                                    ",rango2:"+this.state.esfera2+
                                                    ",cilindro:{"+
                                                        "rango1:"+this.state.clindro1+
                                                        ",rango2:"+this.state.clindro2+
                                                    "},"+
                                                    "dnp:{"+
                                                        "rango1:"+this.state.dnp1+
                                                        ",rango2:"+this.state.dnp2+
                                                    "},"+
                                                    "altura:{"+
                                                        "rango1:"+this.state.altura1+
                                                        ",rango2:"+this.state.altura2+
                                                    "},"+
                                                    "add:{"+
                                                        "rango1:"+this.state.add1+
                                                        ",rango2:"+this.state.add2+
                                                    "},"+
                                                    "precio:"+this.state.precio+
                                                "}"+
                                            "}";*/
                                            //console.log(Material);
                                            
                    firebase.database().ref("Precios").push(Material)
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
    cancelar(){
        this.setState({
            material:"",
            trataminto:"",
            precio:"",
            terminado:"",
            esfera1:""/*Rangos*/,
            esfera2:"",
            clindro1:"",
            clindro2:"",
            eje1:"",
            eje2:"",//dnp /altura /add
            dnp1:"",
            dnp2:"",
            altura1:"",
            altura2:"",
            add1:"",
            add2:""
        })
    }
    componentDidMount(){
        this.listar_micas();
        this.listar_tratamientos();
        this.listar_cortes();
    }
    listar_cortes(){//tipo de lente
        const itemRef=firebase.database().ref('Corte');
        itemRef.on('value',(snapshot)=>{
            let items=snapshot.val();
            let newState=[];
            for(let item in items){
              newState.push({
                id:item,
                nombre:items[item].nombre,
                precio:items[item].precio
              });
            }
            this.setState({
              terminados:newState
            });
            /*console.log(newState.length);
            console.log(this.state.cortes);*/
        })
    }
    //Mica
    listar_micas(){
        const itemref=firebase.database().ref('Mica');
        itemref.on('value',(snapshot)=>{
            let items=snapshot.val();
            //console.log(items);
            let newState=[];
            for(let item in items){
                newState.push({
                    id:item,
                    nombre:items[item].nombre,
                    precio:items[item].precio
                });
            }
            this.setState({
                materiales:newState
            })
            console.log(this.state.materiales);
            console.log(this.state.materiales);
        })
    }
    handleInput(e){
        const {value,name}=e.target;
        this.setState({
          [name]:value
        });
        //console.log(this.state);
    }
    //Tratamiento
    listar_tratamientos(){
        const itemref=firebase.database().ref('Tratamiento');
        itemref.on('value',(snapshot)=>{
            let items=snapshot.val();
            //console.log(items);
            let newState=[];
            for(let item in items){
                newState.push({
                    id:item,
                    nombre:items[item].nombre,
                    precio:items[item].precio
                });
            }
            this.setState({
                tratamientos:newState
            })
            /*console.log(this.state.tratamientos);
            console.log(this.state.tratamientos.length)*/
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <Menu/>
                <div className="content-wrapper" >
                    <div className="content">                   
                        <div className="row">
                        <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
                            <label htmlFor="mica">Material</label>
                            <select id="material" name="material" className="form-control" value={this.state.material} onChange={this.handleInput}>
                                <option value="">Seleccionar</option>
                                {
                                    this.state.materiales.map((item)=>{
                                        return(
                                            <option key={item.id} value={item.nombre}>{item.nombre}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
                            <label htmlFor="tratamiento">Tratamiento</label>
                            <select id="tratamiento" name="tratamiento" className="form-control" value={this.state.tratamiento} onChange={this.handleInput}>
                                <option value="">Seleccionar</option>
                                {
                                    this.state.tratamientos.map((item)=>{
                                        return(
                                            <option key={item.id} value={item.nombre}>{item.nombre}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group col-xs-4">
                            <label htmlFor="precio">Precio</label>
                            <input type="Text" id="precio" name="precio" className="form-control" value={this.state.precio} onChange={this.handleInput}/>
                        </div>

                        <div className="form-group col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
                            <label htmlFor="lente">Terminados</label>
                            <select id="lente" name="terminado" className="form-control" value={this.state.terminado} onChange={this.handleInput}>
                                <option value="">Seleccionar</option>
                                {
                                    this.state.terminados.map((item)=>{
                                        return(
                                            <option key={item.id} value={item.nombre}>{item.nombre}</option>
                                        )
                                    })
                                }
                            </select>               
                        </div>
                        <button className="float-right btn btn-danger col-xs-5 col-sm-5 col-md-6 col-lg-3" onClick={this.Guardar}>Guardar</button>
                               
                        <button className="float-right btn btn-primary col-xs-5 col-sm-5 col-md-6 col-lg-3" onClick={this.cancelar} >Cancelar</button>

                    </div>    
                    </div>
                                    
                    <div className=" content">
                        <div className="row">
                            <div className="col-md-12">
                            {/* Custom Tabs */}
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#tab_Esfera" data-toggle="tab">Esfera</a></li>
                                    <li><a href="#tab_Cilindro" data-toggle="tab">Cilindro</a></li>
                                    <li><a href="#tab_Eje" data-toggle="tab">Eje</a></li>
                                    <li><a href="#tab_Dnp" data-toggle="tab">Dnp</a></li>
                                    <li><a href="#tab_Altura" data-toggle="tab">Altura</a></li>
                                    <li><a href="#tab_Add" data-toggle="tab">Add</a></li>
                                </ul>
                       
                            <div className="tab-content">

                                <div className="tab-pane active" id="tab_Esfera">
                                    <div className="callout callout-success text-center">
                                        <b>Esfera</b>                
                                    </div>

                                    <div className="row">

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 1</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 ">
                                            <input type="number" value={this.state.esfera1} name="esfera1" onChange={this.handleInput}  className=" form-control" /> 
                                        </div>
                                    
                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 2 </p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                            <input  type="number" value={this.state.esfera2} name="esfera2" onChange={this.handleInput} className="form-control"/>
                                        </div>

                                    </div>

                                </div> 

                                <div className="tab-pane" id="tab_Cilindro">
                                    <div className="callout callout-success text-center">
                                        <b>Cilindro</b>                
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 1</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                            <input value={this.state.clindro1} name="clindro1" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 2</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                            <input value={this.state.clindro2} name="clindro2" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-pane" id="tab_Eje">
                                    <div className="callout callout-success text-center">
                                        <b>Eje</b>                
                                    </div>

                                    <div className="row">
                                        
                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 1</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 ">
                                            <input value={this.state.eje1} name="eje1" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 2</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 ">
                                            <input  value={this.state.eje2}  name="eje2" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane" id="tab_Dnp">
                                    <div className="callout callout-success text-center">
                                        <b>Dnp</b>                
                                    </div>

                                    <div className="row">
                                        
                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 1</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 ">
                                            <input value={this.state.dnp1} name="dnp1" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 2</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 ">
                                            <input value={this.state.dnp2} name="dnp2" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                         
                                    </div>
                                </div>

                                <div className="tab-pane" id="tab_Altura">
                                    <div className="callout callout-success text-center">
                                        <b>Altura</b>                
                                    </div>

                                    <div className="row">
                                        
                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 1</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                            <input value={this.state.altura1} name="altura1" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 2</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                            <input value={this.state.altura2} name="altura2" onChange={this.handleInput}  type="number" className="form-control"/>
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-pane" id="tab_Add">
                                    <div className="callout callout-success text-center">
                                        <b>Add</b>                
                                    </div>

                                    <div className="row">
                                        
                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 1</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                            <input value={this.state.add1} name="add1" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2 text-center">
                                            <p>Rango 2</p>
                                        </div>

                                        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                            <input value={this.state.add2} name="add2" onChange={this.handleInput} type="number" className="form-control"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                        </div>
                        </div>

        </div>
    
           

                        
                    
                </div>    
            </div>
        )
    }
}
export default Precio;