import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  listar() : Observable<Depoimento[]> {
    return this.httpClient.get<Depoimento[]>(`http://localhost:8080/depoimentos`);
  }
}
