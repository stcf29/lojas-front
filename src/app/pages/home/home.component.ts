
import { Component } from '@angular/core';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Loja } from '../../models/loja';
import { LojaService } from '../../services/loja.service';
import { PesquisaService } from '../../services/pesquisa.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { distinctUntilChanged } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarrosselComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    CommonModule
  ],
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
  resultadoOriginal: Loja[] = [];

  categorias = [
    { valor: '', descricao: 'Todas' },
    { valor: 'ELETRONICOS', descricao: 'Eletrônicos' },
    { valor: 'ROUPAS', descricao: 'Roupas' },
    { valor: 'MODA_INTIMA', descricao: 'Moda Íntima' },
    { valor: 'CALCADOS', descricao: 'Calçados' },
    { valor: 'JOALHERIA', descricao: 'Joalheria' },
    { valor: 'PAPELARIA', descricao: 'Papelaria' },
    { valor: 'FARMACIA', descricao: 'Farmácia' },
    { valor: 'INFORMATICA', descricao: 'Informática' },
    { valor: 'COSMETICOS', descricao: 'Cosméticos' },
    { valor: 'UTILIDADES', descricao: 'Utilidades' },
    { valor: 'ALIMENTACAO', descricao: 'Alimentação' },
  ];

  ngOnInit() {
    this.pesquisaService.pesquisa$
      .pipe(distinctUntilChanged())
      .subscribe((texto) => {
        this.termoPesquisa = texto;

        if (texto.trim()) {
          this.pesquisar(texto);
        } else {
          this.carregarLojas();
        }
      });

    this.carregarLojas();
  }

  carregarLojas() {
    this.lojaService.listarTodas().subscribe((lojas) => {
      this.resultadoOriginal = lojas;
      this.aplicarRegraInicial();
    });
  }

  private aplicarRegraInicial() {
    this.vitrines = this.resultadoOriginal.filter(
      (loja) => loja.plano === 'PREMIUM',
    );

    this.todasLojas = this.resultadoOriginal.filter(
      (loja) => loja.plano === 'BASICO' || loja.plano === 'GRATUITO',
    );

    this.totalItens = this.todasLojas.length;
    this.paginaAtual = 0;
    this.atualizarPagina();
  }

  pesquisar(texto: string) {
    this.lojaService.pesquisar(texto).subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.resultadoOriginal = resultado;
        this.aplicarFiltros();
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

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultado = [...this.resultadoOriginal];

    if (this.categoriaSelecionada) {
      resultado = resultado.filter(
        (loja) => loja.categoria === this.categoriaSelecionada,
      );
    }

    this.vitrines = resultado.filter(
      (loja) => loja.plano === 'PREMIUM' || loja.plano === 'PRO',
    );

    this.todasLojas = resultado.filter(
      (loja) => loja.plano === 'BASICO' || loja.plano === 'GRATUITO',
    );

    this.totalItens = this.todasLojas.length;
    this.paginaAtual = 0;
    this.atualizarPagina();
  }

  abrirMapa(loja: Loja) {
    const partes = [
      loja.nome,
      loja.endereco,
      loja.numero,
      loja.bairro,
      'Belém',
      'PA',
    ].filter((parte) => parte && parte.trim() !== '');

    const endereco = partes.join(', ');
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
    window.open(url, '_blank');
  }

abrirWhatsapp(loja: Loja) {
  if (!loja.whatsapp) return;
  const numero = loja.whatsapp.replace(/\D/g, '');
  const mensagem =`Olá! Encontrei a loja ${loja.nome} no VeroCentro e gostaria de obter mais informações.`;
  const url =`https://wa.me/55${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
}
