import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DashboardComponent } from '@libs/dashboard/dashboard.component';

@Component({
  standalone: true,
  selector: 'app-dashboard-page',
  template: ` <app-dashboard /> `,
  imports: [DashboardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}
