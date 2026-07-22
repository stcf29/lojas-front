import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page-vivaz',
  imports: [],
  templateUrl: './landing-page-vivaz.component.html',
  styleUrl: './landing-page-vivaz.component.css'
})
export class LandingPageVivazComponent {

  abrirLojaVirtual(){
    window.open('https://loja.infinitepay.io/vvz_091', '_blank');
  }

  abrirInsta(){
    window.open('https://www.instagram.com/vivaz.091', '_blank');
  }

  abrirZap(){
    const numero = 91980698140;
    const mensagem =`Olá! Encontrei a loja Vivaz no VeroCentro e gostaria de obter mais informações.`;
    const url =`https://wa.me/55${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

  abrirMaps(){
    window.open('https://maps.app.goo.gl/8aPcr3itiniMcbv7A', '_blank');
  }

}
