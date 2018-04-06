
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { GridModule } from 'jqwidgets-scripts/demos/angular/app/modules/grid.module';
import { RadioButtonModule } from 'jqwidgets-scripts/demos/angular/app/modules/radiobutton.module';
import { DropDownListModule } from 'jqwidgets-scripts/demos/angular/app/modules/dropdownlist.module';

@NgModule({  declarations: [      AppComponent  ],  
  imports: [      BrowserModule, CommonModule, GridModule, RadioButtonModule, DropDownListModule ],  
  providers: [],  
  bootstrap: [AppComponent]})
  

export class AppModule { }