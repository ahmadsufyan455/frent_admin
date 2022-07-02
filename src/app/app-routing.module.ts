import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMotorComponent } from './components/add-motor/add-motor.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: AddMotorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
