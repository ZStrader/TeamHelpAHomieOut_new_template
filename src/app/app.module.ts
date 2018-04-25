import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';


import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotfoundComponentComponent } from './notfound-component/notfound-component.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'create-account', component:  CreateAccountComponent},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'home', component: MainPageComponent },
  { path: '**',  component: NotfoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CreateAccountComponent,
    MainPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppNavbarComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//export class RoutingModule { }
