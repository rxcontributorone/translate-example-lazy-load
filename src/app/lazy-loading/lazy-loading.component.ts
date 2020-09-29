
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { translate, RxTranslation, asyncTranslate } from '@rxweb/translate';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Component({
    templateUrl: './lazy-loading.component.html',
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyLoadComponent implements OnInit {
    @translate({ translationName: 'lazy-load' }) lazyLoadContent: { [key: string]: any };
    activeLanguage: string;
    ngOnInit() {

    }
    constructor(private rxTranslation: RxTranslation, private router: Router, private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(t => {
            this.activeLanguage = t["languageCode"];
        })
    }
    changeLanguage(languageCode: string) {
        this.rxTranslation.change(languageCode);
    }
}