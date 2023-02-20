import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'survey-english',
    loadChildren: () => import('./survey-english/survey-english.module').then( m => m.SurveyEnglishPageModule)
  },
  {
    path: 'survey-spanish',
    loadChildren: () => import('./survey-spanish/survey-spanish.module').then( m => m.SurveySpanishPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then( m => m.DatabasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
