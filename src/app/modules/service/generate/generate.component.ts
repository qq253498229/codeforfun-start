import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as _ from 'underscore';
import {HttpClient} from '@angular/common/http';
import {NzMessageService, NzNotificationService} from 'ng-zorro-antd';

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
  list = [];
  // 搜索框选项(string数组)
  options = [];

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
    private note: NzNotificationService
  ) {
  }

  ngOnInit() {
    this.http.get<any[]>('/api/').subscribe(res => {
      this.list = res;
    });
  }

  onInput(value: string): void {
    this.options = [];
    const unSelected = _.filter(this.list, (obj) => {
      return obj['selected'] !== true;
    });
    _.each(unSelected, (obj) => {
      if (new RegExp('^' + value).test(obj.name) || new RegExp('^' + value).test(obj.key)) {
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
    if (!selected || selected.length === 0) {
      this.note.create('warning', '警告', '您尚未选择服务，请选择服务后再点击生成');
      return;
    }
    this.http.post('/api/generate', selected).subscribe(res => {
      window.location.href = '/api/download/' + res['name'];
    });
  }
}
