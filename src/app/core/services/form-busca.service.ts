import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { DadosBusca } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required])

    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl("Executiva"),
      adultos: new FormControl(3),
      criancas: new FormControl(0),
      bebes: new FormControl(1),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta
    })

    somenteIda.valueChanges.subscribe(somenteIda => {
      if (somenteIda) {
        dataVolta.disable();
        dataVolta.setValidators(null);
      }
      else {
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }

      dataVolta.updateValueAndValidity();
    })
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }

    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }

    return descricao
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }

  obterControle<T>(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  obterDadosDeBusca(): DadosBusca {
    const dataIdaControl = this.obterControle<Date>('dataIda').value;


    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<number>('origem').value.id,
      destinoId: this.obterControle<boolean>('destino').value.id,
      tipo: this.obterControle<string>('tipo').value,
      passageirosAdultos: this.obterControle<number>('passageirosAdultos').value,
      passageirosCriancas: this.obterControle<number>('passageirosCriancas').value,
      passageirosBebes: this.obterControle<number>('passageirosBebes').value,
      dataIda: dataIdaControl.value.toISOString()
    }

    const dataVoltaControl = this.obterControle<Date>('dataVolta').value;
    if (dataVoltaControl.value) {
      dadosBusca.dataVolta = dataVoltaControl.value.toISOString();
    }

    return dadosBusca;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo,
      })
      console.log('Tipo de passagem alterado para: ', tipo)
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }

  get formEstaValido() {
    return this.formBusca.valid;
  }
}
