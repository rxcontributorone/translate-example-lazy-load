import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadComponent } from './lazy-loading/lazy-loading.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'en/lazy-load', pathMatch: 'full'
},
  {
    path: ':languageCode/lazy-load', component: LazyLoadComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
