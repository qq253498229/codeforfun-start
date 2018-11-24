import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';
import {HomeComponent} from './shared/home/home.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: '', redirectTo: '/index', pathMatch: 'full'},
      {path: 'index', component: HomeComponent},
      {path: 'soft', loadChildren: './modules/soft/soft.module#SoftModule'},
      {path: 'service', loadChildren: './modules/service/service.module#ServiceModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
