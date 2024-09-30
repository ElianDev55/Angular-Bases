import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 9000
    },
    {
      name: 'Krillin',
      power: 5000
    },
    {
      name: 'Piccolo',
      power: 4000
    },
    {
      name: 'Gohan',
      power: 3000
    }
  ];


  public viewNewCharacter(character:Character): void {
    this.characters.push(character);
  }

  public deleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

}
