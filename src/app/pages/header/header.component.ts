import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PesquisaService } from '../../services/pesquisa.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private pesquisaService: PesquisaService) {}

  private searchSubject = new Subject<string>();

  search = '';

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((texto) => {
        this.pesquisaService.pesquisar(texto);
      });
  }

  onSearchChange() {
    this.searchSubject.next(this.search);
  }

  buscar() {
    console.log('texto digitado', this.search);
    this.pesquisaService.pesquisar(this.search);
  }
}
