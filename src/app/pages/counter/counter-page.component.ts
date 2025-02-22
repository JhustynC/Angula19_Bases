import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
  h2,h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    margin: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counter: number = 10;
  counterSignal = signal(10);

  constructor() {
    // setInterval(() => {
    //   this.incresseBy(1);
    //   console.log('tick');
    // }, 2000);
  }

  public incresseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  public decresseBy(value: number): void {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  public reset(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
