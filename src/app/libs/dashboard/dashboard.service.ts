import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Item } from './dashboard.types';

@Injectable()
export class DashboardService {
  #http = inject(HttpClient);

  getItems(): Observable<Item[]> {
    return this.#http
      .get<Item[]>('data/apps.json', {
        responseType: 'json',
      })
      .pipe(map((items) => items.map((item) => ({ ...item, icon: `data/icons/${item.icon}` }))));
  }
}
