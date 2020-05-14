import { TodosStore } from "./todos.store";
import { createTodo, Todo } from "./todo.model";
import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";

@Injectable({ providedIn: "root" })
export class TodosService {
  constructor(private todosStore: TodosStore) {
  }

  addInitialTodos() {
      this.todosStore.add(createTodo('hello'))
      this.todosStore.add(createTodo('hola'))
      this.todosStore.add(createTodo('hoola'))
  }

  updateTextFilter(newFilter: string) {
    this.todosStore.update(state => {
      return {
        ui: {
          ...state.ui,
          textFilter: newFilter
        }
      }
    })
  }

  updateSelectedTodo(id: ID) {
    this.todosStore.update(state => {
      return {
        ui: {
          ...state.ui,
          selectedItemId: id
        }
      }
    })
  }

}
