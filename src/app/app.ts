import { Component, signal } from '@angular/core';
import { CompA } from './comp-a/comp-a';

@Component({
  imports: [CompA],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
