import { Component } from '@angular/core';
import { HistoryRecord } from '../models/history-record.model';
import { HistoryService } from '../api/history.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private historyArray: HistoryRecord[]

  constructor(private history:HistoryService, private tts: TextToSpeech) {
    setTimeout(()=> {
      this.historyArray = history.historyArray
    }, 100)
  }

  public speak(toSpeak:string){
    this.tts.speak(
      {
        text: toSpeak,
        locale: 'cs-CZ',
        rate: 0.75
      }
    ).then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }


  ionViewDidEnter() {
    console.log('History TAB fully rendered');
    
    this.historyArray = this.history.historyArray
  }
}
