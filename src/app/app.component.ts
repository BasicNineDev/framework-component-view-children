import {Component, QueryList, ViewChildren} from '@angular/core';
import {ChildrenComponent} from './children/children.component';


export interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}


@Component({
  selector: 'app-root',
  template: `
    <h3>부모</h3>
    <button type="button" (click)="toggle()">
      자식 토글
    </button>
    <div *ngFor="let checkbox of checkboxes">
      <children [checkbox]="checkbox"></children>
    </div>
  `,
  styles: []
})
export class AppComponent {
  checkboxes: Checkbox[] = [
    {id: 1, label: 'HTML', checked: true },
    {id: 2, label: 'CSS', checked: false },
    {id: 3, label: 'Javascript', checked: false }
  ];
  active = false;

  @ViewChildren(ChildrenComponent)
  myChildren: QueryList<ChildrenComponent>;

  toggle() {
    this.active = !this.active;

    /*
     * 자식 컴포넌트들을 순회하며 자식 컴포넌트의 공개된 프로퍼티 checkbox를 변경한다.
     * QueryList는 마치 자바스크립트 배열과 같이 사용할 수 있다.
     */
    this.myChildren.forEach(child => child.checkbox.checked = this.active);
  }
}
