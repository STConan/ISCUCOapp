import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SsdService } from './../services/ssd.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-survey-english',
  templateUrl: './survey-english.page.html',
  styleUrls: ['./survey-english.page.scss'],
})
export class SurveyEnglishPage {
  mainForm: FormGroup;
  q4: boolean = false;
  q25: boolean = false;
  q31: boolean = false;
  q41: boolean = false;
  Other19: boolean = false;
  Other54: boolean = false;
  Other35: boolean = false;
  Other39: boolean = false;
  Other42: boolean = false;
  Other53: boolean = false;

  constructor(
    private db: SsdService,
    public formBuilder: FormBuilder,
    private router: Router,
    
  ) { }

  eventQ4(ev){
    if ( ev.target.value === "No" ) {
      this.q4 = true
    } else
      this.q4 = false
    return this.q4
  }

  eventQ25(ev){
    if ( ev.target.value === "Yes" ) {
      this.q25 = true
    } else
      this.q25 = false
    return this.q25
  }

  eventQ31(ev){
    if ( ev.target.value === "Yes" ) {
      this.q31 = true
    } else
      this.q31 = false
    return this.q31
  }

  eventQ41(ev){
    if ( ev.target.value === "No" ) {
      this.q41 = false
    } else
      this.q41 = true
      return this.q41
  }

  eventOther19(ev){
    let str = JSON.stringify(ev.target.value);
    let word = "specific";
    let result = str.includes(word);
    if (result) {
      this.Other19 = true
    } else 
    this.Other19 = false
    return this.Other19
  }

  eventOther35(ev){
    let str = JSON.stringify(ev.target.value);
    let word = "Other";
    let result = str.includes(word);
    if (result) {
      this.Other35 = true 
    } else
      this.Other35 = false
      return this.Other35
  }

  eventOther39(ev){
    let str = JSON.stringify(ev.target.value);
    let word = "Other";
    let result = str.includes(word);
    if (result) {
      this.Other39 = true 
    } else
      this.Other39 = false
      return this.Other39
  }
  eventOther42(ev){
    let str = JSON.stringify(ev.target.value);
    let word = "Other";
    let result = str.includes(word);
    if (result) {
      this.Other42 = true 
    } else
      this.Other42 = false
      return this.Other42
  }
  
  eventOther53(ev){
    let str = JSON.stringify(ev.target.value);
    let word = "Other";
    let result = str.includes(word);
    if (result) {
      this.Other53 = true 
    } else
      this.Other53 = false
      return this.Other53
  }

  eventOther54(ev){
    let str = JSON.stringify(ev.target.value);
    let word = "Others";
    let result = str.includes(word);
    if (result) {
      this.Other54 = true 
    } else
      this.Other54 = false
      return this.Other54
  }
  
  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      q1: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      q12: [''],
      q13: [''],
      q14: [''],
      q15: [''],
      q16: [''],
      q17: [''],
      q18: [''],
      q19: [''],
      q20: [''],
      q21: [''],
      q22: [''],
      q23: [''],
      q24: [''],
      q25: [''],
      q26: [''],
      q27: [''],
      q28: [''],
      q29: [''],
      q30: [''],
      q31: [''],
      q32: [''],
      q33: [''],
      q34: [''],
      q35: [''],
      q36: [''],
      q37: [''],
      q38: [''],
      q39: [''],
      q40: [''],
      q41: [''],
      q42: [''],
      q43: [''],
      q44: [''],
      q45: [''],
      q46: [''],
      q47: [''],
      q48: [''],
      q49: [''],
      q50: [''],
      q51: [''],
      q52: [''],
      q53: [''],
      q54: [''],
      q55: [''],
      q56: [''],
      q57: [''],
      q58: [''],
      q59: [''],
      q60: [''],
      q61: [''],
      q62: [''],
      q63: [''],
      q64: [''],
      q65: [''],
      q66: [''],
      q67: [''],
      q68: [''],
      q69: [''],
      q70: [''],
      q71: [''],
      q72: [''],
      q73: [''],
      q74: [''],
      q75: [''],
      q76: [''],
      q77: [''],
      q78: [''],
      q79: ['']
    })
  }

  onSubmit() {
    this.db.addSurvey(
      this.mainForm.value.q1,
      this.mainForm.value.q2,
      this.mainForm.value.q3,
      this.mainForm.value.q4,
      this.mainForm.value.q5,
      this.mainForm.value.q6,
      this.mainForm.value.q7,
      this.mainForm.value.q8,
      this.mainForm.value.q9,
      this.mainForm.value.q10,
      this.mainForm.value.q11,
      this.mainForm.value.q12,
      this.mainForm.value.q13,
      this.mainForm.value.q14,
      this.mainForm.value.q15,
      this.mainForm.value.q16,
      this.mainForm.value.q17,
      this.mainForm.value.q18,
      this.mainForm.value.q19,
      this.mainForm.value.q20,
      this.mainForm.value.q21,
      this.mainForm.value.q22,
      this.mainForm.value.q23,
      this.mainForm.value.q24,
      this.mainForm.value.q25,
      this.mainForm.value.q26,
      this.mainForm.value.q27,
      this.mainForm.value.q28,
      this.mainForm.value.q29,
      this.mainForm.value.q30,
      this.mainForm.value.q31,
      this.mainForm.value.q32,
      this.mainForm.value.q33,
      this.mainForm.value.q34,
      this.mainForm.value.q35,
      this.mainForm.value.q36,
      this.mainForm.value.q37,
      this.mainForm.value.q38,
      this.mainForm.value.q39,
      this.mainForm.value.q40,
      this.mainForm.value.q41,
      this.mainForm.value.q42,
      this.mainForm.value.q43,
      this.mainForm.value.q44,
      this.mainForm.value.q45,
      this.mainForm.value.q46,
      this.mainForm.value.q47,
      this.mainForm.value.q48,
      this.mainForm.value.q49,
      this.mainForm.value.q50,
      this.mainForm.value.q51,
      this.mainForm.value.q52,
      this.mainForm.value.q53,
      this.mainForm.value.q54,
      this.mainForm.value.q55,
      this.mainForm.value.q56,
      this.mainForm.value.q57,
      this.mainForm.value.q58,
      this.mainForm.value.q59,
      this.mainForm.value.q60,
      this.mainForm.value.q61,
      this.mainForm.value.q62,
      this.mainForm.value.q63,
      this.mainForm.value.q64,
      this.mainForm.value.q65,
      this.mainForm.value.q66,
      this.mainForm.value.q67,
      this.mainForm.value.q68,
      this.mainForm.value.q69,
      this.mainForm.value.q70,
      this.mainForm.value.q71,
      this.mainForm.value.q72,
      this.mainForm.value.q73,
      this.mainForm.value.q74,
      this.mainForm.value.q75,
      this.mainForm.value.q76,
      this.mainForm.value.q77,
      this.mainForm.value.q78,
      this.mainForm.value.q79
    ).then((res) => {
      this.mainForm.reset();
    });
    this.router.navigate(['/dashboard'])
  }

}