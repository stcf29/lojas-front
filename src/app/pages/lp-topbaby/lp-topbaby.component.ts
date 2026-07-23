import { Component } from '@angular/core';

@Component({
  selector: 'app-lp-topbaby',
  imports: [],
  templateUrl: './lp-topbaby.component.html',
  styleUrl: './lp-topbaby.component.css'
})
export class LpTopbabyComponent {
  abrirInsta(){
    window.open('https://www.instagram.com/top.baby.tudo.para.seu.bebe/', '_blank');
  }

  abrirZap(){
    const numero = 91983109594;
    const mensagem =`Olá! Encontrei a loja Top Baby no VeroCentro e gostaria de obter mais informações.`;
    const url =`https://wa.me/55${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

  abrirMaps(){
    window.open('https://maps.app.goo.gl/E4afBtYDYPDTXTJp7', '_blank');
  }
}
