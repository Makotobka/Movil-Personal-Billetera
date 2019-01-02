import { Injectable } from '@angular/core';
import { createConnection, ConnectionOptions, getConnectionManager, Connection } from 'ionic-orm';
import { Alias } from 'ionic-orm/dist/src/query-builder/alias/Alias';
import { tbConfig } from '../../estructuraBD/tbConfig';
import { tbCuenta } from '../../estructuraBD/tbCuenta';
import { tbIcono } from '../../estructuraBD/tbIcono';
import { tbTipo } from '../../estructuraBD/tbTipo';
import { tbTrans } from '../../estructuraBD/tbTrans';
@Injectable()
export class SqlManagerProvider {

  public conexion:Connection;
  public nameBD="grdfvb";
  public isCone:boolean=false;
  private tablas;

  constructor() {
  }

  private async crearSQLLite(){
    this.tablas = [
      tbConfig,
      tbCuenta,
      tbIcono,
      tbTipo,
      tbTrans
    ]

    let conexion:ConnectionOptions = {
      driver: {
        type: "websql",
        database: this.nameBD
      },
      entities: this.tablas,
      logging: {
        logFailedQueryError: true,
        logQueries: true,
        logSchemaCreation: true,
        logOnlyFailedQueries: true
      },
      autoSchemaSync: true
    }   
    console.log("=> ",conexion) 
    return conexion;
  }

  private async crearConexion(){
    return createConnection(await this.crearSQLLite()).then(async con =>{      
      this.conexion = con;
      this.isCone=true;
      return true;
    }).catch(async error =>{
      this.isCone=false;
      return false
    })
  }

  public async abrirConexion(){
    let s:any = await getConnectionManager();
    console.log(s)
    if(s.connections.length === 0){
      return await this.crearConexion().then(res=>{   
        return res;
      }).catch(error=>{
        console.log(error)
        return false;
      })
    }else{
      console.log("Error de conexion");
      return false;            
    }

  }

  public async insertarDatos(Tabla:any,data:any){
    let repFacturas = this.conexion.getRepository(Tabla);
    return await repFacturas.persist(data);
  }

  public async selectData (Tabla:any,AliasTabla:string, where?:string){
    let sadw = this.conexion.getRepository(tbIcono);
    if(where===undefined){
      let repositorio = this.conexion.getRepository(Tabla);
    return await repositorio.createQueryBuilder(AliasTabla).getResults();
    }else{
      let repositorio = this.conexion.getRepository(Tabla);
      return await repositorio.createQueryBuilder(AliasTabla).where(where).getResults();
    }
  }

  public async eliminarData(Tabla:any,registro:any){
    let repositorio = this.conexion.getRepository(Tabla);    
    return await repositorio.remove(registro);
  }
}
