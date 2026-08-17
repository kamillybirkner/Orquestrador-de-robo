import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Api } from './api';

export interface HealthStatus {
  connected: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class Health {
  constructor(private readonly api: Api) {}

  checkHealth(): Observable<HealthStatus> {
    return this.api.get<{ status: string }>('health').pipe(
      map(() => ({ connected: true, message: 'API conectada' })),
      catchError(() =>
        of({
          connected: false,
          message: 'API indisponível — ainda não implementada',
        }),
      ),
    );
  }
}
