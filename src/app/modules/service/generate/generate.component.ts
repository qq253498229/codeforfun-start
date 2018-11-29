import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenerateComponent implements OnInit {
  inputValue = '';
  moreFlag = false;
  model = {
    group: 'com.example',
    artifact: 'demo'
  };
  // 后台传过来的数据
  list = [
    {name: 'Eureka'},
    {name: 'Gateway'},
    {name: 'Oauth'}
  ];
  // 搜索框选项(string数组)
  options = [];

  constructor() {
  }

  ngOnInit() {
  }

  onInput(value: string): void {
    this.options = [];
    const unSelected = _.filter(this.list, (obj) => {
      return obj['selected'] !== true;
    });
    _.each(unSelected, (obj) => {
      if (new RegExp('^' + value).test(obj.name)) {
        this.options.push(obj.name);
      }
    });
  }

  remove(idx) {
    this.list[idx]['selected'] = false;
  }

  choose(value) {
    const that = this;
    _.each(this.list, (obj) => {
      if (obj.name === value) {
        obj['selected'] = true;
      }
    });
    setTimeout(function () {
      that.inputValue = '';
    });
  }

  generate() {
    const selected = _.filter(this.list, (obj) => {
      return obj['selected'] === true;
    });
    console.log(selected);
  }
}
