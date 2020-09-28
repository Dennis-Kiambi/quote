import { Component } from '@angular/core';
import { Quote } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';
  newQuote = new Quote();

  quotes: Quote[] = [
    //{ author: 'Mugabe', details: 'Eat your veges', likes: 0, dislikes: 0 },
  ];

  get mostUpvoted() {
    return this.quotes.reduce(function (prevQuote, currQuote) {
      return (prevQuote.likes > currQuote.likes) ? prevQuote : currQuote;
    }, new Quote());
  }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    // quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
}
