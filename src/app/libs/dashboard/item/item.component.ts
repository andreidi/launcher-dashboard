import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Item } from '../dashboard.types';
import { ImageFallbackDirective } from '../../shared/directives/image-fallback.directive';

@Component({
  standalone: true,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ImageFallbackDirective],
})
export class ItemComponent {
  data = input.required<Item>();
}
