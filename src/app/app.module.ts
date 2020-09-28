import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { VoteComponent } from './vote/vote.component';
import { QuoteComponent } from './quote/quote.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { MaxUpvoteHighlighterDirective } from './directives//max-upvote-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    VoteComponent,
    QuoteComponent,
    ElapsedTimePipe,
    MaxUpvoteHighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
