import{ async } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularListComponent } from './popular-list.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('PopularListComponent (inline template)', () => {

  let comp:    PopularListComponent;
  let fixture: ComponentFixture<PopularListComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

    //async beforeEach
    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            declarations:[ PopularListComponent ],
        })
        .compileComponents();
    }));

    //synchronous beforeEach
    beforeEach(()=>{
        fixture = TestBed.createComponent(PopularListComponent);
        comp = fixture.componentInstance;

        //query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
});