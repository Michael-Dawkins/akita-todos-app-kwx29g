import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Todo } from './state/todo.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  template: `
    <div>
     <div class="flex">
      {{todo.title}}
    </div>
   </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  ngOnInit() {
  }
}
