import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveySpanishPageRoutingModule } from './survey-spanish-routing.module';

import { SurveySpanishPage } from './survey-spanish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveySpanishPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SurveySpanishPage]
})
export class SurveySpanishPageModule {}
