import { Component, signal } from '@angular/core';
import { Parent } from './parent/parent';

@Component({
  imports: [Parent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
