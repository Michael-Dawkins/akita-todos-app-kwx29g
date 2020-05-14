import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './todos-page/todos-page.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [TodosPageComponent],
  declarations: [TodoComponent, TodosPageComponent]
})
export class TodosModule {}
