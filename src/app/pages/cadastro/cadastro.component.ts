import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;

  cadastrar() {
    // Implementar a lógica de cadastro aqui
    console.log('Cadastro realizado com sucesso!');
  } 
}
