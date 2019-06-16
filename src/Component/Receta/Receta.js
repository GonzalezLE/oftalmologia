import React,{Component} from 'react';

import firebase from 'firebase';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from './../default/Header';
import Menu from './../default/Menu';
class Receta extends Component{
    constructor(){
       super();
       this.state={
           paciente:"",
           fecha:"",
           fecha_vigencia:"",
           mica:"",
           lente:"",
           tratamiento:"",
           armazon_sencillo:"",
           armazon_marca:"",
           derecho_esfera:"",
           derecho_cilindro:"",
           derecho_eje:"",
           derecho_dnp:"",
           derecho_altura:"",
           derecho_add:"",
           izquierdo_esfera:"",
           izquierdo_cilindro:"",
           izquierdo_eje:"",
           izquierdo_dnp:"",
           izquierdo_altura:"",
           izquierdo_add:"",
           list_armazonSencillo:[],
           list_armazonMarca:[],
           cortes:[],
           micas:[],
           tratamientos:[],
           Recetas:[]
       };
        this.handleInput=this.handleInput.bind(this);
        this.Guardar=this.Guardar.bind(this);
     
        this.Valida=this.Valida.bind(this);
    }
    componentDidMount(){
        this.listar_cortes();
        this.listar_micas();
        this.listar_tratamientos();
        this.trae_receta();
    }
    Valida(inicio,fin,saltos,encuentra){
        var correcto=0;
        for(inicio;inicio<=fin;inicio+=saltos){
            if(encuentra===inicio){
                correcto=1;
            }
            //console.log(inicio);
        }
        return correcto;
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
              cortes:newState
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
                micas:newState
            })
            console.log(this.state.micas);
            console.log(this.state.micas.length);
        })
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
    
    //prueba Recetas
    trae_receta(){
        const itemref=firebase.database().ref('Recetas');
        itemref.on('value',(snapshot)=>{
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
                Recetas:newState
            })
            console.log(this.state.Recetas);
            console.log(this.state.Recetas.length)
        })
    }

    handleInput(e){
        const {value,name}=e.target;
        this.setState({
          [name]:value
        });
        //console.log(this.state);
      }

    Guardar(){
        //validacion de valores de esfera
        if(this.Valida(-30,30,.25,this.state.derecho_esfera)){
            if(this.Valida(-30,30,.25,this.state.izquierdo_esfera)){
                //validacion de cilindros
                if(this.Valida(-30,0,.25,this.state.derecho_cilindro)){
                    if(this.Valida(-30,0,.25,this.state.izquierdo_cilindro)){
                        //validacion de ejes
                        if(this.Valida(0,180,5,this.state.derecho_eje)){
                            if(this.Valida(0,180,5,this.state.izquierdo_eje)){
                                //validacion de DNP
                                if(this.Valida(0,80,1,this.state.derecho_dnp)){
                                    if(this.Valida(0,80,1,this.state.izquierdo_dnp)){
                                        //validacion de altura
                                        if(this.Valida(0,35,1,this.state.derecho_altura)){
                                            if(this.Valida(0,35,1,this.state.izquierdo_altura)){
                                                //validacion de add
                                                if(this.Valida(0,3.5,.25,this.state.derecho_add)){
                                                    if(this.Valida(0,3.5,.25,this.state.izquierdo_add)){
                                                        firebase.auth().onAuthStateChanged(user=>{
                                                            if(user){
                                                                console.log('en proceso....');
                                                                
                                                                const objreceta={
                                                                    nombre:this.state.paciente,
                                                                    fecha:this.state.fecha,
                                                                    vigencia:this.state.fecha_vigencia,
                                                                    derecho:{
                                                                        esf:this.state.derecho_esfera,
                                                                        cil:this.state.derecho_cilindro,
                                                                        eje:this.state.derecho_eje,
                                                                        dnp:this.state.derecho_dnp,
                                                                        altura:this.state.derecho_altura,
                                                                        add:this.state.derecho_add
                                                                    },
                                                                    izquierdo:{
                                                                        esf:this.state.izquierdo_esfera,
                                                                        cil:this.state.izquierdo_cilindro,
                                                                        eje:this.state.izquierdo_eje,
                                                                        dnp:this.state.izquierdo_dnp,
                                                                        altura:this.state.izquierdo_altura,
                                                                        add:this.state.izquierdo_add
                                                                    },
                                                                    mica:this.state.mica,
                                                                    lente:this.state.lente,
                                                                    tratamiento:this.state.tratamiento,
                                                                    armazon_sencillo:this.state.armazon_sencillo,
                                                                    armazon_marca:this.state.armazon_marca
                                                                };
                                                                firebase.database().ref("Recetas").push(objreceta)
                                                                .then(res=>{                            
                                                                    console.log('insert completo....');
                                                                    toast.info("DATOS GUARDADOS CON EXITO", {
                                                                        position: toast.POSITION.TOP_RIGHT
                                                                    });
                                                                })
                                                                .catch(error=>{
                                                                    console.log(error);
                                                                });
                                                            }else{
                                                                console.log('no login');
                                                            }
                                                        })

                                                    }else{
                                                        toast.error("RANGO INVALIDOS EN ADD IZQUIERDO !", {
                                                            position: toast.POSITION.TOP_RIGHT
                                                        });
                                                    }
                                                }else{
                                                    toast.error("RANGO INVALIDOS EN ADD DERECHO !", {
                                                        position: toast.POSITION.TOP_RIGHT
                                                    });
                                                }
                                                
                                            }else{
                                                toast.error("RANGO INVALIDOS EN ALTURA IZQUIERDO !", {
                                                    position: toast.POSITION.TOP_RIGHT
                                                });
                                            }
                                        }else{
                                            toast.error("RANGO INVALIDOS EN ALTURA DERECHO !", {
                                                position: toast.POSITION.TOP_RIGHT
                                            });
                                        }

                                    }else{
                                        toast.error("RANGO INVALIDOS EN DNP IZQUIERDO !", {
                                            position: toast.POSITION.TOP_RIGHT
                                        });
                                    }
                                }else{
                                    toast.error("RANGO INVALIDOS EN DNP DERECHO !", {
                                        position: toast.POSITION.TOP_RIGHT
                                    });
                                }
                            }else{
                                toast.error("RANGO INVALIDOS EN EJE IZQUIERDO !", {
                                    position: toast.POSITION.TOP_RIGHT
                                });
                            }
                        }
                        else{
                            toast.error("RANGO INVALIDOS EN EJE DERECHO !", {
                                position: toast.POSITION.TOP_RIGHT
                            });
                        }
                    }else{
                        toast.error("RANGO INVALIDOS EN  CILINDRO IZQUIERDO !", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                }else{
                    toast.error("RANGO INVALIDOS EN CILINDRO HOJO DERECHO !", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            }else{
                toast.error("RANGO INVALIDOS EN ESFERA HOJO IZQUIERDO !", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }else{
            toast.error("RANGO INVALIDOS EN ESFERA HOJO DERECHO !", {
                position: toast.POSITION.TOP_RIGHT
            });
            
        }
    }

    
    render(){

        return(
            <div >
            <Header/><Menu/>
            <div className="content-wrapper ">
                <div className="content">
                    <div className="form-group">
                        <label htmlFor="nombre">NOMBRE DEL PACIENTE</label>
                        <input name="paciente" value={this.state.paciente} onChange={this.handleInput}  id="nombre" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fecha">FECHA </label>
                        <input name="fecha" value={this.state.fecha} onChange={this.handleInput} id="fecha" type="date" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="x">FECHA VIGENCIA:</label>
                        <input name="fecha_vigencia" value={this.state.fecha_vigencia} onChange={this.handleInput} id="x" type="date" className="form-control"/>
                    </div>

                    <table className="table table-hover d-none d-sm-block">
                        <thead>
                            <tr>
                            <th scope="col ">OJO</th>
                            <th scope="col ">ESFERA</th>
                            <th scope="col ">CILINDRO</th>
                            <th scope="col ">EJE</th>
                            <th scope="col ">DNP</th>
                            <th scope="col ">ALTURA</th>
                            <th scope="col ">ADD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">OD</th>
                                <td> <input value={this.state.derecho_esfera} onChange={this.handleInput} name="derecho_esfera" id="derecho_esfera" type="Text" className="form-control" required /></td>
                                <td><input value={this.state.derecho_cilindro} onChange={this.handleInput} name="derecho_cilindro" id="derecho_cilindro" type="Text" className="form-control" required/></td>
                                <td><input value={this.state.derecho_eje} onChange={this.handleInput} name="derecho_eje" id="derecho_eje" type="Text" className="form-control"/></td>
                                <td><input value={this.state.derecho_dnp} onChange={this.handleInput} name="derecho_dnp" id="derecho_dnp" type="Text" className="form-control"/></td>
                                <td><input value={this.state.derecho_altura} onChange={this.handleInput} name="derecho_altura" id="derecho_altura" type="Text" className="form-control"/></td>
                                <td><input value={this.state.derecho_add} onChange={this.handleInput} name="derecho_add" id="derecho_add" type="Text" className="form-control"/></td>
                            </tr>
                            <tr>
                                <th scope="row">OI</th>
                                <td><input value={this.state.izquierdo_esfera} onChange={this.handleInput} name="izquierdo_esfera" id="izquierdo_esfera" type="Text" className="form-control"/></td>
                                <td><input value={this.state.izquierdo_cilindro} onChange={this.handleInput} name="izquierdo_cilindro" id="derecho_cilindro" type="Text" className="form-control"/></td>
                                <td><input value={this.state.izquierdo_eje} onChange={this.handleInput} name="izquierdo_eje" id="izquierdo_eje" type="Text" className="form-control"/></td>
                                <td><input value={this.state.izquierdo_dnp} onChange={this.handleInput} name="izquierdo_dnp" id="izquierdo_dnp" type="Text" className="form-control"/></td>
                                <td><input value={this.state.izquierdo_altura} onChange={this.handleInput} name="izquierdo_altura" id="izquierdo_altura" type="Text" className="form-control"/></td>
                                <td><input value={this.state.izquierdo_add} onChange={this.handleInput} name="izquierdo_add" id="izquierdo_add" type="Text" className="form-control"/></td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="row">
                    {/*tratamiento*/}
                    <div className="form-group col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <label htmlFor="tratamiento">Tratamiento</label>
                        <select id="tratamiento" name="tratamiento" className="form-control" value={this.state.tratamiento} onChange={this.handleInput}>
                            <option value="">Seleccionar</option>
                            {
                                this.state.tratamientos.map((item)=>{
                                    return(
                                        <option key={item.id} value={item.id}>{item.nombre}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {/*mica*/}
                    <div className="form-group col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <label htmlFor="mica">Mica</label>
                        <select id="mica" name="mica" className="form-control" value={this.state.mica} onChange={this.handleInput}>
                            <option value="">Seleccionar</option>
                            {
                                this.state.micas.map((item)=>{
                                    return(
                                        <option key={item.id} value={item.id}>{item.nombre}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {/** lente*/}
                    <div className="form-group col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <label htmlFor="lente">Lente</label>
                        <select id="lente" name="lente" className="form-control" value={this.state.lente} onChange={this.handleInput}>
                            <option value="">Seleccionar</option>
                            {
                                this.state.cortes.map((item)=>{
                                    return(
                                        <option key={item.id} value={item.id}>{item.nombre}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {/**armazon */}
                    <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="armazon_sencillo">Armazon sencillo material</label>
                            
                        <select id="armazon_sencillo" name="armazon_sencillo" className="form-control" value={this.state.armazon_sencillo} onChange={this.handleInput}>
                            <option value="t1">l1</option>
                            <option value="t2">l2</option>
                            <option value="t3">l3</option>
                            <option value="t4">l4</option>
                        </select>
                    </div>

                    <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="armazon_marca">Armazon de marca</label>
                        <select id="armazon_marca" name="armazon_marca" className="form-control" value={this.state.armazon_marca} onChange={this.handleInput}>

                        </select>
                    </div>
                
                </div>
                <button className="btn btn-primary btn-lg" onClick={this.Guardar}> Cotizar</button>
                </div>
            </div>
   
          <ToastContainer/>
            </div>
        );
    }
}

export default Receta;

