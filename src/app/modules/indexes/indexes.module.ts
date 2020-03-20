import { IndexesRoutingModule } from './indexes-routing.module';
import { IndexesPageComponent } from './pages/indexes-page.component';
import { NgModule } from '@angular/core';

const components = [
  IndexesPageComponent
];

@NgModule({
  declarations: [components],
  imports: [IndexesRoutingModule]
})
export class IndexesModule {}
