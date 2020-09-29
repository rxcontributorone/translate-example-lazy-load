import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxWebModule } from './rxweb.module';
import { LazyLoadComponent } from './lazy-loading/lazy-loading.component';
import { LazyLoadChildComponent } from './lazy-loading/shared/lazy-load-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadComponent, LazyLoadChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxWebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
