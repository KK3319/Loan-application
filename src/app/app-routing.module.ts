import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';

const routes: Routes = [{
  path:" ",
  redirectTo:'home',
  pathMatch:'full'
},
{path:'newApplication',component:LoanApplicationComponent},
{
  path:'applicationList',
  component:ApplicationListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
