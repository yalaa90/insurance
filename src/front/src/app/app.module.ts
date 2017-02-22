import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RadioButtonModule,SliderModule,DataTableModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {InsuranceComponent} from "./insurance/insrurance.component";

@NgModule({
  declarations: [
    AppComponent,
    InsuranceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RadioButtonModule,
    SliderModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
