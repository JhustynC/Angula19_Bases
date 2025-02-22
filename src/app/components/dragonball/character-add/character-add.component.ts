import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  legthCharacters = input<number>();
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.power() || !this.name() || this.power() <= 0) {
      return;
    }

    const id = this.legthCharacters() ? this.legthCharacters()! + 1 : 1000;
    const newCharacter: Character = { id: id, name: this.name(), power: this.power() };
    this.resetField();
    console.log(newCharacter);
    this.newCharacter.emit(newCharacter);
  }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }
}
