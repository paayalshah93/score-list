import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { ListFilterPipe } from './pipe/list-filter.pipe';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeaderComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
