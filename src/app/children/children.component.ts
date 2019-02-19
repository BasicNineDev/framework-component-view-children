import {Component, Input, OnInit} from '@angular/core';
import {Checkbox} from '../app.component';

@Component({
  selector: 'children',
  template: `
    <input type="checkbox"
           [id]="checkbox.id"
           [checked]="checkbox.checked">
    <label [for]="checkbox.id">
      {{ checkbox.label }}
    </label>
  `,
  styles: []
})
export class ChildrenComponent implements OnInit {

  @Input() checkbox: Checkbox;
  constructor() { }

  ngOnInit() {
  }

}
