import { Component } from '@angular/core';
import { translate } from '@rxweb/translate';

@Component({
    selector:'app-lazy-load-child', 
    templateUrl: './lazy-load-child.component.html',
})
export class LazyLoadChildComponent {
    @translate({ translationName: 'lazy-load-child' }) lazyLoadChild: any;


   
}