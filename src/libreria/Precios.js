//solo material
function objeto_Material(material,precio){
    const Precios={
        material:material,
        precio
    }
    return Precios;
}

//#region 
//esfera cilindro
function objeto_material_con_Esfera_cilindro(material,precio,esfera1,esfera2,cilindro1,cilindro2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y eje
function objeto_material_esf_cil_eje(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y add
function objeto_material_esf_cil_add(material,precio,esfera1,esfera2,cilindro1,cilindro2,add1,add2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                add:{
                    rango1:add1,
                    rango2:add2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y altura
function objeto_material_esf_cil_altura(material,precio,esfera1,esfera2,cilindro1,cilindro2,altura1,altura2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y dnp
function objeto_material_esf_cil_dnp(material,precio,esfera1,esfera2,cilindro1,cilindro2,dnp1,dnp2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                precio:precio
            }
        }
    }
    return Precios;
}


//esfera-cilindro-eje-dnp 
function objeto_material_esf_cil_eje_dnp(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-altura
function objeto_material_esf_cil_eje_altura(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,altura1,altura2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-add
function objeto_material_esf_cil_eje_add(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,add1,add2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-dnp-altura
function objeto_material_esf_cil_eje_dnp_Altura(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,altura1,altura2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                precio:precio
            }
        }
    }
    return Precios;
}

//esfera-cilindro-eje-dnp-add
function objeto_material_esf_cil_eje_dnp_add(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,add1,add2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
// guarda todos loss datos
function objeto_material_esf_cil_eje_dnp_Altura_add(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,altura1,altura2,add1,add2){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                precio:precio
            }
        }
    }
    return Precios;
}
//#endregion

//#region  los mismos solo que con  tratamiento
/**
 * los mismos solo que con  tratamiento
*/
function objeto_material_con_Esfera_cilindro_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                precio:precio
            },
            tratamiento
        }
    }
    return Precios;
}
//esfera cilindro y eje
function objeto_material_esf_cil_eje_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y add
function objeto_material_esf_cil_add_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,add1,add2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                add:{
                    rango1:add1,
                    rango2:add2
                },
                precio:precio,
                tratamiento
            }
        }
    }
    return Precios;
}
//esfera cilindro y altura
function objeto_material_esf_cil_altura_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,altura1,altura2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y dnp
function objeto_material_esf_cil_dnp_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,dnp1,dnp2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-dnp 
function objeto_material_esf_cil_eje_dnp_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-altura
function objeto_material_esf_cil_eje_altura_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,altura1,altura2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-add
function objeto_material_esf_cil_eje_add_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,add1,add2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-dnp-altura
function objeto_material_esf_cil_eje_dnp_Altura_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,altura1,altura2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}

//esfera-cilindro-eje-dnp-add =>
function objeto_material_esf_cil_eje_dnp_add_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,add1,add2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
// guarda todos loss datos
function objeto_material_esf_cil_eje_dnp_Altura_add_Tratamiento(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,altura1,altura2,add1,add2,tratamiento){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                tratamiento,
                precio:precio
            }
        }
    }
    return Precios;
}
//#endregion


//#region os mismos solo que con  tratamiento y Terminada

/**
 * los mismos solo que con  tratamiento y Terminada
*/
function objeto_material_con_Esfera_cilindro_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y eje
function objeto_material_esf_cil_eje_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}

//esfera cilindro y add
function objeto_material_esf_cil_add_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,add1,add2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                add:{
                    rango1:add1,
                    rango2:add2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y altura
function objeto_material_esf_cil_altura_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,altura1,altura2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera cilindro y dnp
function objeto_material_esf_cil_dnp_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,dnp1,dnp2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-dnp 
function objeto_material_esf_cil_eje_dnp_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-altura
function objeto_material_esf_cil_eje_altura_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,altura1,altura2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-add
function objeto_material_esf_cil_eje_add_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,add1,add2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-dnp-altura
function objeto_material_esf_cil_eje_dnp_Altura_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,altura1,altura2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
//esfera-cilindro-eje-dnp-add
function objeto_material_esf_cil_eje_dnp_add_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,add1,add2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}
// guarda todos loss datos
function objeto_material_esf_cil_eje_dnp_Altura_add_Tratamiento_Terminado(material,precio,esfera1,esfera2,cilindro1,cilindro2,eje1,eje2,dnp1,dnp2,altura1,altura2,add1,add2,tratamiento,terminado){
    const Precios={
        material:material,
        esfera:{
            rango1:esfera1,
            rango2:esfera2,
            cilindro:{
                rango1:cilindro1,
                rango2:cilindro2,
                eje:{
                    rango1:eje1,
                    rango2:eje2
                },
                dnp:{
                    rango1:dnp1,
                    rango2:dnp2
                },
                altura:{
                    rango1:altura1,
                    rango2:altura2
                },
                add:{
                    rango1:add1,
                    rango2:add2
                },
                tratamiento,
                terminado,
                precio:precio
            }
        }
    }
    return Precios;
}

//#endregion

export default{
    objeto_Material,
    objeto_material_con_Esfera_cilindro,
    objeto_material_esf_cil_eje,
    objeto_material_esf_cil_dnp,
    objeto_material_esf_cil_altura,
    objeto_material_esf_cil_add,
    //
    objeto_material_esf_cil_eje_dnp,
    objeto_material_esf_cil_eje_altura,
    objeto_material_esf_cil_eje_add,
    //
    objeto_material_esf_cil_eje_dnp_Altura,
    objeto_material_esf_cil_eje_dnp_add,
    //
    objeto_material_esf_cil_eje_dnp_Altura_add,
    //--------con tratamientos----------------------
    objeto_material_con_Esfera_cilindro_Tratamiento,
    objeto_material_esf_cil_eje_Tratamiento,
    objeto_material_esf_cil_dnp_Tratamiento,
    objeto_material_esf_cil_altura_Tratamiento,
    objeto_material_esf_cil_add_Tratamiento,
    //
    objeto_material_esf_cil_eje_dnp_Tratamiento,
    objeto_material_esf_cil_eje_altura_Tratamiento,
    objeto_material_esf_cil_eje_add_Tratamiento,
    //
    objeto_material_esf_cil_eje_dnp_Altura_Tratamiento,
    objeto_material_esf_cil_eje_dnp_add_Tratamiento,
    //
    objeto_material_esf_cil_eje_dnp_Altura_add_Tratamiento,
    //--------------con tratamientos y _Terminado-----------
    objeto_material_con_Esfera_cilindro_Tratamiento_Terminado,
    objeto_material_esf_cil_eje_Tratamiento_Terminado,
    objeto_material_esf_cil_dnp_Tratamiento_Terminado,
    objeto_material_esf_cil_altura_Tratamiento_Terminado,
    objeto_material_esf_cil_add_Tratamiento_Terminado,
    //
    objeto_material_esf_cil_eje_dnp_Tratamiento_Terminado,
    objeto_material_esf_cil_eje_altura_Tratamiento_Terminado,
    objeto_material_esf_cil_eje_add_Tratamiento_Terminado,
    //
    objeto_material_esf_cil_eje_dnp_Altura_Tratamiento_Terminado,
    objeto_material_esf_cil_eje_dnp_add_Tratamiento_Terminado,
    //
    objeto_material_esf_cil_eje_dnp_Altura_add_Tratamiento_Terminado
}