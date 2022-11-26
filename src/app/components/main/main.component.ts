import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  verificarM:boolean = false;
  verificarNM:boolean = false;
  numero:number = 1;
  valor:number = 6500;
  Nmegusta:number = 12;

  megusta:string = "../../../assets/me-gusta.png";

  Nnomegusta:number = 5;
  nomegusta:string = "../../../assets/dislike.png";

  validarCampo(){
    if(this.numero <= 0){
       this.numero = 0;
    this.valor = 0;
    }
  }
  restar() {
    this.validarCampo();
  this.numero -= 1;
  this.valor -= 6500;
  }
  sumar(){
    this.numero += 1;
    this.valor += 6500;
  }

  Megusta(){
    if(this.verificarM){
      this.Nmegusta -= 1;
      this.megusta = "../../../assets/me-gusta.png";

      this.verificarM = false;
    }
    this.Nmegusta += 1
    this.megusta = "../../../assets/me-gusta-oro.png";
    this.verificarM = true;
  }

  Nomegusta(){
    if(this.verificarNM){
      this.Nnomegusta -= 1;
      this.nomegusta = "../../../assets/dislike.png";
      this.verificarM = false;
    }
    this.Nnomegusta += 1
    this.nomegusta = "../../../assets/dislike-rojo.png";
    this.verificarNM = true;
  }
  ngOnInit(): void {
  }

}
