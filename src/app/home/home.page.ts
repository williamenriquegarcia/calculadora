import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private pantalla;
  private memoria='';
  private seno;
  private coseno;
  private tangente;
  private potencia;

  constructor() 
  {
    this.pantalla='0';
    this.seno=false;
    this.coseno=false;
    this.tangente=false;
  }

  number(x)
  {
    this.memoria=this.memoria+x;
    this.pantalla=(this.memoria);
  }

  equal()
  {
    
    if(this.seno)
    {
      var numero=this.pantalla.substring(3,this.pantalla.lenght);
      this.pantalla=(Math.sin(numero));
      this.seno=false;
    }
    else if(this.coseno)
    {
      var numero=this.pantalla.substring(3,this.pantalla.lenght);
      this.pantalla=(Math.cos(numero));
      this.coseno=false;
    }
    else if(this.tangente)
    {
      var numero=this.pantalla.substring(3,this.pantalla.lenght);
      this.pantalla=(Math.tan(numero));
      this.tangente=false;
    }
    else
    {
      this.pantalla=eval(this.pantalla);
    }
  }

  calcularSeno()
  {
    this.memoria="sen";
    this.pantalla="sen";
    this.seno=true;
    this.coseno=false;
    this.tangente=false;
    this.potencia=false;
  }

  calcularCoseno()
  {
    this.memoria="cos";
    this.pantalla="cos";
    this.seno=false;
    this.coseno=true;
    this.tangente=false;
    this.potencia=false;
  }

  calcularTangente()
  {
    this.memoria="tan";
    this.pantalla="tan";
    this.seno=false;
    this.coseno=false;
    this.tangente=true;
    this.potencia=false;
  }

  elevarPotencia()
  {
    this.memoria="^";
    this.pantalla="^";
    this.seno=false;
    this.coseno=false;
    this.tangente=false;
    this.potencia=true;
  }
  

}
