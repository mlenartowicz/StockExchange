import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FuturesListComponent } from './components/futures-list.component';
import { NgModule } from '@angular/core';
import { FuturesPageComponent } from './pages/futures-page.component';
import { FuturesRoutingModule } from './futures-routing.module';
import { CommonModule } from '@angular/common';
import { FakeBackendInterceptor } from 'src/app/core/interceptors/fake-backend';

const components = [
  FuturesPageComponent,
  FuturesListComponent
];

@NgModule({
  declarations: [components],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }],
  imports: [FuturesRoutingModule, CommonModule, HttpClientModule]
})
export class FuturesModule {}
