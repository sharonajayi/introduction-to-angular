import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';

@NgModule({
  declarations: [ //components, directives and pipes go here
    AppComponent,
    HousingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //define the root comppnent of module
})
export class AppModule { }
