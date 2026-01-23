import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { Item } from '../dashboard.types';
import { ImageFallbackDirective } from '../../shared/directives/image-fallback.directive';

@Component({
  standalone: true,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ImageFallbackDirective],
  host: {
    '(click)': 'clicked.emit($event)',
  },
})
export class ItemComponent {
  data = input.required<Item>();

  clicked = output<MouseEvent>();
}
