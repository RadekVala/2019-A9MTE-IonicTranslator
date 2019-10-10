import { Component } from '@angular/core';
import { TranslationService } from '../api/translation.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private userInput:string = ''
  private translationResult:string = ''

  constructor(private translationService: TranslationService) {}

  btnTranslateClicked(){
    console.log(this.userInput);
    //debugger;
    // call the API
    this.translationService.getTranslation(this.userInput)
    .subscribe((response) => {
      // response from server is back, process it
      console.log(response);
      this.translationResult = response['responseData']['translatedText'];
    });
    
  }

}
