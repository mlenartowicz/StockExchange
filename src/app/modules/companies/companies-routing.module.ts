import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesPageComponent } from './pages/companies-page.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPageComponent
  }
];

const setupRoute: Routes = [
  {
    path: '',
    children: routes
  }
];

@NgModule({
  imports: [RouterModule.forChild(setupRoute)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
