import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];

  public deleteHero?: string = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
