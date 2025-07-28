import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';

  ufControl = new FormControl<string | UnidadeFederativa>('');
  unidadesFederativas: UnidadeFederativa[] = [];
  unidadesFiltradas$!: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) { }

  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados;
      });

    this.unidadesFiltradas$ = this.ufControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const nome = typeof value === 'string' ? value : value?.nome;
        return nome ? this._filtrar(nome) : this.unidadesFederativas.slice();
      })
    );
  }

  private _filtrar(nome: string): UnidadeFederativa[] {
    const filterValue = nome.toLowerCase();
    return this.unidadesFederativas.filter(uf =>
      uf.nome.toLowerCase().includes(filterValue) ||
      uf.sigla.toLowerCase().includes(filterValue)
    );
  }

  displayFn(uf: UnidadeFederativa): string {
    return uf && uf.nome ? `${uf.nome} - ${uf.sigla}` : '';
  }
}
