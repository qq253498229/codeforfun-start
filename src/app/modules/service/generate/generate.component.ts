import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenerateComponent implements OnInit {
  inputValue: string;
  tags = [];
  options = [];
  model = {
    group: 'com.example',
    artifact: 'demo'
  };

  constructor() {
  }

  ngOnInit() {
  }

  onInput(value: string): void {
    this.options = value ? [
      value,
      value + value,
      value + value + value
    ] : [];
  }

  remove(idx) {
    this.tags.splice(idx, 1);
  }

  choose(option: any) {
    this.tags.push(option);
    this.inputValue = '';
  }
}
