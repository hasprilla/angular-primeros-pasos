import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ name }}</h1>

    <h2>{{ counter }}</h2>

    <button (click)="increment(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increment(-1)">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public name: string = 'Jhon';
  public counter: number = 10;

  public increment(value: number): void {
    this.counter += value;
  }
  public decrement(value: number): void {
    this.counter -= value;
  }
  public reset(): void {
    this.counter = 10;
  }
}
