import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private pantalla;

  constructor() 
  {
    this.pantalla=0;
  }

  number(x)
  {
    this.pantalla=x;
  }

}
