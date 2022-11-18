import { NgModule } from '@angular/core';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { COCKTAIL_ROUTES } from './cocktail.routes';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    CocktailContainerComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailFormComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(COCKTAIL_ROUTES),
  ],
})
export class CocktailModule {}
