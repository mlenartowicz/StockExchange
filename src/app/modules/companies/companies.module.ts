import { NgModule } from '@angular/core';
import { CompaniesPageComponent } from './pages/companies-page.component';
import { CompaniesRoutingModule } from './companies-routing.module';

const components = [
  CompaniesPageComponent
];

@NgModule({
  declarations: [components],
  imports: [CompaniesRoutingModule]
})
export class CompaniesModule {}
