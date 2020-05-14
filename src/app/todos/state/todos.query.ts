import { Injectable } from '@angular/core';
import { TodosState, TodosStore } from './todos.store';
import { Todo } from './todo.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {
  textFilter$ = this.select(state => state.ui.textFilter);
  selectedTodoId$ = this.select(state => state.ui.selectedItemId)

  filteredTodos$ = combineLatest(
    this.textFilter$,
    this.selectAll()
  ).pipe(map(([textFilter, todos]) =>  this.filterList(todos, textFilter)))

  constructor(protected store: TodosStore) {
    super(store);
  }

   private filterList(todos: Todo[], textFilter: string) {
     return todos.filter((todo) => {
       return todo.title.toLowerCase().includes(textFilter)
     })
  }
}
