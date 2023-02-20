import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyEnglishPageRoutingModule } from './survey-english-routing.module';

import { SurveyEnglishPage } from './survey-english.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyEnglishPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SurveyEnglishPage]
})
export class SurveyEnglishPageModule {}
