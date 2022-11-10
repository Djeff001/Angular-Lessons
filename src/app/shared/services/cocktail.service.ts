import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://www.cuisine-et-cocktails.fr/wp-content/uploads/2021/01/mojito-2048x1365.jpg',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
      ingredients: [
        {
          name: 'Menthe',
          quantity: 2,
        },
        {
          name: 'Perrier',
          quantity: 1,
        },
        {
          name: 'Rhum',
          quantity: 2,
        },
      ],
    },
    {
      name: 'Cosmopolitan',
      img: 'https://fthmb.tqn.com/x5VCT5MlLBt_j24w1iihSvKR2Ok=/4843x3636/filters:fill(auto,1)/two-cosmopolitan-cocktail-drinks-98629317-5893c0dd5f9b5874ee2cc5e0.jpg',
      description:
        'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
      ingredients: [
        {
          name: 'Cranberry',
          quantity: 2,
        },
        {
          name: 'Rhum',
          quantity: 1,
        },
        {
          name: 'Perrier',
          quantity: 2,
        },
      ],
    },
    {
      name: 'Mai Tai',
      img: 'https://www.homemadefoodjunkie.com/wp-content/uploads/2019/06/Mai-Tai-Garnished.jpg',
      description:
        'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
      ingredients: [
        {
          name: 'Citron',
          quantity: 2,
        },
        {
          name: 'Perrier',
          quantity: 1,
        },
        {
          name: 'Menthe',
          quantity: 2,
        },
      ],
    },
  ]);

  constructor() {}

  public getCocktail(index: number): Cocktail {
    return this.cocktails$.value[index];
  }

  public addCocktail(cocktail: Cocktail) {
    const value = this.cocktails$.value;
    this.cocktails$.next([...value, cocktail]);
  }

  public editCocktail(editedCocktail: Cocktail) {
    const value = this.cocktails$.value;
    this.cocktails$.next(
      value.map((cocktail: Cocktail) => {
        if (cocktail.name === editedCocktail.name) return editedCocktail;
        else return cocktail;
      })
    );
  }
}
