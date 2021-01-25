import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items$ = new BehaviorSubject([
    {title: 'Foobar', checked: false},
    {title: 'Bubu', checked: false},
    {title: 'Test', checked: true},
  ]);
}
