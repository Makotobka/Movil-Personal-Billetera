import { PinDialog } from '@ionic-native/pin-dialog';
import { ShowMesageProvider } from './../providers/show-mensage/show-mensage';
import { SeguridadProvider } from './../providers/seguridad/seguridad';
import { SqlManagerProvider } from './../providers/sql-manager/sql-manager';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const proveedores=[
    StatusBar,
    SplashScreen,
    SqlManagerProvider,
    SeguridadProvider,
    ShowMesageProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler} ,
    PinDialog
]