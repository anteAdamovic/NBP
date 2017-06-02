import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { Sidebar } from './components/sidebar/sidebar.component';
import { Login } from './components/login/login.component';

// Examples
import { Examples } from './components/examples/examples.component';

// Services
import { LoginService } from './services/login/login.service';
import { DatabaseService } from './services/database/database.service';
import { ExampleService } from './services/example/example.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'examples/:id', component: Examples }
];

@NgModule({
  declarations: [
    AppComponent,
    Sidebar,
    Login,
    Examples
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, DatabaseService, ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
