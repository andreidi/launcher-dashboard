import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Item } from './dashboard.types';
import { DATA_PATHS } from './dashboard.constants';

@Injectable()
export class DashboardService {
  #http = inject(HttpClient);

  getItems(): Observable<Item[]> {
    return this.#http
      .get<Item[]>(DATA_PATHS.APPS, {
        responseType: 'json',
      })
      .pipe(
        map((items) => items.map((item) => ({ ...item, icon: `${DATA_PATHS.ICONS}${item.icon}` }))),
      );
  }
}
