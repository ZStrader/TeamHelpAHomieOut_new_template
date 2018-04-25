import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountComponent } from '../create-account/create-account.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { NotfoundComponentComponent } from '../notfound-component/notfound-component.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'error', component: NotfoundComponentComponent },
  { path: 'create-account', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
