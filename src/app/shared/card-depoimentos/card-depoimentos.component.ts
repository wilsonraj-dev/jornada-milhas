import { Component, Input } from '@angular/core';
import { Depoimento } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {
  @Input() depoimento!: Depoimento;
}
