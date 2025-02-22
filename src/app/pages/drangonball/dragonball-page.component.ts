import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import {Character} from '../../interfaces/character.interface';


@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 4000 },
    // { id: 3, name: 'Yamcha', power: 300 },
    // { id: 4, name: 'Piccolo', power: 3000 },
  ]);

  powerClasses = computed(() => {
    return { 'text-danger': true };
  });

  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.power() || !this.name() || this.power() <= 0) {
      return;
    }

    const id: number = this.characters().length + 1;
    const newCharacter: Character = { id: id, name: this.name(), power: this.power() };
    this.characters.update((characters) => {
      return [...characters, newCharacter];
    });
    this.resetField();
  }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }
}
