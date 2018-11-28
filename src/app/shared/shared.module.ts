import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';

const THIRD_MODULES = [
  NgZorroAntdModule
];
const COMPONENTS = [];
const DIRECTIVES = [];


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...THIRD_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {
}
