import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ItemComponent } from './item/item.component';
import { DashboardService } from './dashboard.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [ItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent {
  #service = inject(DashboardService);

  items = toSignal(this.#service.getItems());

  open(url: string, event: MouseEvent) {
    if (event.ctrlKey || event.metaKey) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.open(url, '_self', 'noopener,noreferrer');
    }
  }
}
