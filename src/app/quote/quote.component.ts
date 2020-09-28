import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../models';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input()
  quote: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
