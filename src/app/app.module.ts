import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserWidgetModule } from './browser';
import { InternetExplorerModule } from './internet-explorer';
import { SharedModule } from './shared';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserWidgetModule,
    InternetExplorerModule,
  ],
})
export class AppModule {}
