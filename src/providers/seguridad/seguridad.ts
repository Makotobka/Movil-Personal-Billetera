
import { Injectable } from '@angular/core';
import { PinDialog } from '@ionic-native/pin-dialog';

/*
  Generated class for the SeguridadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeguridadProvider {

  constructor(private pinDialog: PinDialog) {  

  }

  cifrarClave(clave:string){     
  }

  mostrarPin(){
    this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel']).then((result: any) => {
      switch (result.buttonIndex) {
        case 1:
          console.log('User clicked OK, value is: ', result.input1)
        break;

        case 2:
          console.log('User cancelled');
        break;
      }
    }
  );
  }

}
