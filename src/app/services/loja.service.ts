import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Loja } from '../models/loja';

@Injectable({
  providedIn: 'root',
})
export class LojaService {
  constructor(private http: HttpClient) {}

  private readonly API = environment.apiUrl;

  buscar(nome: string): Observable<any> {
    return this.http.post(`${this.API}/lojas/pesquisarLojas`, { nome });
  }

  listarTodas(): Observable<Loja[]> {
  return this.http.get<Loja[]>(
    `${this.API}/lojas/listar`
  );
}

  pesquisar(nome: string) {
    return this.http.post<Loja[]>(
      this.API + '/lojas/pesquisarLojas',
      { nome: nome,
        //categoria: categoria,
      },
    );
  }

  enviarFC(formulario: any): Observable<void> {
    return this.http.post<void>(`${this.API}/lojas/faleConosco`, formulario);
  }
}
