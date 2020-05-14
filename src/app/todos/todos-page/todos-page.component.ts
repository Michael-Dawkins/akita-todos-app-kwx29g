import { Component, OnInit } from '@angular/core';
import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todos.service';
import { Observable, asyncScheduler } from 'rxjs';
import { map, filter, observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html'
})
export class TodosPageComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(public todosQuery: TodosQuery,
    private todosService: TodosService) {
  }

  ngOnInit() {
    this.todos$ = this.todosQuery.filteredTodos$;
    this.todosService.addInitialTodos()

    this.todosQuery.filteredTodos$
        .pipe(
          filter((todos) => todos.length > 0),
          // un-commenting the next line forces the callback to be called in the next macro task
          // thus leaving time for akita to finish processing the update of the text filter before updating the store again to change the selected item

          //observeOn(asyncScheduler)
        )
        .subscribe((todos) => {
          if (todos.length === 1) {
            this.todosService.updateSelectedTodo(todos[0].id)
          } else {
            this.todosService.updateSelectedTodo('')
          }
        })
  }

  updateTextFilter($event: string) {
    this.todosService.updateTextFilter($event)
  }

}
