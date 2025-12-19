import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { DadosBusca, Resultado } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getPassagens(search: DadosBusca): Observable<Resultado> {
    const params = this.converterParametrosParaString(search);
    return this.httpClient.get<Resultado>(this.apiUrl + '/passagens/search?' + params );
  }

  converterParametrosParaString(busca: DadosBusca) {
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if(!value){
          return ''
        }
        return `${key}=${value}`;
      })
      .join('&');

    return query;
  }
}
