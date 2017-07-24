import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InterestComponent } from './Interest.component';

@NgModule({
  declarations: [
    InterestComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [InterestComponent]
})
export class AppModule { }
