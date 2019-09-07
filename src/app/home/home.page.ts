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
  private base;
  private exponente;
  private tamanoBase;
  private contadorExponente;

  constructor() 
  {
    this.pantalla='0';
    this.seno=false;
    this.coseno=false;
    this.tangente=false;
    this.potencia=false;
    this.contadorExponente=0;
  }

  number(x)
  {
    this.memoria=this.memoria+x;
    this.pantalla=(this.memoria);
    if(this.potencia)
    {
      this.contadorExponente=this.contadorExponente+1;
    }
  }

  equal()
  {
    
    if(this.seno)
    {
      var numero=this.pantalla.substring(3);
      this.pantalla=(Math.sin(numero));
      this.seno=false;
      this.memoria="";
    }
    else if(this.coseno)
    {
      var numero=this.pantalla.substring(3);
      this.pantalla=(Math.cos(numero));
      this.coseno=false;
      this.memoria="";
    }
    else if(this.tangente)
    {
      var numero=this.pantalla.substring(3);
      this.pantalla=(Math.tan(numero));
      this.tangente=false;
      this.memoria="";
    }
    else if(this.potencia)
    {
      this.exponente=this.pantalla.substring(this.contadorExponente+1);
      this.exponente=parseInt(this.exponente);
      this.base=parseInt(this.base);
      this.pantalla=Math.pow(this.base,this.exponente);
      this.potencia=false;
      this.memoria="";
      this.exponente='';
      this.base='';
      this.contadorExponente=0;
    }
    else
    {
      this.pantalla=eval(this.pantalla);
      this.memoria="";
    }
  }//fin metodo

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
    this.base=this.pantalla;
    this.memoria=this.memoria+"^";
    this.pantalla=this.pantalla+"^";
    this.seno=false;
    this.coseno=false;
    this.tangente=false;
    this.potencia=true;
  }
}//fin clase
