import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { AlivePipe } from './pipes/alive.pipe';
import { DeadPipe } from './pipes/dead.pipe';
import { UnknownPipe } from './pipes/unknown.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    AlivePipe,
    DeadPipe,
    UnknownPipe,
    FilterPipe,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
