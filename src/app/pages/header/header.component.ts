import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PesquisaService } from '../../services/pesquisa.service';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, FormsModule, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private pesquisaService: PesquisaService) {}

  search = '';

  buscar() {
  console.log('texto digitado', this.search)
  this.pesquisaService.pesquisar(this.search);
}

}
