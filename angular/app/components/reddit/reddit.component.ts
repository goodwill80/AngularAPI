import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'reddit.component.html',
  styleUrls: ['reddit.component.css'],
  directives:[ ROUTER_DIRECTIVES ]
})
export class ReditComponent {
  stringInterpolation = "interpolation with property binding";

  // @Output() clicked = new EventEmitter();
  // onClicked() {
  //   this.clicked.emit("it works");
  // }

  test = "starting value";
  
  person = {
    name: 'Jon',
    age: 35
  }

  onClicked() {
    alert("it works!");
  }

  onTest(){
    return true;
  }
  @Input() myName = {name: "Jonathan", spouse:"Ann"};
  @Input() result: number=100;



}
