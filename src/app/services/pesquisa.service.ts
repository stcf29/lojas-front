import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private pesquisaSubject = new Subject<string>();

  pesquisa$ = this.pesquisaSubject.asObservable();

  pesquisar(texto: string) {
    this.pesquisaSubject.next(texto);
  }

}
