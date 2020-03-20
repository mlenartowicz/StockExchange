import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuturesPageComponent } from './pages/futures-page.component';

const routes: Routes = [
  {
    path: '',
    component: FuturesPageComponent
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
export class FuturesRoutingModule {}
