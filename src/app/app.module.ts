import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ReclameComponent } from './reclame/reclame.component';
import { CharCapPipePipe } from './char-cap-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ReclameComponent,
    CharCapPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
