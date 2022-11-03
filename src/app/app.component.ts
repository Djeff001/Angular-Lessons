import { Component } from '@angular/core';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://boiremixologie.com/cocktails/rhum-and-coke',
    description:
      'Le rhum &Coke, ou Cuba Libre pour le reste de la planète (au Québec, on aime être différent), a été popularisé à l’époque de la prohibition par les mafiosos qui profitaient de Cuba pour vendre leur alcool. Ce cocktail est donc un vrai classico. « Por Cuba libre! »',
  };
}
