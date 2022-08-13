import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Component/card/card.component';
import { FormComponent } from './Component/form/form.component';
import { FormInputComponent } from './Component/form-input/form-input.component';
import { ButtonComponent } from './Component/button/button.component';
import { DataTableComponent } from './Component/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    FormInputComponent,
    ButtonComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
