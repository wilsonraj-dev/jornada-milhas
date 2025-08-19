import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PessoaUsuaria } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`http://localhost:8080/auth/cadastro`, pessoaUsuaria);
  }

  buscarCadastro(): Observable<PessoaUsuaria> {
    return this.http.get<PessoaUsuaria>(`http://localhost:8080/auth/perfil`);
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {    
    return this.http.patch<PessoaUsuaria>(`http://localhost:8080/auth/perfil`,
      pessoaUsuaria);
  }
}
