import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'companies',
    loadChildren: () => import('./modules/companies/companies.module').then(mod => mod.CompaniesModule),
  },
  {
    path: 'indexes',
    loadChildren: () => import('./modules/indexes/indexes.module').then(mod => mod.IndexesModule ),
  },
  {
    path: 'futures',
    loadChildren: () => import('./modules/futures/futures.module').then(mod => mod.FuturesModule ),
  },
  { path: '',
    redirectTo: '/companies',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
