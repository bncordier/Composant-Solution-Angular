import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

    {path: '', redirectTo: '/user', pathMatch: 'full'},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'user', component: UserProfileComponent},
    
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
