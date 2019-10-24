import { Component } from '@angular/core';
import { TranslationService } from '../api/translation.service';
import { LoadingController } from '@ionic/angular';
import { HistoryRecord } from '../models/history-record.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private userInput: string = ''
  private translationResult: string = ''
  private loading: any

  constructor(
    public loadingController: LoadingController,
    private translationService: TranslationService
  ) { }

  btnTranslateClicked() {
    
    console.log(this.userInput);
    //debugger;
    if (this.userInput.length > 1) {
      // call the API
      this.presentLoading();
      this.translationService.getTranslation(this.userInput)
        .subscribe((response) => {
          // response from server is back, process it
          console.log(response);
          this.translationResult = response['responseData']['translatedText'];
          let historyRecord = new HistoryRecord(this.userInput, this.translationResult)
          // hide loading dialog
          this.loading.dismiss();
        });
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Waiting for translation...'
    });
    await this.loading.present();
  }

}
