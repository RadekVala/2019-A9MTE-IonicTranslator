import { Component } from '@angular/core';
import { HistoryRecord } from '../models/history-record.model';
import { HistoryService } from '../api/history.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private historyArray: HistoryRecord[]

  constructor(private history:HistoryService) {
    setTimeout(()=> {
      this.historyArray = history.historyArray
    }, 100)
  }


  ionViewDidEnter() {
    console.log('History TAB fully rendered');
    
    this.historyArray = this.history.historyArray
  }
}
