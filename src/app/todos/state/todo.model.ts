import { guid } from '@datorama/akita';

export type Todo = {
  id: string;
  title: string;
};

export function createTodo(title: string) {
  return {
    id: guid(),
    title
  } as Todo;
}