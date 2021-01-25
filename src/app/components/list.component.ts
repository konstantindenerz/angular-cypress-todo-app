import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ItemsService} from '../services/items.service';

@Component({
  selector: 'labs-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  constructor(private router: Router, public itemsServices: ItemsService) {
  }


  createNew(): void {
    this.router.navigate(['new']);
  }
}
