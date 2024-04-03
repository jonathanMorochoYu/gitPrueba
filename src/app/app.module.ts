import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';



import { Page7Component } from './page/page7/page7.component';
import { Page8Component } from './page/page8/page8.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    Page7Component,
    Page8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
