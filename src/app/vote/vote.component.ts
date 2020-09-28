import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();

  numberOfLikes: number = 0;
  // newQuote = new Quote();

  niceButtonClick() {
    this.numberOfLikes++;
  }

  lameButtonClick() {
    this.numberOfLikes--;
  }

  // deleteQuote(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }

  // deleteQuote(isComplete, index) {
  //   this.quote.splice(index, 1)
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
