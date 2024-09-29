import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'tony Stark';
  public alterEgo: string = 'iron MAn';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getfullName(): string {
    return `${this.name} - ${this.alterEgo}`;
  }

  public changeName(): void {
    this.name = 'Peter Parker';
  }

  public changeAlterEgo(): void {
    this.alterEgo = 'Spiderman';
  }

  public reset(): void {
    this.name = 'tony Stark';
    this.alterEgo = 'iron man';
  }

}
