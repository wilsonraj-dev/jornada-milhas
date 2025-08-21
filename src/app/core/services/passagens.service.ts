import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Resultado } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getPassagens(search: any): Observable<Resultado> {
    const params = search;
    return this.httpClient.get<Resultado>(this.apiUrl + '/passagens/search', { params });
  }
}
