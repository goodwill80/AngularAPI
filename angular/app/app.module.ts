import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { TodosComponent }  from './components/todos/todos.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { HomepageComponent }  from './components/homepage/homepage.component';
import { MovieComponent }  from './components/movie/movie.component';
import { ReditComponent }  from './components/reddit/reddit.component';
import { TodoService } from './components/services/todo.service';
import { MovieService } from './components/services/movie.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { routing } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { JSONP_PROVIDERS } from '@angular/http';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule],
  declarations: [ AppComponent, TodosComponent, NavbarComponent, HomepageComponent, MovieComponent, ReditComponent ],   // components and directives
  bootstrap: [ AppComponent ],     // root component
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, TodoService, HTTP_PROVIDERS, MovieService, JSONP_PROVIDERS ]                    // services
})
export class AppModule { }
