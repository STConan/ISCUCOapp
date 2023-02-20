import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SurveyData } from './data/survey-data';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject} from '@awesome-cordova-plugins/sqlite/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})
export class SsdService {
  private storage: SQLiteObject;
  surveyList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  SurveyData: Observable<any>;

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'ISCUCO_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }
  
  dbState() {
    return this.isDbReady.asObservable();
  }
 
  fetchSurveys(): Observable<SurveyData[]> {
    return this.surveyList.asObservable();
  }
    // Render fake data
    getFakeData() {
      this.httpClient.get(
        'assets/dump.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getSurveys();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }
  // Get list
  getSurveys(){
    return this.storage.executeSql('SELECT * FROM surveytable', []).then(res => {
      let items: SurveyData[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({ 
            id: res.rows.item(i).id,
            Location_Store: res.rows.item(i).Location_Store,
            q1: res.rows.item(i).q1,
            q2: res.rows.item(i).q2,
            q3: res.rows.item(i).q3,
            q4: res.rows.item(i).q4,
            q5: res.rows.item(i).q5,
            q6: res.rows.item(i).q6,
            q7: res.rows.item(i).q7,
            q8: res.rows.item(i).q8,
            q9: res.rows.item(i).q9,
            q10: res.rows.item(i).q10,
            q11: res.rows.item(i).q11,
            q12: res.rows.item(i).q12,
            q13: res.rows.item(i).q13,
            q14: res.rows.item(i).q14,
            q15: res.rows.item(i).q15,
            q16: res.rows.item(i).q16,
            q17: res.rows.item(i).q17,
            q18: res.rows.item(i).q18,
            q19: res.rows.item(i).q19,
            q20: res.rows.item(i).q20,
            q21: res.rows.item(i).q21,
            q22: res.rows.item(i).q22,
            q23: res.rows.item(i).q23,
            q24: res.rows.item(i).q24,
            q25: res.rows.item(i).q25,
            q26: res.rows.item(i).q26,
            q27: res.rows.item(i).q27,
            q28: res.rows.item(i).q28,
            q29: res.rows.item(i).q29,
            q30: res.rows.item(i).q30,
            q31: res.rows.item(i).q31,
            q32: res.rows.item(i).q32,
            q33: res.rows.item(i).q33,
            q34: res.rows.item(i).q34,
            q35: res.rows.item(i).q35,
            q36: res.rows.item(i).q36,
            q37: res.rows.item(i).q37,
            q38: res.rows.item(i).q38,
            q39: res.rows.item(i).q39,
            q40: res.rows.item(i).q40,
            q41: res.rows.item(i).q41,
            q42: res.rows.item(i).q42,
            q43: res.rows.item(i).q43,
            q44: res.rows.item(i).q44,
            q45: res.rows.item(i).q45,
            q46: res.rows.item(i).q46,
            q47: res.rows.item(i).q47,
            q48: res.rows.item(i).q48,
            q49: res.rows.item(i).q49,
            q50: res.rows.item(i).q50,
            q51: res.rows.item(i).q51,
            q52: res.rows.item(i).q52,
            q53: res.rows.item(i).q53,
            q54: res.rows.item(i).q54,
            q55: res.rows.item(i).q55,
            q56: res.rows.item(i).q56,
            q57: res.rows.item(i).q57,
            q58: res.rows.item(i).q58,
            q59: res.rows.item(i).q59,
            q60: res.rows.item(i).q60,
            q61: res.rows.item(i).q61,
            q62: res.rows.item(i).q62,
            q63: res.rows.item(i).q63,
            q64: res.rows.item(i).q64,
            q65: res.rows.item(i).q65,
            q66: res.rows.item(i).q66,
            q67: res.rows.item(i).q67,
            q68: res.rows.item(i).q68,
            q69: res.rows.item(i).q69,
            q70: res.rows.item(i).q70,
            q71: res.rows.item(i).q71,
            q72: res.rows.item(i).q72,
            q73: res.rows.item(i).q73,
            q74: res.rows.item(i).q74,
            q75: res.rows.item(i).q75,
            q76: res.rows.item(i).q76,
            q77: res.rows.item(i).q77,
            q78: res.rows.item(i).q78
           });
        }
      }
      this.surveyList.next(items);
    });
  }
  // Add
  addSurvey(
    Location_Store,
    q1,
    q2, 
    q3, 
    q4, 
    q5, 
    q6, 
    q7, 
    q8, 
    q9, 
    q10, 
    q11, 
    q12, 
    q13,
    q14, 
    q15, 
    q16, 
    q17, 
    q18, 
    q19, 
    q20, 
    q21, 
    q22, 
    q23, 
    q24, 
    q25, 
    q26, 
    q27, 
    q28, 
    q29, 
    q30, 
    q31, 
    q32, 
    q33, 
    q34, 
    q35, 
    q36, 
    q37, 
    q38, 
    q39, 
    q40, 
    q41, 
    q42, 
    q43, 
    q44, 
    q45, 
    q46, 
    q47, 
    q48, 
    q49, 
    q50, 
    q51, 
    q52, 
    q53, 
    q54, 
    q55, 
    q56, 
    q57, 
    q58, 
    q59, 
    q60, 
    q61, 
    q62, 
    q63, 
    q64, 
    q65, 
    q66, 
    q67, 
    q68, 
    q69, 
    q70, 
    q71, 
    q72, 
    q73, 
    q74, 
    q75, 
    q76, 
    q77,
    q78
    ) {
    let data = [
    Location_Store,
    q1,
    q2, 
    q3, 
    q4, 
    q5, 
    q6, 
    q7, 
    q8, 
    q9, 
    q10, 
    q11, 
    q12, 
    q13,
    q14, 
    q15, 
    q16, 
    q17, 
    q18, 
    q19, 
    q20, 
    q21, 
    q22, 
    q23, 
    q24, 
    q25, 
    q26, 
    q27, 
    q28, 
    q29, 
    q30, 
    q31, 
    q32, 
    q33, 
    q34, 
    q35, 
    q36, 
    q37, 
    q38, 
    q39, 
    q40, 
    q41, 
    q42, 
    q43, 
    q44, 
    q45, 
    q46, 
    q47, 
    q48, 
    q49, 
    q50, 
    q51, 
    q52, 
    q53, 
    q54, 
    q55, 
    q56, 
    q57, 
    q58, 
    q59, 
    q60, 
    q61, 
    q62, 
    q63, 
    q64, 
    q65, 
    q66, 
    q67, 
    q68, 
    q69, 
    q70, 
    q71, 
    q72, 
    q73, 
    q74, 
    q75, 
    q76, 
    q77,
    q78
      ];
    return this.storage.executeSql(
      'INSERT or IGNORE INTO surveytable(id, Location_Store, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52, q53, q54, q55, q56, q57, q58, q59, q60, q61, q62, q63, q64, q65, q66, q67, q68, q69, q70, q71, q72, q73, q74, q75, q76, q77, q78) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data)
    .then(res => {
      this.getSurveys();
    });
  }
  
  // Delete
  deleteSurvey(id) {
    return this.storage.executeSql('DELETE FROM surveytable WHERE id = ?', [id])
    .then(_ => {
      this.getSurveys();
    });
  }

  exportDB() {
    this.sqlPorter.exportDbToSql(this.storage).then(res => {
      let date = new Date(),
        time = date.getTime(),
        day = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear(),
        fileName = "DB-" + day + "-" + month + "-" + year + "-" + time + ".sql";
      Filesystem.writeFile({
        path: fileName,
        data: res,
        directory: Directory.Cache,
        encoding: Encoding.UTF8
      }).then(file => {
        Share.share({
          title: 'Surveys performed today',
          text: 'Attached is the export for the Surveys conducted today. Please acknowledge.',
          url: file.uri,
        })
        })
    })
  }

}