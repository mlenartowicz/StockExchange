import { IndexesPageComponent } from './pages/indexes-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexesPageComponent
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
export class IndexesRoutingModule {}
