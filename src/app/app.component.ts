import { SqlManagerProvider } from './../providers/sql-manager/sql-manager';
import { PrincipalPage } from './../pages/principal/principal';
import { ConfiguracionPage } from './../pages/configuracion/configuracion';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegistroValorPage } from '../pages/registro-valor/registro-valor';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, list?:any[]}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public sqlman:SqlManagerProvider) {
    this.initializeApp();    
    this.pages = [
      { title: 'Dashboard', component: PrincipalPage },      
      { title: 'Ingresos', component: RegistroValorPage },
      { title: 'Configracion', component: ConfiguracionPage }
    ];
    /*
    dashboard
    ingresos
    egresos
    movimientos entre cuentas
    crear cuentas
    borrar cuentas
    graficos de resumentes
    movimientos de valores
    configuracion
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.sqlman.abrirConexion().then((res)=>{
        console.log("conexion ",res)
        this.statusBar.styleDefault();
        this.splashScreen.hide();  
      });
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
