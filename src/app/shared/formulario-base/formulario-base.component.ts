import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-formulario-base',
  templateUrl: './formulario-base.component.html',
  styleUrls: ['./formulario-base.component.scss']
})
export class FormularioBaseComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    })
  }

}
