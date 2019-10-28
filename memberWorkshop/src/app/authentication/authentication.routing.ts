import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BootstrapElementsComponent } from './components/bootstrap-elements/bootstrap-elements.component';
import { CardsComponent } from './components/cards/cards.component';
import { WidgetsComponent } from './components/widgets/widgets.component';



const routes: Routes = [

    { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'fulll'},
    { path: AuthURL.Dashboard, component: DashboardComponent },
    { path: AuthURL.Setting, component: SettingComponent},
    { path: AuthURL.Profile, component: ProfileComponent},
    { path: AuthURL.Element, component: BootstrapElementsComponent},
    { path: AuthURL.Card, component: CardsComponent},
    { path: AuthURL.Widget, component: WidgetsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
