
import { Component } from '@angular/core';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Loja } from '../../models/loja';
import { LojaService } from '../../services/loja.service';
import { PesquisaService } from '../../services/pesquisa.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselComponent, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private lojaService: LojaService,
    private pesquisaService: PesquisaService,
  ) {}

  termoPesquisa = '';

  categoriaSelecionada = '';

  //bannerPrincipal!: Loja;

  lojas: Loja[] = [];

  vitrines: Loja[] = [];

  categorias = [
    'Todas',
    'Moda',
    'Calçados',
    'Eletrônicos',
    'Beleza',
    'Variedades',
  ];

  ngOnInit() {

    this.pesquisaService.pesquisa$
        .subscribe(texto => {
            this.termoPesquisa = texto
            this.pesquisar(this.termoPesquisa);
        });

}

  pesquisar(texto:string) {
    this.lojaService
      .pesquisar(texto)
      .subscribe({
        next: (resultado) => {
          this.lojas = resultado;
          this.vitrines = resultado.filter((x) => x.destaque);
        },
        error:(erro)=>{
            console.error(erro);
            }
      });
  }
}
