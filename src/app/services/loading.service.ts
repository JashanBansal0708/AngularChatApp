import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading : Subject<boolean> = new Subject();
  constructor() { }
}
