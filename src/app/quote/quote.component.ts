import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote = [
    new Quote(1, 'Anonymous Writer', 'I used to think i was indecisive but now im not too sure', new Date(2018, 1, 1),0,0),
    new Quote(2, 'Anonymous Writer', 'Life is short smile while you still have teeth', new Date(2018, 1, 2),0,0),
    new Quote(3, 'Anonymous Writer', 'Always remember that you are unique just like everyone else', new Date(2018, 1, 3),0,0),
    new Quote(4, 'Anonymous Writer', 'People say nothing is impossible but i do nothing every day', new Date(2018, 1, 4),0,0),

  ]

  upVote(i){
    this.quote[i].upVote +=1;
  }
  downVote(i){
    this.quote[i].downVote -=1;
  }

  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date()
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
