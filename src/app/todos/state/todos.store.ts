import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface TodosState extends EntityState<Todo, string> {
  ui: {
    textFilter: string
    selectedItemId: string
  };
}

const initialState = {
  ui: { textFilter: '', selectedItemId: '' }
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState);
  }
}
