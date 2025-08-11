import { Component } from '@angular/core';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(private formularioService: FormularioService,
    private cadastroService: CadastroService
  ) { }

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();
    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (res) => {
          console.log('Cadastro realizado com sucesso!', res);
        },
        error: (err) => {
          console.error('Erro ao cadastrar:', err);
        }
      });
    }
  }
}
