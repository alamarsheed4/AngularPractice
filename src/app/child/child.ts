import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child {

  @Input() name = ''

  @Input() employee !:{
    name: string,
    salary: number,
  }
}
