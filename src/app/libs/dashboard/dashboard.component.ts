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
}
