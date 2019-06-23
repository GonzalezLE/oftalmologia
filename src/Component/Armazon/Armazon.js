import React,{Component} from 'react';
import firebase from 'firebase';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from '../default/Header';
import Menu from '../default/Menu';
class Armazon extends Component {
    constructor(props) {
      super(props);
      this.state = {
        material:'',
        precio_material:0.0,
        marca:'',
        precio_marca:0.0,
        A_Marcas:[],
        A_sencillos:[],
        list_armazones:[],
        id:'',
        estadoForm:'none',
        nombre:'',precio:0,tipo:"",
        descripcion:''
      };
      this.handleInput=this.handleInput.bind(this);
      this.Guarda_marca=this.Guarda_marca.bind(this);
      this.Guarda_material=this.Guarda_material.bind(this);
    }
    componentDidMount(){//Armazon_sencillo
      this.traeLista_armazonMarca();
      this.traeLista_armazonSencillo();
    }
    traeLista_armazonSencillo(){
      const itemref=firebase.database().ref('Armazon_sencillo');
      itemref.on('value',(snapshot)=>{
          let items=snapshot.val();
          
          let newState=[];
          for(let item in items){
              newState.push({
                  id:item,
                  marca:items[item].marca,
                  precio:items[item].precio,
                  tipo:'Armazon Sencillo'
              });
          }
          ;
          this.setState({
            A_sencillos:newState
          })
          
      });
    }
    traeLista_armazonMarca(){
      const itemref=firebase.database().ref('Armazon_marca');
      itemref.on('value',(snapshot)=>{
          let items=snapshot.val();
          //console.log(items);
          let newState=[];
          for(let item in items){
              newState.push({
                  id:item,
                  marca:items[item].marca,
                  precio:items[item].precio,
                  tipo:'Armazon de Marca'
              });
          }
          //console.log(newState);
           this.setState({
            A_Marcas:newState
          })
         // console.log(this.state.A_Marcas);
          //console.log(this.state.A_Marcas.length);
      });
    }
    handleInput(e){
      const {value,name}=e.target;
      this.setState({
        [name]:value
      });
      //console.log(this.state);
    }
    Guarda_marca(){
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          console.log('guardando');
          const Armazon_marca={
            marca:this.state.marca,
            precio:this.state.precio_marca
          };

          firebase.database().ref("Armazon_marca").push(Armazon_marca)
          .then(res=>{
            //console.log(res);
            toast.success("Datos guardados", {
              position: toast.POSITION.TOP_RIGHT
            });
          })
          .catch(error=>{
            console.log(error);
          })
        }
      });
    }
    Guarda_material(){
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          console.log('guardando');
          const Armazon_material={
            marca:this.state.material,
            precio:this.state.precio_material
          };

          firebase.database().ref("Armazon_sencillo").push(Armazon_material)
          .then(res=>{
            //console.log(res);
            toast.success("Datos guardados", {
              position: toast.POSITION.TOP_RIGHT
            });
          })
          .catch(error=>{
            console.log(error);
          })
        }
      });
    }

    modifica(id,nombre,precio,tipo){
      this.setState({
          estadoForm:'',
          id:id,
          nombre:nombre,
          precio:precio,
          tipo:tipo
      })
    }
    actualiza(){
     
      var db=firebase.database();
      var tipo=this.state.tipo;
      if(tipo==="marca"){
        
        db.ref('Armazon_marca/'+this.state.id).update({
          marca:this.state.nombre,
          precio:this.state.precio
        });
      }
        if(tipo==="sencillo"){
          
          db.ref('Armazon_sencillo/'+this.state.id).update({
              marca:this.state.nombre,
              precio:this.state.precio
          });
      }
             
    }
    elimina(id,elimina){
      if(elimina==="marca"){
        const itemref=firebase.database().ref(`Armazon_marca/${id}`);
        itemref.remove();
      }else{
        if(elimina==="sencillo"){
          const itemref=firebase.database().ref(`Armazon_sencillo/${id}`);
          itemref.remove();
        }
      }
      
    }

  
    render() {
      return (
        <div>
          <Header/><Menu/>
          <div className="content-wrapper">
                <div className="content">
                  <div className="accordion col-xs-6" id="accordionExample">
                    <div className="card">
                      <div className="box box-primary" id="headingTwo">
                          <a data-toggle="collapse" href="#collapseTwo" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className="box-header with-border">
                              <h3 className="box-title">Armazon sencillo</h3>
                            </div>
                          </a>
                      </div>
                      <div id="collapseTwo" className="collapse border border-primary" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                          <div className="form-group">
                            <label htmlFor="material">Material</label>
                            <input type="text" onChange={this.handleInput} value={this.state.material} id="material" name="material" className="form-control"/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="precio_material">Precio</label>
                            <input type="number" onChange={this.handleInput} value={this.state.precio_material} id="precio_material" name="precio_material" className="form-control"/>
                          </div>

                          <button onClick={this.Guarda_material} className="btn btn-primary col-xs-4">Guardar</button>
                         <br/><br/>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="box box-primary" id="headingThree">
                        <a data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <div className="box-header with-border">
                            <h3 className="box-title">Armazon de marca</h3>
                          </div>
                        </a>
                         
                       
                      </div>
                      <div id="collapseThree" className="collapse border border-primary" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                          <div className="form-group">
                            <label htmlFor="marca">Marca de armazon</label>
                            <input type="text" onChange={this.handleInput} value={this.state.marca} id="marca" name="marca" className="form-control"/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="marca">Descripcion</label>
                            <input type="text" onChange={this.handleInput} value={this.state.descripcion} id="descripcion" name="descripcion" className="form-control"/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="precio_marca">Precio</label>
                            <input type="number" onChange={this.handleInput} value={this.state.precio_marca} id="precio_marca" name="precio_marca" className="form-control"/>
                          </div>
                          <button onClick={this.Guarda_marca} className="btn btn-primary col-xs-4">Guardar marca</button>
                          <br/>
                        </div>
                      </div>
                    </div>
                  </div>   

                  <div style={{display:this.state.estadoForm}}> 
                    <div className="col-md-6" >
                    <div className="box box-success box-solid">
                        <div className="box-header with-border">
                            <h3 className="box-title">Modificar Armazon</h3>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                        </div>
                    </div>
                    <div className="box-body">
                        <form>
                            <div className="form-group">
                                <div className="form-group">
                                  <label>nombre</label>
                                  <input type="text"  onChange={this.handleInput} name="nombre" value={this.state.nombre} className="form-control"/>  
                                </div>

                                <div className="form-group">
                                  <label>Precio</label>
                                  <input type="text"  onChange={this.handleInput} name="precio" value={this.state.precio} className="form-control"/>
                                </div>
                             
                                <button className="btn btn-primary" onClick={()=>this.actualiza()}>
                                    Modificar <span className="glyphicon glyphicon-pencil"></span>
                                </button>
                            </div>
                            {/*nombre:'',precio:0,tipo:''*/}
                        </form>
                    </div>
                    </div>
                </div>
                  </div>

                  <table className="table col-6">
                        <thead>
                            <tr>
                                <th scope="col">Armazon</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Tipo de Armazon</th>
                                <th scope="col">Edita</th>
                                <th scope="col">Elimina</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.A_Marcas.map((item)=>{
                                return(
                                    <tr key={item.id}>
                                        <td>{item.marca}</td>
                                        <td>{item.precio}</td>
                                        <td>{item.tipo}</td>
                                        <td>
                                          <button className="btn btn-primary" onClick={()=>this.modifica(item.id,item.marca,item.precio,'marca')}>
                                              <span className="glyphicon glyphicon-pencil"></span>
                                            </button>
                                        </td>
                                        <td><button className="btn btn-primary" onClick={()=>this.elimina(item.id,'marca')}><span className="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.state.A_sencillos.map((item)=>{
                                return(
                                    <tr key={item.id}>
                                        <td>{item.marca}</td>
                                        <td>{item.precio}</td>
                                        <td>{item.tipo}</td>
                                        <td><button className="btn btn-primary" onClick={()=>this.modifica(item.id,item.marca,item.precio,'sencillo')}><span className="glyphicon glyphicon-pencil"></span></button> </td>
                                        <td><button className="btn btn-primary" onClick={()=>this.elimina(item.id,'sencillo')}><span className="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                )
                            })
                            
                        }
                        </tbody>    
                    </table>
                </div> 
          </div>
          <ToastContainer />
        </div>
      );
    }
  }
  
  export default Armazon;
