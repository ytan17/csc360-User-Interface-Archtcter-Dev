import{ async } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularItemComponent } from './popular-item.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('PopularItemComponent (inline template)', () => {

  let comp:    PopularItemComponent;
  let fixture: ComponentFixture<PopularItemComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

    //async beforeEach
    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations:[ PopularItemComponent ],
        })
        .compileComponents();
    }));

    //synchronous beforeEach
    beforeEach(()=>{
        fixture = TestBed.createComponent(PopularItemComponent);
        comp = fixture.componentInstance;

        //query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
});