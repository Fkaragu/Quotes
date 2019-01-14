import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote = [
    new Quote(1, 'Anonymous', 'I used to think i was indecisive but now im not too sure', new Date(2019, 1, 1)),
    new Quote(2, 'Anonymous', 'Life is short smile while you still have teeth', new Date(2019, 1, 2)),
    new Quote(3, 'Anonymous', 'Always remember that you are unique just like everyone else', new Date(2019, 1, 3)),
    new Quote(4, 'Anonymous', 'People say nothing is impossible but i do nothing every day', new Date(2019, 1, 4)),

  ]

  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)

  }

  toogleDetails(index) {
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}`)

      if (toDelete) {
        this.quote.splice(index, 1)
      }
    }
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quote.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
