import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { Item } from '../dashboard.types';

@Component({
  standalone: true,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'clicked.emit()',
  },
})
export class ItemComponent {
  data = input.required<Item>();

  clicked = output<void>();
}
