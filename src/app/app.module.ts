import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';


import { AppComponent } from './app.component';
import { AuthGuard } from './core/auth.guard';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotfoundComponentComponent } from './notfound-component/notfound-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

/*const appRoutes: Routes = [
  { path: 'create-account', component:  CreateAccountComponent,  canActivate: [AuthGuard]},
  { path: 'profile', component: ProfilePageComponent,  canActivate: [AuthGuard] },
  { path: 'home', component: MainPageComponent },
  { path: 'nothing', component: UserProfileComponent },
  { path: '',  component: NotfoundComponentComponent }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CreateAccountComponent,
    MainPageComponent,
    ProfilePageComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    CoreModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
