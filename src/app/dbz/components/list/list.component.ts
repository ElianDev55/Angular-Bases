import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public title = 'Lista de personajes';

  @Input()
  public charactersList: Character[] = [];


  @Output()
  public onDeletedCharacter: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDeletedCharacter.emit(index);
  }


 }
