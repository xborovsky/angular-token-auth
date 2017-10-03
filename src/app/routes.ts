import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { SecuredComponent } from './secured/secured.component';
import { NotSecuredComponent } from './not-secured/not-secured.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component : HomeComponent },
    { path: 'not-secured', component : NotSecuredComponent },
    { path: 'secured', component : SecuredComponent, canActivate : [AuthGuardService] },
    { path: 'login', component : LoginComponent },
    { path: 'logout', component : LogoutComponent },
    { path: '**', redirectTo: '' }
];
