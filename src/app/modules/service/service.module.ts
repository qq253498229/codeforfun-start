import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenerateComponent} from './generate/generate.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: GenerateComponent}
];

@NgModule({
  declarations: [GenerateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServiceModule {
}
