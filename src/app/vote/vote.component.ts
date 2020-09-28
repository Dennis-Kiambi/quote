import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from '../models';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();

  @Input()
  quote: Quote;

  increaseLikes() {
    this.quote.likes++
  }

  increaseDislikes() {
    this.quote.dislikes++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
