import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMotorComponent } from './components/add-motor/add-motor.component';
import { MotorDetailComponent } from './components/motor-detail/motor-detail.component';
import { MotorListComponent } from './components/motor-list/motor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMotorComponent,
    MotorDetailComponent,
    MotorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
