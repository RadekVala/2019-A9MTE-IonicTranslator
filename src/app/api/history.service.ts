import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HistoryRecord } from '../models/history-record.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public historyArray: HistoryRecord[] = []
  static readonly STORAGE_KEY = 'history'

  constructor(private storage: Storage) {
    console.log('History service created')
    this.storage.get(HistoryService.STORAGE_KEY).then( (recordArray) => {
      if(recordArray){
        recordArray = JSON.parse(recordArray)
        this.historyArray = recordArray
      }
    })
  }

  public saveRecord(record: HistoryRecord){
    this.historyArray.unshift(record)
    this.storage.set(
      HistoryService.STORAGE_KEY, // storage key
      JSON.stringify(this.historyArray) // storage value, accepts only strings
      );
  }
}
