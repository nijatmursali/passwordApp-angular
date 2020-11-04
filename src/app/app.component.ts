import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  enteredLength: Number = 0;
  useLetters: Boolean = false;
  useNumbers: Boolean = false;
  useSymbols: Boolean = false;
  password = '';


  onchangeLength(value: string) {
    this.enteredLength = parseInt(value);
  }
  onChangeuseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeuseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeuseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClicked() {

    let validChars = '';
    let generatedPass = '';
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvyz';
    const symbols = '!@#$%^&*()__+-=';

    if(this.useLetters) {
      validChars += letters;
    }
    if(this.useNumbers) {
      validChars += numbers;
    }
    if(this.useSymbols) {
      validChars += symbols;
    }

    for (let i = 0; i < this.enteredLength; i++) {
      const element = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[element];
    }

    this.password = generatedPass;

  }
}
