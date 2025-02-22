import { Component, input, InputSignal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters: InputSignal<Character[]> = input.required<Character[]>();
}
