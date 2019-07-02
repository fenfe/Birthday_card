import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HappyPage } from '../happy/happy';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

  fifi1(){
    this.navCtrl.push(HappyPage);
  }

}
