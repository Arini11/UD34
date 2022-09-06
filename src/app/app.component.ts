import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD34';

  txtInput = '0';
  resultat = '0';

  addNum(num: string) {
    if(this.resultat != '0' && num != '00') {
      this.txtInput = num;
    }
    else if(((this.txtInput == '0' || this.txtInput == '') || this.resultat != '0') && num == '00') {
      this.txtInput = '0';
    }
    else if(this.txtInput == '0') {
      this.txtInput = num;
    }
    else {
      this.txtInput += num;
    }

    this.resultat = '0';
  }

  addOperator(op: string) {
    if(this.resultat != '0') {
      this.txtInput = this.resultat + op;
    } else {
      this.txtInput += op;
    }

    this.resultat = '0';
  }

  esborrar( ){
    this.txtInput = this.txtInput.substring(0,this.txtInput.length-1);
  }

  calcular() {
    this.resultat = eval(this.txtInput);
  }
}
