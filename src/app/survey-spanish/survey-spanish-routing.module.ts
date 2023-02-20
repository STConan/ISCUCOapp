import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveySpanishPage } from './survey-spanish.page';

const routes: Routes = [
  {
    path: '',
    component: SurveySpanishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveySpanishPageRoutingModule {}
