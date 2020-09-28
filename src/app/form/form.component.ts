import { Quote } from '../models';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<Quote>();

  newQuote: Quote = new Quote();

  submitQuote() {
    //validate the input from html then emit quote
    //then clear form
    this.newQuote.createdAt = new Date();
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote();
  }
  constructor() { }

  ngOnInit(): void {
    /* this.newQuote.author = 'test author'
    this.newQuote.details = 'test details' */
  }

}
