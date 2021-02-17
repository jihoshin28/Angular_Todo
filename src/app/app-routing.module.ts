import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {AboutComponent} from './pages/about/about.component'
import {TodosComponent} from './pages/todos/todos.component'
import {TodoFormComponent} from './pages/todo-form/todo-form.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'todo_list', component: TodosComponent},
  {path: 'todo_form', component: TodoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
