import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';

  quotes: Quote[] = [
    { author: 'Mugabe', details: 'Eat your veges' },
    { author: 'Kibaki', details: 'Love is sharing your popcorn' },
    { author: 'Barrack', details: 'I am here to kick ass and chew bubblegum.' }
  ];
}
