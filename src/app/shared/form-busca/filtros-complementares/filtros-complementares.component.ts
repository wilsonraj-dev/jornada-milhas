import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();
  @Input() texto: string = '';

  constructor(public formBuscaService: FormBuscaService,
              private passagemsService: PassagensService
  ) { }

  busca() {
    if (!this.formBuscaService.formEstaValido) {
      this.formBuscaService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })

      return;
    }

    this.realizarBusca.emit(this.formBuscaService.obterDadosDeBusca());
  }

  limparFiltros() {
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagemsService.precoMin,
      precoMax: this.passagemsService.precoMax
    })
  }
}
