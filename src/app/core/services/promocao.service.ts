import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listar(): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`http://localhost:8080/promocoes`);
  }
}
