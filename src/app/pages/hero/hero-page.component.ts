import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'hero-page',
  templateUrl: './hero.-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroComponent {
  public name: WritableSignal<string> = signal('Ironman');
  public age: WritableSignal<number> = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizeName = computed(() => this.name().toLocaleUpperCase());

  get upperCaseName(): string {
    return this.name().toLocaleUpperCase();
  }

  public get getHeroDescription(): string {
    return `The hero's name: ${this.name()} and his age: ${this.age()}`;
  }

  public changeHero(): void {
    this.name.set('Spirdeman');
    this.age.set(22);
  }

  public resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  public changeAge(age: number) {
    this.age.set(age);
  }
}
