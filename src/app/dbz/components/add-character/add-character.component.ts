import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public newCharacter: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void {

    if (this.newCharacter.name.trim().length === 0) return;

    this.onNewCharacter.emit({ ...this.newCharacter });
    this.newCharacter.name = '';
    this.newCharacter.power = 0;
  }



}

