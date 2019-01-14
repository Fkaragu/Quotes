import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quote = [
    new Quote(1, 'Anonymous Writer', 'I used to think i was indecisive but now im not too sure', new Date(2019, 1, 1),0,0),
    new Quote(2, 'Anonymous Writer', 'Life is short smile while you still have teeth', new Date(2019, 1, 2),0,0),
    new Quote(3, 'Anonymous Writer', 'Always remember that you are unique just like everyone else', new Date(2019, 1, 3),0,0),
    new Quote(4, 'Anonymous Writer', 'People say nothing is impossible but i do nothing every day', new Date(2019, 1, 4),0,0),

  ]

}
