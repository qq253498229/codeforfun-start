import {NgModule} from '@angular/core';
import {GenerateComponent} from './generate/generate.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {path: '', component: GenerateComponent}
];

@NgModule({
  declarations: [GenerateComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServiceModule {
}
