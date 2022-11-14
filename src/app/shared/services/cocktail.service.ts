import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    // this.seed();
  }

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null),
      map((cocktails: Cocktail[]) => {
        return cocktails[index];
      })
    );
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .post<Cocktail>('https://restapi.fr/api/cocktails', cocktail)
      .pipe(
        tap((cocktail: Cocktail) => {
          this.cocktails$.next([...this.cocktails$.value, cocktail]);
        })
      );
  }

  public editCocktail(
    cockyailId: string,
    editedCocktail: Cocktail
  ): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(
        'https://restapi.fr/api/cocktails/' + cockyailId,
        editedCocktail
      )
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next(
            value.map((cocktail: Cocktail) => {
              if (cocktail.name === savedCocktail.name) return savedCocktail;
              else return cocktail;
            })
          );
        })
      );
  }
  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('https://restapi.fr/api/cocktails').pipe(
      tap((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails);
      })
    );
  }

  // public seed() {
  //   this.http
  //     .post('https://restapi.fr/api/cocktails', {
  //       name: 'Mojito',
  //       img: 'https://www.cuisine-et-cocktails.fr/wp-content/uploads/2021/01/mojito-2048x1365.jpg',
  //       description:
  //         'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
  //       ingredients: [
  //         {
  //           name: 'Menthe',
  //           quantity: 2,
  //         },
  //         {
  //           name: 'Perrier',
  //           quantity: 1,
  //         },
  //         {
  //           name: 'Rhum',
  //           quantity: 2,
  //         },
  //       ],
  //     })
  //     .subscribe();
  //   this.http
  //     .post('https://restapi.fr/api/cocktails', {
  //       name: 'Cosmopolitan',
  //       img: 'https://fthmb.tqn.com/x5VCT5MlLBt_j24w1iihSvKR2Ok=/4843x3636/filters:fill(auto,1)/two-cosmopolitan-cocktail-drinks-98629317-5893c0dd5f9b5874ee2cc5e0.jpg',
  //       description:
  //         'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
  //       ingredients: [
  //         {
  //           name: 'Cranberry',
  //           quantity: 2,
  //         },
  //         {
  //           name: 'Rhum',
  //           quantity: 1,
  //         },
  //         {
  //           name: 'Perrier',
  //           quantity: 2,
  //         },
  //       ],
  //     })
  //     .subscribe();
  //   this.http
  //     .post('https://restapi.fr/api/cocktails', {
  //       name: 'Mai Tai',
  //       img: 'https://www.homemadefoodjunkie.com/wp-content/uploads/2019/06/Mai-Tai-Garnished.jpg',
  //       description:
  //         'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
  //       ingredients: [
  //         {
  //           name: 'Citron',
  //           quantity: 2,
  //         },
  //         {
  //           name: 'Perrier',
  //           quantity: 1,
  //         },
  //         {
  //           name: 'Menthe',
  //           quantity: 2,
  //         },
  //       ],
  //     })
  //     .subscribe();
  // }
}
