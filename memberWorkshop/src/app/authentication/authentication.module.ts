import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [DashboardComponent, SettingComponent, ProfileComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedsModule
  ]
})
export class AuthenticationModule { }
