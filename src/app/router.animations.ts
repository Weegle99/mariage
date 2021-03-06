import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

export function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({opacity: 0}),
      animate('.5s ease-in-out', style({opacity: 1}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({opacity: 1}),
      animate('.5s ease-in-out', style({opacity: 0}))
    ])
  ]);
}