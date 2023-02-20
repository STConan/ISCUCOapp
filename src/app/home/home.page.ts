import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { SsdService } from './../services/ssd.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mainForm: FormGroup;
  Data : any[] = []

  constructor(
    private db: SsdService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchSurveys().subscribe(items => {
          this.Data = items
        })
      }
    });
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
    ).then((res) => {
      this.mainForm.reset();
    })
  }

  removeSurvey(id){
    this.db.deleteSurvey(id).then(async(res) => {
      let toast = await this.toast.create({
        message: 'Survey deleted',
        duration: 2500
      });
      toast.present();      
    })
  }

  ExportSurveys(){
    this.db.exportDB();
  }
}