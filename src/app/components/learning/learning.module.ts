import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningRoutingModule } from './learning-routing.module';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardDetailsComponent } from './cards/card-details/card-details.component';
import { LearningComponent } from './learning/learning.component';
import { TestsComponent } from './tests/tests.component';
import { FilterCardsPipe } from 'src/app/pipes/filter-cards.pipe';
import { HighlightDirective } from 'src/app/directives/highlight-directive';
import { CardCreateComponent } from './cards/card-create/card-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LearningRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CardListComponent,
    CardDetailsComponent,
    LearningComponent,
    TestsComponent,
    FilterCardsPipe,
    HighlightDirective,
    CardCreateComponent
  ]
})

export class LearningModule {}
