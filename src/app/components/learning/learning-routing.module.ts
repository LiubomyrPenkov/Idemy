import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardDetailsComponent } from './cards/card-details/card-details.component';
import { LearningComponent } from './learning/learning.component';
import { TestsComponent } from './tests/tests.component';
import { authGuard } from '../../guards/auth.guard';
import { canDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { CardCreateComponent } from './cards/card-create/card-create.component';

const learningRoutes: Routes = [
  {
    path: '',
    component: LearningComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivate: [authGuard],
        children: [
          {
            path: 'cards',
            component: CardListComponent,
          },
          {
            path: 'cards/create-card',
            component: CardCreateComponent,
            canDeactivate: [canDeactivateGuard],
          },
          {
            path: 'cards/:id',
            component: CardDetailsComponent,
          },
          {
            path: 'tests',
            component: TestsComponent,
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(learningRoutes)],
  exports: [RouterModule]
})

export class LearningRoutingModule { }
