
import { Component } from '@angular/core';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Loja } from '../../models/loja';
import { LojaService } from '../../services/loja.service';
import { PesquisaService } from '../../services/pesquisa.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselComponent, MatCardModule, MatButtonModule, MatIconModule, MatPaginatorModule],
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
  todasLojas: Loja[] = [];
  lojas: Loja[] = [];
  paginaAtual = 0;
  itensPorPagina = 5;
  totalItens = 0;
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
    this.pesquisaService.pesquisa$.subscribe((texto) => {
      this.termoPesquisa = texto;
      this.pesquisar(this.termoPesquisa);
    });
  }

  pesquisar(texto: string) {
    this.lojaService.pesquisar(texto).subscribe({
      next: (resultado) => {
        this.todasLojas = resultado;
        this.totalItens = resultado.length;
        this.atualizarPagina();
        this.vitrines = resultado.filter((x) => x.destaque);
        this.vitrines = resultado.filter((x) => x.destaque);
      },
      error: (erro) => {
        console.error(erro);
      },
    });
  }

  atualizarPagina() {
    const inicio = this.paginaAtual * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.lojas = this.todasLojas.slice(inicio, fim);
  }

  mudarPagina(event: PageEvent) {
    this.paginaAtual = event.pageIndex;
    this.atualizarPagina();
  }
}
