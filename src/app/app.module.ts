import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





//COMPONENTES//
import { LoginComponent } from './components/login/login.component';
import { ShearmodulsModule } from './components/shearmoduls/shearmoduls.module';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShearmodulsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
