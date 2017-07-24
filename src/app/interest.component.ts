import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interest',
  templateUrl: './interest.component.html'
})
export class InterestComponent {
  interest : number;
  amount : number;
  rate : number;
  isRound : boolean = false; 

  calculate() 
  {
      this.interest = this.amount * this.rate / 100;
  }
 
  reset() {
    this.amount = 0;
    this.rate = 0;
    this.interest = 0; 
    this.isRound = false; 
  }

  round() {
      this.isRound = !this.isRound;
      if(this.isRound){
            this.interest = Math.round(this.amount * this.rate / 100);
      }
      else{
          this.interest = this.amount * this.rate / 100;
      }
  }

}