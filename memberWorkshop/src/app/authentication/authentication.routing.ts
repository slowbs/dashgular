import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [

    { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'fulll'},
    { path: AuthURL.Dashboard, component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
