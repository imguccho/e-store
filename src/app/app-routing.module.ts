import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PhotosDetailsComponent } from './pages/photos-details/photos-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path:'photos-details/:id', canActivate: [AuthGuard], component: PhotosDetailsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
