import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private apiUrl = 'http://localhost:8080/lojas';

  constructor(private http: HttpClient) { }

  buscarPorNome(nome: string): Observable<any> {

    return this.http.post(`${this.apiUrl}/pesquisar`, { nome });
  }
}
