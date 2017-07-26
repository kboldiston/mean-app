import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { 
  MdToolbarModule, 
  MdButtonModule,
  MdSidenavModule, 
  MdListModule, 
  MdInputModule,
  MdCardModule,
  MdIconModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdListModule,
    MdInputModule,
    MdCardModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
