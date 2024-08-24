import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';


import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { TeamComponent } from './team/team.component';
import { TestinomialsComponent } from './testinomials/testinomials.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'blogs', component:BlogsComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path : 'team', component:TeamComponent},
  {path: 'testinomials', component:TestinomialsComponent},
  {path:'payment', component:PaymentComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
