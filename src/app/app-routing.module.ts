import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMotorComponent } from './components/add-motor/add-motor.component';
import { MotorListComponent } from './components/motor-list/motor-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'motors', pathMatch: 'full' },
  { path: 'motors', component: MotorListComponent },
  { path: 'add', component: AddMotorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
