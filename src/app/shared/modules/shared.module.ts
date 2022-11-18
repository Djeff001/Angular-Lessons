import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipe/filter.pipe';
import { SelectedDirective } from '../directives/selected.directive';

@NgModule({
  declarations: [FilterPipe, SelectedDirective],
  imports: [CommonModule],
  exports: [FilterPipe, SelectedDirective, CommonModule],
})
export class SharedModule {}
