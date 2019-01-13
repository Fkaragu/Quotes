import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quote = [
        new Quote(1,'Watch Finding Nemo'),
        new Quote(2,'Buy Cookies'),
        new Quote(3, 'Get new Phone Case'),
        new Quote(4, 'Get Dog Food'),
        new Quote(5, 'Solve math homework'),
        new Quote(6, 'Plot my world domination plan'),

    ]
}
