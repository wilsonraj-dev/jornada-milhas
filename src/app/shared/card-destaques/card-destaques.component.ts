import { Component, Input } from '@angular/core';
import { Passagem } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-destaques',
  templateUrl: './card-destaques.component.html',
  styleUrls: ['./card-destaques.component.scss']
})
export class CardDestaquesComponent {
  @Input() destacadaPor: string = ''
  @Input() passagem?: Passagem;
  @Input() variant: 'primary' | 'secondary' | 'default'  = 'primary'
}
