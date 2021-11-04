import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { FilterCapitalPipe } from './pipes/filter-capital.pipe';
import { FormsModule } from '@angular/forms';
import { FilterAllPipe } from './pipes/filter-all.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CountriesComponent,
    FilterCapitalPipe,
    FilterAllPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
