import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';
  newQuote = new Quote();

  quotes: Quote[] = [
    { author: 'Mugabe', details: 'Eat your veges', likes: 0, dislikes: 0 },
    { author: 'Kibaki', details: 'Love is sharing your popcorn', likes: 0, dislikes: 0 },
    { author: 'Barrack', details: 'I am here to kick ass and chew bubblegum.', likes: 0, dislikes: 0 }
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    // quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
}
