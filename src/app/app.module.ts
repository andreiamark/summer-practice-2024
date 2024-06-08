import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment.development';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { NgIf } from '@angular/common';
import {StorageModule} from "@angular/fire/storage"
import { UserService } from './user.service';
import { AddFriendsComponent } from './add-friends/add-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesPageComponent,
    AddFriendsComponent
  
  ],
  imports: [

    NgIf,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    StorageModule,

    AngularFireModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  
  ],
  providers: [
    provideClientHydration(),
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
