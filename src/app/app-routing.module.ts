import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { GroupsComponent } from './groups/groups.component';
import { LoginComponent } from './login/login.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';



const routes: Routes = [
{path:'movies', component:MoviesPageComponent},
{path:'groups', component: GroupsComponent},
{path:'log-in', component: LoginComponent},
{path:'add-friends', component: AddFriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
