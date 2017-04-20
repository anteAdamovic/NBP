import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';

// Examples
import { TransactionsExample } from './components/examples/transactions/transactions-example.component';

// Services
import { DatabaseService } from './services/database/database.service';
import { ExampleService } from './services/example/example.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  { path: 'transactions', component: TransactionsExample }
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionsExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatabaseService, ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
