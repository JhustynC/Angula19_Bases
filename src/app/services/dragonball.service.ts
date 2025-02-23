import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  // if (characters){
  //   const localStorageObj = JSON.parse(characters);
  // }
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  constructor() {}

  characters = signal<Character[]>(loadFromLocalStorage());

  // listCharacter = [
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 4000 },
  //   { id: 3, name: 'Yamcha', power: 300 },
  //   { id: 4, name: 'Piccolo', power: 3000 },
  // ]

  //! Que los efectos solo hagan una y sola un cosa
  saveToLocalStorage = effect(() => {
    console.log('Saving characters');
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
