import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyEnglishPage } from './survey-english.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyEnglishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyEnglishPageRoutingModule {}
