import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPAgeComponent{

  constructor(
    private dbzService : DbzService
  ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onDeletedCharacter(index: number): void {
    this.dbzService.deleteCharacter(index);
  }

  public onNewCharacter(character: Character): void {
    this.dbzService.viewNewCharacter(character);
  }


}
